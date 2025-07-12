import { useEffect, useState } from "react";
import books from "../data/books";
import { useParams, useNavigate } from "react-router-dom";


function Update() {
  const { id: bookId } = useParams();
  const [form, setForm] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://course-project-codesquad-comics-server.onrender.com/api/books/update/${bookId}`;

    fetch(url, {
      method: "GET",
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result.data.book);
      setForm(result.data.book);
    })
    .catch((error) => console.log(error));
  }, [bookId]);

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

     const url = `https://course-project-codesquad-comics-server.onrender.com/api/books/update/${bookId}`;

     fetch(url, {
       method: "PUT",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(body),
     })
       .then((response) => response.json())
       .then((result) => { 
        console.log(result.data.books)
        navigate("/admin");
       })
       .catch((error) => {
         console.log(error);
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
              id="title"
              name="title"
              value={form.title || ""}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              // value="author value stored in the database"
              value={form.author || ""}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="publisher">Publisher:</label>
            <select
              id="publisher"
              name="publisher"
              value={form.publisher || ""}
              onChange={(e) => setForm({ ...form, publisher: e.target.value })}
              required
            >
              <option value={form.publisher || ""}>
                {form.publisher || "Select a publisher"}
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
              value={form.genre || ""}
              onChange={(e) => setForm({ ...form, genre: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="number of pages">Number of pages:</label>
            <input
              type="text"
              id="pages"
              name="pages"
              value={form.pages || ""}
              onChange={(e) => setForm({ ...form, pages: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <input
              type="text"
              id="rating"
              name="rating"
              placeholder="rating stored in database"
              value={form.rating || ""}
              onChange={(e) => setForm({ ...form, rating: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="synopsis">Synopsis:</label>
            <textarea
              id="synopsis"
              name="synopsis"
              rows="2"
              cols="20"
              defaultValue={"synopsis value stored in the database"}
              value={form.synopsis || ""}
              onChange={(e) => setForm({ ...form, synopsis: e.target.value })}
            />
          </div>
          <div className="form-button">
            <button>Submit</button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Update;
