import bookRouter from './api/controllers/book/book.router';

export default function routes(app) {
  app.use('/tbrjar/book', bookRouter);
}
