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
    const request = event.request;
    console.log('onfetch', {
        url: request.url,
        referrer: request.referrer,
    });
    if (request.url.startsWith(self.registration.scope)) {
        const url = new URL(request.url);
        const scopePath = new URL(self.registration.scope).pathname;
        // const relativePath = url.pathname.substring(scopePath.length - 1);

        const referrerPath = new URL(request.referrer).pathname;
        const relativePath = url.pathname.substring(referrerPath.length - 1);

        console.log('relative', relativePath);
        const searchString = `/trace`;
        if (relativePath.startsWith(searchString)) {
            const path = relativePath.substring(searchString.length);
            event.respondWith(new Response(`<!doctype html>
<html lang="en">
<body>
<script>
    (async function () {
        const response = await fetch(new URL(document.location.href).searchParams.get('trace'));
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        document.location.href = document.location.origin + '/trace/?trace=' + url;
    })();
</script>
</body>
</html>
`, {headers: {'Content-Type': 'text/html'}}));

            return;
        }
    }

    event.respondWith(openCache().then(function (cache) {
        return cache.match(request, {ignoreSearch: true}).then(function (response) {
            return response || fetch(request);
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

    const zipfile = entries.find(e => e.directory === false && e.filename.endsWith('.zip'));

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
    const mimeType = getContentType(entry.filename);
    const response = new Response(data, {
        headers: {
            // As the zip says nothing about the nature of the file, we extract
            // this information from the file name.
            'Content-Type': mimeType
        }
    });

    // if (entry.filename.endsWith('.zip')) {
    //     const blobUrl = URL.createObjectURL(data);
    //     console.log('blob url for %s: %s', entry.filename, blobUrl);
    // }

    console.log('-> Caching', location,
        '(size:', entry.uncompressedSize, 'bytes)');

    // If the entry is the index, cache its contents for root as well.
    if (entry.filename.split('/').at(-1).endsWith('index.html')) {
        // Response are one-use objects, as `.put()` consumes the data in the body
        // we need to clone the response in order to use it twice.
        const indexLocation = getLocation(entry.filename.slice(0, -'index.html'.length));
        console.log('putting index.html into', indexLocation)
        await cache.put(indexLocation, response.clone());
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
    'htm': 'text/html',
    'zip': 'application/zip',
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
