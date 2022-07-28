import { useState } from "react";
import { Link } from "react-router-dom";
import { search, getAll, update } from "../BooksAPI";
import { Book } from "./Book";

export const SearchPage = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState([]);

  const updateShelf = async (book, shelf) => {
    await update(book, shelf);
    await loadSearchData(searchTerm);
  };

  const handleSearch = (term) => {
    console.log("search Term", term);
    setSearchTerm(term);
    loadSearchData(term);
  };

  const loadSearchData = async (searchTerm) => {
    //1-fetch search books list
    //2-fetch books data from homepage
    //3- compare both lists
    //4- if one book match on the other list, replace it with data on homepage book data, there is a slight delay
    await search(searchTerm).then((searchData) => {
      getAll().then((pureBooksData) => {
        searchData && console.log("data:", searchData);
        if (searchData && searchData.error) {
          setError(searchData.error);
          return;
        }
        const finalData =
          searchData &&
          searchData.map((item) => {
            let book = item;
            pureBooksData.forEach((respItem) => {
              if (respItem.id === item.id) {
                book = respItem;
              }
            });
            return book;
          });
        setBooks(finalData);
        setError("");
      });
    });
  };

  return (
    <div className="app">
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              onChange={(e) => {
                //allow only english letters and numbers.
                let value = e.target.value;
                /^[A-Za-z][A-Za-z0-9]*$/.test(value)
                  ? handleSearch(value)
                  : handleSearch("");
              }}
              // value={searchTerm}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
      {error.length < 1 && (
        <div className="list-books">
          {books && books.length > 0 && (
            <h2 className="bookshelf-title">Search Results</h2>
          )}
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books &&
                books.length > 0 &&
                books.map((book) => {
                  console.log("book data:", book);
                  return (
                    <li key={book.id} className={book.id}>
                      <Book
                        book={book}
                        authors={book.authors}
                        imageUrl={
                          book.imageLinks ? book.imageLinks.thumbnail : ""
                        }
                        title={book.title}
                        updateShelf={updateShelf}
                      />
                    </li>
                  );
                })}
            </ol>
          </div>
        </div>
      )}
      {error.length > 1 && <div className="error-search">{error}</div>}
    </div>
  );
};
