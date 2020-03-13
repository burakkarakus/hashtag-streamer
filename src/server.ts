import App from './app'

import * as bodyParser from 'body-parser'
import logger from './middleware/log'

import HomeController from './controllers/home/homeController'
import StreamController from './controllers/stream/streamController'
import TweetStreamController from './controllers/ui/tweetStreamController'


const app = new App({
    port: 3000,
    controllers: [
        new HomeController(),
        new StreamController(),
        new TweetStreamController()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        logger
    ]
})

app.listen()