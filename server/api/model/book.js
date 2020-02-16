const uuid = require('uuid/v1');

class Book {
  constructor(id, title, author, numberOfPages) {
    if (!id) {
      this.id = uuid();
    } else {
      this.id = id;
    }
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
  }


  getId() { return this.id; }

  getTitle() { return this.title; }

  setTitle(title) { this.title = title; }

  getAuthor() { return this.author; }

  setAuthor(author) { this.author = author; }

  getNumberOfPages() { return this.numberOfPages; }

  setNumberOfPages(numberOfPages) { this.numberOfPages = numberOfPages; }

  setId(id) { this.id = id; }

  equals(book2) {
    return this.getId() === book2.getId()
        && this.getTitle() === book2.getTitle()
        && this.getAuthor() === book2.getAuthor()
        && this.getNumberOfPages() === book2.getNumberOfPages();
  }
}

export default Book;
