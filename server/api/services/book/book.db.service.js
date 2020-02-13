import fs from 'fs';
import CsvReadableStream from 'csv-reader';
import { createObjectCsvWriter } from 'csv-writer';
import logger from '../../../common/logger';
import Book from '../../model/book';
// const createCsvWriter = csvWriter.createObjectCsvWriter;

const writer = createObjectCsvWriter({
  path: 'books.csv',
  header: [
    { id: 'title', title: 'title' },
    { id: 'author', title: 'author' },
    { id: 'numberOfPages', title: 'pages' },
  ],
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
    

   
    //return Promise.resolve(book);
  }

  getAll() {
    const inputStream = fs.createReadStream('books.csv', 'utf8');
    const readableStream = new CsvReadableStream({
      parseNumbers: true, parseBooleans: true, trim: true, skipHeader: true,
    });
    const books = [];

    return new Promise(resolve => {
      inputStream.pipe(readableStream)
        .on('data', row => {
          const book = new Book(row[0], row[1], row[2]);
          books.push(book);
        })
        .on('end', () => {
          resolve(books);
        });
    });
  }

  get(id) {
    return Promise.resolve(`This is get by id. Id ${id}`);
  }

  delete(id) {
    return Promise.resolve(`The book ${id} was deleted`);
  }

  update(id) {
    return Promise.resolve(`The book ${id} was updated`);
  }
}

export default new BookDatabase();
