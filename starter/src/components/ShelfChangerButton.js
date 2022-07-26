import { useState } from "react";
export const ShelfChangerButton = ({ bookShelf }) => {
  const [selectedShelf, setSelected] = useState("");
  return (
    <div className="book-shelf-changer">
      <select
        onChange={(e) => {
          setSelected({ selectedShelf: e.target.value });
          bookShelf(selectedShelf);
        }}
      >
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};
