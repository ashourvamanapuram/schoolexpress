// src/index.ts

import { app } from 'electron';

interface AppInterface {
    openFile(path: string, fileExtension?: string): void;
}

const app = app || require('electron')();

/**
 * Open a file in the application's default browser.
 */
function openFile(path: string, fileExtension?: string) {
    const filename = path.replace(/\.[^\s]*/g, '.tmp');
    if (fileExtension && !/[^\s]+/.test(filename)) {
        app.defaultView?.create(`${filename}.${fileExtension}`, () => {
            console.log(`File opened at ${path}`);
        });
    } else {
        app.openURL(new File([path], `${filename}.tmp`));
    }
}

// src/main.ts

import { openFile } from './utils';

const main = app || require('electron')();

main.on('ready', () => {
    const path = 'your-project-file.txt';
    openFile(path);
});

if (process.env.NODE_ENV === 'development') {
    // For development, you can use an in-memory file system.
    openFile(path, '.txt');
}
