import examplesRouter from './api/controllers/examples/router';
import bookRouter from './api/controllers/book/book.router';

export default function routes(app) {
  app.use('/tbrjar/examples', examplesRouter);
  app.use('/tbrjar/book', bookRouter);
}
