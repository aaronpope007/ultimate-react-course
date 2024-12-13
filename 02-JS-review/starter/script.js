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
const book = getBook(1)

const {title, author, pages, publicationDate, genres, hasMovieAdaptation} = book
console.log(title, author, pages, publicationDate, genres, hasMovieAdaptation);

console.log(genres);


const [primaryGenre, secondaryGenre] = genres

console.log(primaryGenre, secondaryGenre);

const myArray = [1, 2, 3, 4, 5];
const [first, second, third, fourth ] = myArray;
console.log(first, second, third);

// rest and spread operators
// rest element always goes on the en
// The rest operator collects multiple elements and "packs" them into an array (or object). It is typically used in function arguments or when destructuring arrays/objects.
const [thePrimaryGenre, theSecondaryGenre, ...otherGenres] = genres;
console.log(thePrimaryGenre, theSecondaryGenre, otherGenres);
console.log(otherGenres);
console.log(otherGenres[1]);

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0)
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const newGenres = [...genres, 'Epic Popedpg'];
console.log(newGenres);

// spread operator in objects allows us to add new properties and change existing ones
const updatedBook = {...book, moviePublicationDate: 2024-12-19, pages: 12}
updatedBook

console.log(1+5)

// template literals
const summary = `${title } is a book and it is ${pages} long. IT was written by ${author} in ${publicationDate.split("-")[0]}. The book has ${hasMovieAdaptation ? '' : 'not'} been adapted as a movie.`
summary;

// ternaries instead of if/else statements
// we use this to define a variable conditionally (or make other conditional decusions)
const overOneThousandPages = pages > 1000 ? 'over a thousand pages!' : 'less than 1000 pages';
overOneThousandPages;




