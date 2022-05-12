import express from 'express';

export class DefaultServer {

    static create() {
        const app = express();
        return app;
    }

}