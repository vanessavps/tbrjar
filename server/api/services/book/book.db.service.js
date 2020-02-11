import logger from '../../../common/logger';
const fs = require('fs');
const csvReadableStream = require('csv-reader');

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'books.csv',
    header: [
        {id: 'title', title: 'title'},
        {id: 'author', title: 'author'},
        {id: 'numberOfPages', title: 'pages'}
    ]
});


class BookDatabase {
    save(book) {
        var records = [book];
        csvWriter.writeRecords(records)
        .then(()=> { 
            logger.info(`The book ${book.title} was saved`);
        });
        
        return Promise.resolve(book);
    }

    getAll(book) {
        let inputStream = fs.createReadStream('books.csv', 'utf8');
        inputStream
        .pipe(new csvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true , header: false}))
        .on('data', function (row) {
            console.log('A row arrived: ', row);
        })
        .on('end', function (data) {
            console.log('No more rows!');
        });

        return Promise.resolve("books!");
    }
}

export default new BookDatabase();