import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getAll } from "./BooksAPI";
import { HomePage } from "./components/HomePage";
import { SearchInput } from "./components/SearchInput";

function App() {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    getAll().then((data) => {
      setBooksData(data);
    });
  }, []);

  return (
    <div className="app">
      {console.log("booksData in app", booksData)}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage setBooksData={setBooksData} booksData={booksData} />
          }
        />
        <Route
          path="/search"
          element={
            <SearchInput
              to={"/"}
              setBooksData={setBooksData}
              booksData={booksData}
            />
          }
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
