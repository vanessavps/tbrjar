import fs from 'fs';
import CsvReadableStream from 'csv-reader';
import { createObjectCsvWriter } from 'csv-writer';
import logger from '../../../common/logger';
import Book from '../../model/book';

const mkdirp = require('mkdirp');

const bookFilePath = process.env.BOOKS_FILE_PATH || './';
const bookFile = `${bookFilePath}/books.csv`;

mkdirp(bookFilePath);

const writer = createObjectCsvWriter({
  path: bookFile,
  header: [
    { id: 'id', title: 'id' },
    { id: 'title', title: 'title' },
    { id: 'author', title: 'author' },
    { id: 'numberOfPages', title: 'pages' },
  ],
  // The header will not be written because append is true. Dumb library
  append: true,
});


class BookDatabase {
  save(book) {
    return new Promise(resolve => {
      const records = [book];
      writer.writeRecords(records)
        .then(() => {
          resolve(book);
        });
    });
  }

  getAll() {
    const inputStream = fs.createReadStream(bookFile, 'utf8');
    const readableStream = new CsvReadableStream({
      parseNumbers: true, parseBooleans: true, trim: true,
    });
    const books = [];

    return new Promise(resolve => {
      inputStream.pipe(readableStream)
        .on('data', row => {
          const book = new Book(row[0], row[1], row[2], row[3]);
          books.push(book);
        })
        .on('end', () => {
          logger.info(`Found ${books ? books.length : 0} books`);
          resolve(books);
        });
    });
  }

  get(id) {
    const inputStream = fs.createReadStream('books.csv', 'utf8');
    const readableStream = new CsvReadableStream({
      parseNumbers: true, parseBooleans: true, trim: true, skipHeader: true,
    });

    return new Promise(resolve => {
      inputStream.pipe(readableStream)
        .on('data', row => {
          if (row[0] === id) {
            const book = new Book(row[0], row[1], row[2], row[3]);
            resolve(book);
          }
        })
        .on('end', () => {
          resolve(`Book ${id} not found`);
        });
    });
  }

  delete(id) {
    return Promise.resolve(`The book ${id} was deleted`);
  }

  update(id) {
    return Promise.resolve(`The book ${id} was updated`);
  }
}

export default new BookDatabase();
