import logger from '../../../common/logger';

class BookService {
  getAll() {
    logger.info('Getting all');
    return Promise.resolve('These are all the books');
  }

  get(id) {
    logger.info('Getting by id');
    return Promise.resolve(`This is get by id. Id ${id}`);
  }

  save(book) {
    return Promise.resolve(`The book ${book} was saved`);
  }

  update(id) {
    return Promise.resolve(`The book ${id} was updated`);
  }

  delete(id) {
    return Promise.resolve(`The book ${id} was deleted`);
  }
}

export default new BookService();
