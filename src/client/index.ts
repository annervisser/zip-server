const loadButton = document.querySelector<HTMLButtonElement>('#load');
const urlInput = document.querySelector<HTMLInputElement>('#zipUrl');
loadButton.disabled = true;

const workerURL = './worker.js';
navigator.serviceWorker.register(workerURL)
    .then(() => console.log('Installing...'))
    .catch(error => console.log('Error while installing service worker:', error));


navigator.serviceWorker.ready.then(() => {
    let broadcast: BroadcastChannel;

    loadButton.onclick = () => {
        const url = urlInput.value;
        const id = crypto.randomUUID();
        broadcast?.close();
        broadcast = new BroadcastChannel(id);
        broadcast.onmessage = (message) => {
            switch (message.data.type) {
                case 'LOADED':
                    console.log('got message: LOADED');
                    const iframe = document.createElement('iframe');
                    iframe.src = `/${id}/`;
                    let iframeContainer = document.querySelector('#iframe-container');
                    iframeContainer.innerHTML = '';
                    iframeContainer.appendChild(iframe);
            }
        }

        navigator.serviceWorker.controller.postMessage({
            type: 'LOAD',
            id: id,
            url: url,
        });
    };
    loadButton.disabled = false;
});
