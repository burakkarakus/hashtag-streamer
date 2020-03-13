import { StreamController } from "../controllers/controller";

export class Routes {
    public streamController: StreamController = new StreamController();

    public routes(app): void {
        app.route('/getTweets/:hashtag')
            // get tweets
            .get(this.streamController.getTweets);
    }
}