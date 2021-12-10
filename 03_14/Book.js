class Book {
  constructor(title, author, publisher) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.currentPage = 0;
  }
  NextPage() {
    this.currentPage++;
  }
  prevPage() {
    this.currentPage--;
  }
}
export default Book;
