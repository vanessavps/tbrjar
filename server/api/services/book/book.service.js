import logger from '../../../common/logger';
import db from './book.db.service';
import Book from '../../model/book';

class BookService {
  getAll() {
    logger.info('Getting all');
    return db.getAll();
  }

  get(id) {
    logger.info('Getting by id');
    return db.get(id);
  }

  save(data) {
    logger.debug(`Saving ${data.title}`); 
    const book = new Book(data.title, data.author, data.numberOfPages);

    return db.save(book);
  }

  update(id) {
    return db.update(id);
  }

  delete(id) {
    return db.delete(id);
  }
}

export default new BookService();
