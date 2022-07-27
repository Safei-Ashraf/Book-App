import { Book } from "./Book";

export const Shelf = ({ shelf, books, updateShelf }) => {
  // console.log("shelf books", books);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.length > 0 &&
            books
              .filter((book) => {
                return book.shelf === shelf.shelfName;
              })
              .map((book) => {
                return (
                  <li key={book.id} className={book.id}>
                    <Book
                      book={book}
                      authors={book.authors}
                      imageUrl={book.imageLinks.thumbnail}
                      title={book.title}
                      updateShelf={updateShelf}
                    />
                  </li>
                );
              })}
        </ol>
      </div>
    </div>
  );
};
