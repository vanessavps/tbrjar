const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../server/common/server');
const carrieBook = require('../../data/carrie-book.json');

const { assert } = chai;

chai.use(chaiHttp);

describe('/POST book', () => {
  it('Should create a new book and return it', done => {
    chai.request(server)
      .post('/book')
      .send(JSON.stringify(carrieBook))
      .end((err, res) => {
        if (err) {
          console.log(JSON.stringify(err));
          done(err);
        } else {
          assert(res.status, 200);
          done();
        }
      });
  });
});
