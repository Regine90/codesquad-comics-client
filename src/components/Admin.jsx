import { useEffect, useState } from "react";
// import books from "../data/books";
import { Link } from "react-router-dom";

function Admin() {
  const [collection, setCollection] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const FetchCreate = () => {
      fetch(
        "https://course-project-codesquad-comics-server.onrender.com/api/books",
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((result) => {
          console.log("Fetched result:", result);
          setCollection(result.data.books);
        })
        .catch((error) => console.log(error));
    };
    FetchCreate();
  }, [location.state]);

  const url =
    "https://course-project-codesquad-comics-server.onrender.com/api/books/delete/";

  const handleDelete = (bookId) => {
    fetch(`${url}${bookId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setCollection((prevCollection) =>
          prevCollection.filter((book) => book._id !== bookId)
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <main>
      <div className="admin">
        <div className="center-h1-button">
          <h1>ADMIN PAGE</h1>
          <table>
            <tbody>
              {collection.map((book) => (
                <tr key={book._id}>
                  <td>{book.title}</td>
                  <td>
                    <button>EDIT</button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(book._id)}>
                      DELETE
                    </button>
                  </td>
                  <td className="update-link">
                    <Link to={`/update/${book._id}`}>UPDATE</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="form-button">
            <input type="submit" value="ADD NEW COMIC" className="button" />
          </div>
          <br />
        </div>
      </div>
    </main>
  );
}

export default Admin;
