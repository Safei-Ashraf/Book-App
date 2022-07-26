export const ShelfChangerButton = ({ bookShelf, currentShelf, bookId }) => {
  return (
    <div className="book-shelf-changer">
      <select
        onChange={(e) => {
          bookShelf(e.target.value);
          console.log(bookId);
        }}
        value={currentShelf}
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
