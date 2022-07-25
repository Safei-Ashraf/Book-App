import "./App.css";
import { useState } from "react";
import { AddButton } from "./components/AddButton";
import { SearchInput } from "./components/SearchInput";
import { Header } from "./components/Header";
import { ShelfChangerButton } from "./components/ShelfChangerButton";
import { Book } from "./components/Book";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const handleClick = () => {
    console.log("Add button clicked from app file");
    setShowSearchpage(!showSearchPage);
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchInput navigate={() => setShowSearchpage(!showSearchPage)} />
      ) : (
        <div className="list-books">
          <Header headerText={"My Reads App"} />
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <li>
                      <Book
                        title={"dodo"}
                        author={"jojo"}
                        imageUrl={
                          "https://c-fa.cdn.smule.com/rs-s78/arr/85/f6/29fd3c68-affe-457e-9f76-87cca7a49b8c.jpg"
                        }
                      />
                    </li>
                    <li>
                      <Book
                        title={"To Kill a Mockingbird"}
                        author={"Harper Lee"}
                        imageUrl={
                          "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
                        }
                      />
                    </li>
                    <li>
                      <Book
                        author={"Orson Scott Card"}
                        title={"Ender's Game"}
                        imageUrl={
                          "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
                        }
                      />
                    </li>
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <li>
                      <Book
                        author={"David McCullough"}
                        title={"1776"}
                        imageUrl={
                          "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
                        }
                      />
                    </li>
                    <li>
                      <Book
                        author={"J.K. Rowling"}
                        title={" Harry Potter and the Sorcerer's Stone"}
                        imageUrl={
                          "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api"
                        }
                      />
                    </li>
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <li>
                      <Book
                        title={"The Hobbit"}
                        author={"J.R.R. Tolkien"}
                        imageUrl={
                          "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api"
                        }
                      />
                    </li>
                    <li>
                      <Book
                        author={"Seuss"}
                        title={"Oh, the Places You'll Go!"}
                        imageUrl={
                          "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api"
                        }
                      />
                    </li>
                    <li>
                      <Book
                        title={"The Adventures of Tom Sawyer"}
                        author={"Mark Twain"}
                        imageUrl={
                          "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api"
                        }
                      />
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div> */}
          <AddButton navigate={() => handleClick()} />
        </div>
      )}
    </div>
  );
}

export default App;
