import "./App.css";
import { useState, useEffect } from "react";
import { AddButton } from "./components/AddButton";
// import { SearchInput } from "./components/SearchInput";
import { Header } from "./components/Header";
import { Book } from "./components/Book";
import { getAll } from "./BooksAPI";

function App() {
  // const [showSearchPage, setShowSearchpage] = useState(false);
  const [booksData, setBooksData] = useState([]);
  const handleClick = () => {
    console.log("Add button clicked from app filez");
    // setShowSearchpage(!showSearchPage);
  };

  useEffect(() => {
    getAll().then((data) => {
      setBooksData(data);
    });
  }, []);

  return (
    <div className="app">
      {/* {showSearchPage ? ( */}
      {/* <SearchInput
        navigate={() => setShowSearchpage(!showSearchPage)}
        to={"/"}
      /> */}
      {/* ) : ( */}
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
                        return (
                          <li key={book.id} className={book.id}>
                            <Book
                              author={book.authors[0]}
                              title={book.title}
                              imageUrl={book.imageLinks.thumbnail}
                              id={book.id}
                              shelfAssigned={book.shelf}
                              setData={setBooksData}
                              booksData={booksData}
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
                        return (
                          <li key={book.id}>
                            <Book
                              author={book.authors[0]}
                              title={book.title}
                              imageUrl={book.imageLinks.thumbnail}
                              shelfAssigned={book.shelf}
                              setData={setBooksData}
                              booksData={booksData}
                              id={book.id}
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
                        return (
                          <li key={book.id}>
                            <Book
                              author={book.authors[0]}
                              title={book.title}
                              imageUrl={book.imageLinks.thumbnail}
                              shelfAssigned={book.shelf}
                              setData={setBooksData}
                              booksData={booksData}
                              id={book.id}
                            />
                          </li>
                        );
                      })}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <AddButton navigate={() => handleClick()} to={"/search"} />
      </div>
      {/* )} */}
    </div>
  );
}

export default App;
