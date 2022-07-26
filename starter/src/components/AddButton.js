import { Link } from "react-router-dom";

export const AddButton = ({ to }) => {
  return (
    <div className="open-search">
      <Link to={to}>Add a book</Link>
    </div>
  );
};
