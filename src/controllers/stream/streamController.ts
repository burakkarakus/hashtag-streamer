import * as mongoose from 'mongoose';
import * as express from 'express';
import { StreamTweetSchema } from '../../models/streamTweetSchema';
import { Request, Response } from 'express';
import { StreamItem } from '../../models/streamItem';
import "../../env";
import IControllerBase from 'interfaces/IControllerBaseInterface';
var tweets = require('tweets');

const StreamTweet = mongoose.model('StreamTweet', StreamTweetSchema);
const stream = new tweets({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

class StreamController implements IControllerBase {
    public router = express.Router();
    public path = "/getTweets";

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path + '/:hashtag', this.getTweets)
    }

    getTweets(req: Request, res: Response) {
        if (!req) {
            throw new Error()
        }

        try {
            stream.filter({ track: req.params.hashtag });
            stream.on('tweet', function (tweet) {
                console.log("listening tweets");
                try {
                    let item: StreamItem = tweet as StreamItem;
                    // console.log(JSON.stringify(item));
                    let newTweet = new StreamTweet(item);
                    console.log(JSON.stringify(newTweet));

                    newTweet.save((err, tweet) => {
                        if (err) {
                            console.log(err);
                        }
                        console.log("successfully added to db tweet id ", item.id);
                    });
                } catch (error) {
                    console.log(error);
                }
            });
        } catch (error) {
            console.log("error: ", JSON.parse(error));
        }
    }
}

export default StreamController;



