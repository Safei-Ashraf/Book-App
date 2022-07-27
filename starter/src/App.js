import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getAll, search, update } from "./BooksAPI";
import { HomePage } from "./components/HomePage";
import { SearchPage } from "./components/SearchPage";

function App() {
  const [booksData, setBooksData] = useState([]);
  const [searchBooksResult, setSearchBooksResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //basic book data fetching
  useEffect(() => {
    getAll().then((data) => {
      setBooksData(data);
    });
  }, []);

  const updateShelf = async (book, shelf) => {
    await update(book, shelf);
    await getAll().then((data) => {
      setBooksData(data);
    });
  };

  //search:ogic:
  const handleSearch = (term = "react") => {
    console.log("search Term", term);
    setSearchTerm(term);
    loadSearchData(term);
  };

  const loadSearchData = async (searchTerm = "react") => {
    await search(searchTerm).then((data) => {
      setSearchBooksResult(data);
    });
  };
  console.log(
    "load search data props",
    searchTerm,
    handleSearch,
    updateShelf,
    searchBooksResult
  );
  return (
    <div className="app">
      {/* //{console.log("booksData in app", booksData)} */}
      <Routes>
        <Route
          path="*"
          element={<HomePage booksData={booksData} updateShelf={updateShelf} />}
        />
        <Route
          path="/search"
          element={
            <SearchPage
            // to={"/"}
            // searchTerm={searchTerm}
            // handleSearch={handleSearch}
            // updateShelf={updateShelf}
            // books={searchBooksResult}
            />
          }
        />
        {/* <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;
