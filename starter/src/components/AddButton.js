import { Link } from "react-router-dom";

export const AddButton = ({ navigate, to }) => {
  return (
    <div className="open-search">
      <Link to={to} onClick={navigate}>
        Add a book
      </Link>
    </div>
  );
};
