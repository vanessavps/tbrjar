import * as express from 'express';
import controller from './book.controller';

export default express
  .Router()
  .post('/', controller.create)
  .put('/:id', controller.update)
  .get('/', controller.getAll)
  .get('/draw/', controller.drawBook)
  .get('/:id', controller.get)
  .delete('/:id', controller.delete);
