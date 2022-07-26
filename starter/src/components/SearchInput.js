import { useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import { Book } from "./Book";

export const SearchInput = ({ to }) => {
  const [searchResults, setSearchResults] = useState([]);

  const onChange = (e) => {
    search(e.target.value).then((data) => {
      console.log(data);
      setSearchResults(data);
    });
  };

  return (
    <div className="app">
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={to} className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
      <div className="list-books">
        {searchResults.length > 0 && (
          <h2 className="bookshelf-title">Search Results</h2>
        )}
        <div className="bookshelf-books">
          <ol className="books-grid">
            {searchResults.length > 0 &&
              searchResults.map((book) => {
                return (
                  <li key={book.id} className={book.id}>
                    <Book
                      author={book.authors[0]}
                      title={book.title}
                      imageUrl={book.imageLinks.thumbnail}
                      id={book.id}
                      shelfAssigned={book.shelf}
                    />
                  </li>
                );
              })}
          </ol>
        </div>
      </div>
    </div>
  );
};
