import StreamController from '../src/controllers/stream/streamController'
import { expect } from 'chai';

describe('getTweets', function () {
    it('shouldThrowException', function () {
        let result = new StreamController();
        let req: any;
        let res: any;
        expect(result.getTweets(req, res)).throws(Error()).to.be.true;
    });
});