import "./App.css";
import { useState, useEffect } from "react";
import { AddButton } from "./components/AddButton";
import { SearchInput } from "./components/SearchInput";
import { Header } from "./components/Header";
import { Book } from "./components/Book";
import { getAll } from "./BooksAPI";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [booksData, setBooksData] = useState([]);
  const handleClick = () => {
    console.log("Add button clicked from app file");
    setShowSearchpage(!showSearchPage);
  };

  // let [dogImage, setDogImage] = useState(null);

  // 3. Create out useEffect function
  useEffect(() => {
    getAll()
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => {
        setBooksData(data);
      });
  }, []);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchInput navigate={() => setShowSearchpage(!showSearchPage)} />
      ) : (
        <div className="list-books">
          <Header headerText={"My Reads App"} />
          <div className="list-books-content">
            <div>
              {/* Currently Reading Shelf */}
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {booksData.length > 0 &&
                      booksData
                        .filter((book) => book.shelf === "currentlyReading")
                        .map((book) => {
                          console.log(
                            "book:",
                            book.title,
                            book.authors[0],
                            book.imageLinks.thumbnail
                          );
                          return (
                            <li>
                              <Book
                                author={book.authors[0]}
                                title={book.title}
                                imageUrl={book.imageLinks.thumbnail}
                              />
                            </li>
                          );
                        })}
                  </ol>
                </div>
              </div>
              {/* Wants to Read Shelf */}
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {booksData.length > 0 &&
                      booksData
                        .filter((book) => book.shelf === "wantToRead")
                        .map((book) => {
                          console.log(
                            "book:",
                            book.title,
                            book.authors[0],
                            book.imageLinks.thumbnail
                          );
                          return (
                            <li>
                              <Book
                                author={book.authors[0]}
                                title={book.title}
                                imageUrl={book.imageLinks.thumbnail}
                              />
                            </li>
                          );
                        })}
                  </ol>
                </div>
              </div>
              {/* Read Shelf */}
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {booksData.length > 0 &&
                      booksData
                        .filter((book) => book.shelf === "read")
                        .map((book) => {
                          console.log(
                            "book:",
                            book.title,
                            book.authors[0],
                            book.imageLinks.thumbnail
                          );
                          return (
                            <li>
                              <Book
                                author={book.authors[0]}
                                title={book.title}
                                imageUrl={book.imageLinks.thumbnail}
                              />
                            </li>
                          );
                        })}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div> */}
          <AddButton navigate={() => handleClick()} />
        </div>
      )}
    </div>
  );
}

export default App;
