import logger from '../../../common/logger';
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
    save(book)
    {
        var records = [book];
        csvWriter.writeRecords(records)
        .then(()=> { 
            logger.info(`The book ${book.title} was saved`);
        });
        
        return Promise.resolve(book);
    }
}

export default new BookDatabase();