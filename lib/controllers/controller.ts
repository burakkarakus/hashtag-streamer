import * as mongoose from 'mongoose';
import { StreamTweetSchema } from '../models/streamTweetSchema';
import { Request, Response } from 'express';
import { StreamItem } from 'models/streamItem';
import "../env";
var tweets = require('tweets');

const StreamTweet = mongoose.model('StreamTweet', StreamTweetSchema);
const stream = new tweets({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

export class StreamController {
    public getTweets(req: Request, res: Response) {
        stream.filter({ track: req.params.hashtag });
        stream.on('tweet', function (tweet) {
            try {
                let item: StreamItem = tweet as StreamItem;
                let newTweet = new StreamTweet(item);

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
    }
}



