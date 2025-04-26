import { useEffect, useState } from "react";
import books from "../data/books";
import { useParams, useNavigate } from "react-router-dom";


function Update() {
  const { bookId } = useParams();
  const [form, setForm] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const findBook = books.find((book) => book._id === id);
    setForm(findBook);
    const url = "https://course-project-codesquad-comics-server.onrender.com/api/books/${bookId}";

    fetch(url, {
      method: "GET",
    })
    .then((response) => response.json())
    .then((result) => console.log(result.data.books))
    .catch((error) => console.log(error));
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    console.log(handleForm, "Submission is on!");
    console.log(e.target.title.value);
    console.log(e.target.author.value);
    console.log(e.target.publisher.value);
    console.log(e.target.genre.value);
    console.log(e.target.pages.value);
    console.log(e.target.rating.value);
    console.log(e.target.synopsis.value);

     const body = {
       title: e.target.title.value,
       author: e.target.author.value,
       publisher: e.target.publisher.value,
       genre: e.target.genre.value,
       pages: e.target.pages.value,
       rating: e.target.rating.value,
       synopsis: e.target.synopsis.value,
     };

     const url = "https://course-project-codesquad-comics-server.onrender.com/api/books/edit/${bookId}";

     fetch(url, {
       method: "PUT",
       body: JSON.stringify(body),
     })
       .then((response) => response.json())
       .then((result) => console.log(result.data.books))
       .catch((error) => {
         console.log(error);
         navigate("/admin");
       });
  };

  return (
    <main>
      <form onSubmit={handleForm}>
        <div className="update-comic">
          <h1>UPDATE COMIC</h1>

          <div className="form-group">
            <label htmlFor="Title">Title:</label>
            <input
              type="text"
              id="Title"
              name="Title"
              // value="title value stored in the database"
              // onChange=""
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              // value="author value stored in the database"
            />
          </div>

          <div className="form-group">
            <label htmlFor="publisher">Publisher:</label>
            <select id="publisher" name="publisher" required>
              <option value="publisher value stored in the database">
                publisher value stored in the database
              </option>
              <option value="BOOM! Box">BOOM! Box</option>
              <option value="DC Comics">DC Comics</option>
              <option value="Harry N. Abrams">Harry N. Abrams</option>
              <option value="Icon Books">Icon Books</option>
              <option value="Image Comics">Image Comics</option>
              <option value="Marvel">Marvel</option>
              <option value="Simon &amp; Schuster">Simon &amp; Schuster</option>
              <option value="Top Shelf Productions">
                Top Shelf Productions
              </option>
              <option value="VIZ Media LLC">VIZ Media LLC</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="genre">Genre:</label>
            <input
              type="text"
              id="genre"
              name="genre"
              // value="genre data stored in the database"
            />
          </div>
          <div className="form-group">
            <label htmlFor="number of pages">Number of pages:</label>
            <input
              type="text"
              id="number of pages"
              name="Number of pages"
              // value="pages stored in database"
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <input
              type="text"
              id="rating"
              name="rating"
              placeholder="rating stored in database"
            />
          </div>
          <div className="form-group">
            <label htmlFor="synopsis">Synopsis:</label>
            <textarea
              id="synopsis"
              name="synopsis"
              // onChange=""
              rows="2"
              cols="20"
              defaultValue={"synopsis value stored in the database"}
            />
          </div>
          <button>Submit</button>
        </div>
      </form>
    </main>
  );
}

export default Update;
