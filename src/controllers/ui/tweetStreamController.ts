import * as express from 'express'
import { Request, Response } from 'express'
import { StreamTweetSchema } from '../../models/streamTweetSchema';
import IControllerBase from '../../interfaces/IControllerBaseInterface';
import * as mongoose from "mongoose";

const Tweet = mongoose.model('StreamTweet', StreamTweetSchema);
class TweetStreamController implements IControllerBase {
    public path = '/tweets'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path, this.getAllTweets)
    }

    getAllTweets = (req: Request, res: Response) => {
        Tweet.find({}, (err, tweets) => {
            if (err) {
                console.log("error: ", err);
            }
            res.render('tweets/index', { tweets })
        }).sort({ 'created_at': -1 });
    }
}

export default TweetStreamController