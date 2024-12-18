const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring objects and arrays
/*
const book = getBook(3);

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(title, author, pages, publicationDate, genres, hasMovieAdaptation);

console.log(genres);

const [primaryGenre, secondaryGenre] = genres;

console.log(primaryGenre, secondaryGenre);

const myArray = [1, 2, 3, 4, 5];
const [first, second, third, fourth] = myArray;
console.log(first, second, third);

// rest and spread operators
// rest element always goes on the en
// The rest operator collects multiple elements and "packs" them into an array (or object). It is typically used in function arguments or when destructuring arrays/objects.
const [thePrimaryGenre, theSecondaryGenre, ...otherGenres] = genres;
console.log(thePrimaryGenre, theSecondaryGenre, otherGenres);
console.log(otherGenres);
console.log(otherGenres[1]);

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const newGenres = [...genres, "Epic Popedpg"];
console.log(newGenres);

// spread operator in objects allows us to add new properties and change existing ones
const updatedBook = {
  ...book,
  moviePublicationDate: 2024 - 12 - 19,
  pages: 12,
};
updatedBook;

console.log(1 + 5);

// template literals
const summary = `${title} is a book and it is ${pages} long. IT was written by ${author} in ${publicationDate.split("-")[0]}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;
summary;

// ternaries instead of if/else statements
// we use this to define a variable conditionally (or make other conditional decusions)
const overOneThousandPages =
  pages > 1000 ? "over a thousand pages!" : "less than 1000 pages";
overOneThousandPages;

// arrow functions
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

// short circuiting and logical operators
console.log(true && 'This is true!!');
console.log(false && 'this is false. short circuited');
console.log(hasMovieAdaptation && "this book has a movie");
// falsy is: 0, '', null, undefined
console.log('truthy' && 'truthy with string')
console.log(0 && 'truthy with string');
console.log(true || 'some string');
console.log(false || 'seme string');

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || 'This book is not translated into Spanish';
spanishTranslation

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || 'no data';
// countWrong

// //nullish coalescing operator only returns falsy when the value is null or undefined
// const count = book.reviews.librarything.reviewsCount ?? 'no data';
// count;

// optional chaining
function getTotalReviewCount(book) {
  console.log(book)
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything

  return goodreads + librarything;
}
console.log(getTotalReviewCount(book))
*/
// The Array map array.map Method
// map, filter and reduce are the 3 that don't mutate the array and are super useful
const books = getBooks();

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}
const x = [1, 2, 3, 4, 5].map((el) => el * 9);
console.log(x);
// create an array that contains all of the titles of the books
const titles = books.map((book) => book.title);
console.log(titles);

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
console.log(essentialData);

// array filter method
// make an array with only books > 500 pages
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const newLongBooks = books
  .filter((book) => book.pages > 500 && book.hasMovieAdaptation)
  .map((book) => book.title);
newLongBooks;

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// array.reduce() method
const allTotalPagesWithMap = books
  .map((book) => book.pages)
  .reduce((totalPages, currentPages) => totalPages + currentPages, 0);
allTotalPagesWithMap;

const allPagesTotal = books.reduce(
  (sumOfPages, book) => sumOfPages + book.pages,
  0
);
allPagesTotal;

// array.sort method
const z = [3, 9, 5, 2, 7, 4, 8, 6, 1, 0];
//  it's good to use slice to have a copy of the array
const sorted = z.slice().sort((a, b) => a - b);
sorted;
z;

const sortedByPagesLongToShort = books.slice().sort((a, b) => a - b);
const pagesSorted = sortedByPagesLongToShort.map((book) => book.title);
pagesSorted;
//  working with immutable arrays
// 1 add object to an array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2 delete a book  from an array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3) update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);
booksAfterUpdate;

// Async JS promises
// fetch api

// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("jonas");

// async await

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await res.json();
  console.log(data);
}
getTodos();
