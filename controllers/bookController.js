
function bookController(Book) {
  bookController.post((req, res) => {
    const book = new Book(req.body);
    book.save();
    return res.status(201).json(book);
  });
}

module.exports = bookController;
