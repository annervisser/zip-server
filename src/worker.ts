import * as zip from "@zip.js/zip.js";

export {};
declare const self: ServiceWorkerGlobalScope;

var ZIP_URL = '/kiss-example.zip';
zip.configure({
    useWebWorkers: false
});

// During installation, extend the event to recover the package
// for this recipe and install into an offline cache.
self.oninstall = function (event) {
    console.log('Installed!');
    event.waitUntil(
        self.skipWaiting(),
        // fetch(ZIP_URL)
        //     .then(function (response) {
        //         return response.blob();
        //     })
        //     .then((blob) => new zip.ZipReader(new zip.BlobReader(blob)))
        //     .then((reader) => reader.getEntries())
        //     .then((entries) => {
        //         console.log('Installing', entries.length, 'files from zip');
        //         return Promise.all(entries.map(entry => cacheEntry(entry)));
        //     })
        //     .then(() => self.skipWaiting()) // control clients ASAP
        //     .then(() => console.log('done?'))
    );
};

// Control the clients as soon as possible.
self.onactivate = function (event) {
    console.log('Activated!');
    event.waitUntil(self.clients.claim());
};

let broadcast: BroadcastChannel;
self.onmessage = async (message) => {
    switch (message.data.type) {
        case 'LOAD':
            console.log('got message LOAD');
            broadcast = new BroadcastChannel(message.data.id);
            await replaceCache(message.data.url);
            broadcast.postMessage({
                type: 'LOADED'
            });

    }
}

// Answer by querying the cache. If fail, go to the network.
self.onfetch = function (event) {
    console.log('onfetch', event.request.url);
    event.respondWith(openCache().then(function (cache) {
        return cache.match(event.request, {ignoreSearch: true}).then(function (response) {
            return response || fetch(event.request);
        });
    }));
};

async function replaceCache(url: string) {
    const response = await fetch(url);
    const blob = await response.blob();
    const reader = new zip.ZipReader(new zip.BlobReader(blob));
    const entries = await reader.getEntries();
    await caches.delete('cache-from-zip');
    await Promise.all(entries.map(entry => cacheEntry(entry)));
    console.log('Installing', entries.length, 'files from zip');
    await self.skipWaiting();
}

// Cache one entry, skipping directories.
async function cacheEntry(entry: zip.Entry): Promise<void> {
    console.log('caching entry')
    if (entry.directory) {
        return;
    }

    const data = await entry.getData(new zip.BlobWriter());
    const cache = await openCache();
    const location = getLocation(entry.filename);
    const response = new Response(data, {
        headers: {
            // As the zip says nothing about the nature of the file, we extract
            // this information from the file name.
            'Content-Type': getContentType(entry.filename)
        }
    });

    console.log('-> Caching', location,
        '(size:', entry.uncompressedSize, 'bytes)');

    // If the entry is the index, cache its contents for root as well.
    if (entry.filename === 'index.html') {
        // Response are one-use objects, as `.put()` consumes the data in the body
        // we need to clone the response in order to use it twice.
        console.log('putting index.html into', getLocation())
        await cache.put(getLocation(), response.clone());
    }

    return await cache.put(location, response);
}

// Return the location for each entry.
function getLocation(filename: string = null): string {
    return location.href.replace(/worker\.js$/, broadcast.name + '/' + (filename || ''));
}

const contentTypesByExtension = {
    'css': 'text/css',
    'js': 'application/javascript',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'html': 'text/html',
    'htm': 'text/html'
} as const;

// Return the content type of file based on the name extension
function getContentType(filename: string): string {
    const tokens = filename.split('.');
    const extension = tokens[tokens.length - 1];
    return contentTypesByExtension[extension] ?? 'text/plain';
}

// Opening a cache is an expensive operation. By caching the promise
// returned by `cache.open()` we only open the cache once.
let cache: Cache = null;

async function openCache(): Promise<Cache> {
    if (cache !== null) {
        return cache;
    }

    return await caches.open('cache-from-zip');
}
