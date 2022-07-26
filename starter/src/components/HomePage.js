import { Header } from "./Header";
import { Book } from "./Book";
import { AddButton } from "./AddButton";
import { update } from "../BooksAPI";

export const HomePage = ({ booksData, setBooksData }) => {
  const onUpdate = (shelf, id) => {
    update(booksData.filter((book) => book.id === id)[0], shelf).then(() => {
      setBooksData(
        booksData.map((book) => {
          if (book.id === id) {
            return {
              ...book,
              shelf,
            };
          }
          return book;
        })
      );
    });
  };
  return (
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
                            onUpdate={onUpdate}
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
                            onUpdate={onUpdate}
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
                            onUpdate={onUpdate}
                          />
                        </li>
                      );
                    })}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <AddButton to={"/search"} />
    </div>
  );
};
