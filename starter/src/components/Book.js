export const Book = ({ title, authors, imageUrl, updateShelf, book }) => {
  const changeShelf = (e) => {
    updateShelf(book, e.target.value);
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
        <div className="book-shelf-changer">
          <select
            onChange={changeShelf}
            // if the book does not have an assigned shelf, it should be marked as none
            value={book.shelf ? book.shelf : "nothing"}
          >
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="nothing">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">
        {authors && authors.map((author) => <div key={author}>{author}</div>)}
      </div>
    </div>
  );
};
