import chai from 'chai';

import request from 'supertest';
import Server from '../../../server';
import carrieBook from '../../data/carrie-book.json'

const { assert } = chai;

describe('/POST book', () => {
  it('Should create a new book and return it', done => {
    request(Server)
      .post('/tbrjar/book')
      .set('Content-Type', 'application/json')
      .send(JSON.stringify(carrieBook))
      .end((err, res) => {
        if (err) {
          console.log(JSON.stringify(err));
          done(err);
        } else {
          assert.equal(res.status, 201);
          assert.isDefined(JSON.parse(res.text).id);
          assert.equal(JSON.parse(res.text).title, 'Carrie');
          assert.equal(JSON.parse(res.text).author, 'Stephen King');
          assert.equal(JSON.parse(res.text).numberOfPages, 340);
          done();
        }
      });
  });
});