// simple endpoint that just returns a JSON format of books
const books = (req, res) => {
  res.status(200).json({
    "Harry Potter" : 500,
    "Odyssey" : 356,
    "another book" : 23
  });
}

module.exports = books;