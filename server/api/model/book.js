"use strict";

class Book {
    constructor(title, author, numberOfPages) {
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages; 
    }

    getTitle() { return this.title;}

    setTitle(title) { this.title = title; }

    getAuthor() { return this.author;}

    setAuthor(author) { this.author = author;}

    getNumberOfPages() {  return this.numberOfPages; }

    setNumberOfPages(numberOfPages) { this.numberOfPages = numberOfPages; }

    equals(book2) {
        return this.getTitle() == book2.getTitle() 
        && this.getAuthor() == book2.getAuthor()
        && this.getNumberOfPages() == book2.getNumberOfPages();
    }

}

export default Book;