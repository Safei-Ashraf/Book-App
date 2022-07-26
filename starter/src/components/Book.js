import { useState } from "react";
import { ShelfChangerButton } from "./ShelfChangerButton";

export const Book = ({
  title,
  author,
  imageUrl,
  shelfAssigned,
  id,
  setData,
  booksData,
  onUpdate,
}) => {
  const [selectedShelf, setSelectedShelf] = useState(shelfAssigned);
  console.log("books data15:", booksData);

  const bookShelf = (shelf) => {
    onUpdate(shelf, id);
    setSelectedShelf(shelf);
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
