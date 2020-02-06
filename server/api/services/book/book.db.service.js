import logger from '../../../common/logger';

class BookDatabase {
    save(book)
    {
        logger.info(`The book ${book.title} was saved`);
        return Promise.resolve(book);
    }
}

export default new BookDatabase();