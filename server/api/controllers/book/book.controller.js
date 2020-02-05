import BookService from '../../services/book/book.service';

export class BookController {
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

  create(req, res) {
    BookService
      .save(req.body)
      .then(r => res
        .status(201)
        .location(`/tbrjar/book/${r.id}`)
        .json(r));
  }
}

export default new BookController();
