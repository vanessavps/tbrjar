import * as express from 'express';
import controller from './controller';

export default express
.Router()
.get('/book', controller.getAll)
.get('/book/:id', controller.get)
.post('/book', controller.create)
.put('/book/:id', controller.update);