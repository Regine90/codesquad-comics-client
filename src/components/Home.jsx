import { useState, useEffect } from "react";
import books from "../data/books";

function Home() {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    // const bookHere = books;
    // // localStorage.setItem("bookHere", JSON.stringify(bookHere));
    // setCollection(bookHere);

    fetch(
      "https://course-project-codesquad-comics-server.onrender.com/api/books"
    )
      .then((response) => response.json())
      .then((result) => {
        setCollection(result.data.books);
      })
      .catch((error) => {
        console.log(error, "Fetch Error!");
      });
  }, []);

  return (
    <main>
      <div className="index">
        <h1>CODESQUAD COMICS</h1>
        {books.map((book) => (
          <ul key={book._id}>
            <img
              src={`./images/${book.imageUrl}`}
              width="300px"
              alt="{book.title}"
            />
            <br />
            <em>{book.title}</em>
            <br />
            by {book.author}
            <br />
            {book.rating} star
            <br />
            <a href="#">Details</a>
          </ul>
        ))}
      </div>  
    </main>
  );
}

export default Home;
