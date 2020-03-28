require("../config/mongoDB");

const Author = require("../models/author");
const Book = require("../models/book");

// const newAuthor = new Author({
//   first_name: "Albert",
//   last_name: "Einstein",
//   date_of_birth: new Date(1879, 2, 14),
//   field_of_study: "non-fiction",
//   date_of_death: new Date(1995, 3, 18)
// });

// 5e7ed38f2ea8f8033c488d41,

// const newBook = new Book({
//   title: "The world as I see it",
//   author: "5e7ed38f2ea8f8033c488d41",
//   summary:
//     "Albert Einstein believes in humanity, in a peaceful world of mutual helpfulness, and in the high mission of science. This book is intended as a plea for this belief at a time which compels every one of us to overhaul his mental attitude and his ideas.",
//   isbn: "978-0806527901"
// });

// newBook
//   .save()
//   .then(response => {
//     console.log(response);
//   })
//   .catch(console.error);

// newAuthor
//   .save()
//   .then(response => {
//     console.log(response);
//   })
//   .catch(console.error);

/**
 * Finding all documents
 */
// Author.find()
//   .then(console.log)
//   .catch(console.error);

/**
 * Finding a specific document
 */
// Author.findById("5e7ed550e838cb00c63d6cf4")
//   .then(console.log)
//   .catch(console.error);

/**
 * Updating the author name
 */
Author.findByIdAndUpdate("5e7ed550e838cb00c63d6cf4", {
  $set: {
    first_name: "Stephen",
    last_name: "Hawking"
  }
})
  .then(console.log)
  .catch(console.error);

/**
 * Finding by first name
 */
Author.find({ first_name: "Albert" })
  .then(console.log)
  .catch(console.error);
