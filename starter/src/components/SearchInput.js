import { Link } from "react-router-dom";

export const SearchInput = ({ navigate, to }) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to={to} className="close-search" onClick={navigate}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  );
};
