import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routing/routes";
import * as mongoose from "mongoose";

class Application {

    public mongoUrl: string = 'mongodb://localhost/hashtagDB';
    public application: express.Application;
    public routes: Routes = new Routes();

    constructor() {
        this.application = express();
        this.config();
        this.routes.routes(this.application);
        this.mongoSetup();
    }

    private config(): void {
        // support application/json type post data
        this.application.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.application.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}

export default new Application().application;