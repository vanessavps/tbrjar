import logger from '../../../common/logger';
import db from './book.db.service';
import Book from './../../model/book.js';

var book = require('./../../model/book').default;

class BookService {
  getAll() {
    logger.info('Getting all');
    return Promise.resolve('These are all the books');
  }

  get(id) {
    logger.info('Getting by id');
    return Promise.resolve(`This is get by id. Id ${id}`);
  }

  save(data) {
    logger.info('Service!');
    logger.info(`This is the data ${data.title}`);

    let book = new Book(data.title,data.author, data.numberOfPages);
    logger.info(`This is the book ${book}`);

    return db.save(book);
  }

  update(id) {
    return Promise.resolve(`The book ${id} was updated`);
  }

  delete(id) {
    return Promise.resolve(`The book ${id} was deleted`);
  }
}

export default new BookService();
