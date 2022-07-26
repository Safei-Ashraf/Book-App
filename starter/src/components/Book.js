import { useState } from "react";
import { ShelfChangerButton } from "./ShelfChangerButton";
export const Book = ({ title, author, imageUrl, shelfAssigned, id }) => {
  const [selectedShelf, setSelectedShelf] = useState(shelfAssigned);
  const bookShelf = (shelf) => {
    shelfAssigned !== shelf &&
      setSelectedShelf((selectedShelf) => (selectedShelf = shelf));
    console.log("shelf", shelfAssigned, "id", id);
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
        <ShelfChangerButton bookShelf={bookShelf} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
      {console.log("shelf now", selectedShelf)}
    </div>
  );
};
