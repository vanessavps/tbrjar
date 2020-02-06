import logger from '../../../common/logger';
import BookService from '../../services/book/book.service';

export class BookController {

  create(req, res) {
    logger.info(req.body);

    BookService
      .save(req.body)
      .then(r => res
        .status(201)
        .location(`/tbrjar/book/${r.id}`)
        .json(r));
  }

  getAll(req, res) {
    BookService.getAll()
      .then(r => res.json(r));
  }

  get(req, res) {
    BookService
      .get(req.params.id)
      .then(r => {
        if (r) {
          res.json(r);
        } else {
          res.status(404)
            .end();
        }
      });
  }

  delete(req, res) {
    BookService
      .delete(req.params.id)
      .then(r => {
        if (r) {
          res.json(r);
        } else {
          res.status(404)
            .end();
        }
      });
  }

  update(req, res) {
    BookService
      .update(req.params.id)
      .then(r => {
        if (r) {
          res.json(r);
        } else {
          res.status(404)
            .end();
        }
      });
  }

}

export default new BookController();
