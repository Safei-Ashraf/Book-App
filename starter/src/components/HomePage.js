import { Header } from "./Header";
import { AddButton } from "./AddButton";
// import { update } from "../BooksAPI";
import { Shelf } from "./Shelf";

export const HomePage = ({ booksData, updateShelf }) => {
  const shelfsInfo = [
    { shelfName: "currentlyReading", shelfTitle: "Currently Reading " },
    { shelfName: "wantToRead", shelfTitle: "Want to Read" },
    { shelfName: "read", shelfTitle: "Read " },
  ];
  // const onUpdate = (shelf, id) => {
  //   update(booksData.filter((book) => book.id === id)[0], shelf).then(() => {
  //     setBooksData(
  //       booksData.map((book) => {
  //         if (book.id === id) {
  //           return {
  //             ...book,
  //             shelf,
  //           };
  //         }
  //         return book;
  //       })
  //     );
  //   });
  // };
  return (
    <div className="list-books">
      <Header headerText={"My Reads App"} />
      <div className="list-books-content">
        <div>
          {shelfsInfo.map((shelf) => {
            return (
              <Shelf
                key={shelf.shelfName}
                shelf={shelf}
                books={booksData}
                updateShelf={updateShelf}
              />
            );
          })}
        </div>
      </div>
      <AddButton to={"/search"} />
    </div>
  );
};
