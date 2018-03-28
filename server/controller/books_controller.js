let books = [];
let id = 0;

module.exports = {
  read: (request, response) => {
    response.status(200).send(books);
  },

  create: (request, response) => {
    let book = {
      title: request.body.title,
      author: request.body.author,
      id: id
    };
    id++;
    books.push(book);
    response.status(200).send(books);
  },

  update: (request, response) => {
    let index = 0;

    books.forEach((elem, idx) => {
      if (elem.id === Number(request.params.id)) {
        index = idx;
      }
    });

    books[index] = {
      title: request.body.title || books[index].title,
      author: request.body.author || books[index].author,
      id: books[index].id
    };

    response.status(200).send(books);
  },

  delete: (request, response) => {
    let index = 0;

    books.forEach((elem, idx) => {
      if (elem.id === Number(request.params.id)) {
        index = idx;
      }
    });

    books.splice(index, 1);
    response.status(200).send(books);
  }
};
