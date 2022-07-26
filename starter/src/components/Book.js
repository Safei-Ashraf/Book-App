import { useState } from "react";
import { ShelfChangerButton } from "./ShelfChangerButton";
import { update } from "../BooksAPI";

export const Book = ({
  title,
  author,
  imageUrl,
  shelfAssigned,
  id,
  setData,
  booksData,
}) => {
  const [selectedShelf, setSelectedShelf] = useState(shelfAssigned);

  const bookShelf = (shelf) => {
    update(booksData.filter((book) => book.id === id)[0], shelf).then(() => {
      setSelectedShelf(shelf);
      setData(
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
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${imageUrl}")`,
          }}
        ></div>
        <ShelfChangerButton
          bookShelf={bookShelf}
          currentShelf={selectedShelf}
          bookId={id}
        />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
      {/* {console.log("shelf now", selectedShelf)} */}
    </div>
  );
};
