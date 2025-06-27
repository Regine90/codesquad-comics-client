import { useEffect, useState } from "react";
import books from "../data/books";
import { Link } from "react-router-dom";

function Admin() {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const bookHere = books;
    setCollection(bookHere);

    const FetchCreate = () => {
      fetch(
        "https://course-project-codesquad-comics-server.onrender.com/api/books",
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((result) => {
          setCollection(result);
        })
        .catch((error) => console.log(error));
    };
    FetchCreate();
  }, []);

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
              {books.map((book) => (
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
                    <Link to="/update">UPDATE</Link>
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

        {/* <table>
  <thead>
    <tr>
      <th>COMIC TITLE</th>
      <th>EDIT</th>
      <th>DELETE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Batman: The Dark Knight Returns</td>
      <td><button>EDIT</button></td>
      <td><button>DELETE</button></td>
    </tr>
    <tr>
      <td>Black Panther: A Nation Under Our Feet Book 1</td>
      <td><button>EDIT</button></td>
      <td><button>DELETE</button></td>
    </tr>
    <tr>
      <td>Fun Home: A Family Tragicomic</td>
      <td><button>EDIT</button></td>
      <td><button>DELETE</button></td>
    </tr>
    <tr>
      <td>Hunter X Hunter Vol. 1</td>
      <td><button>EDIT</button></td>
      <td><button>DELETE</button></td>
    </tr>
    <tr>
      <td>Lumberjanes Vol.1</td>
      <td><button>EDIT</button></td>
      <td><button>DELETE</button></td>
    </tr>
    <tr>
      <td>March: Book One</td>
      <td><button>EDIT</button></td>
      <td><button>DELETE</button></td>
    </tr>
    <tr>
      <td>One Piece, Vol. 1: Romance Dawn</td>
      <td><button>EDIT</button></td>
      <td><button>DELETE</button></td>
    </tr>
    <tr>
      <td>Parable of the Sower</td>
      <td><button>EDIT</button></td>
      <td><button>DELETE</button></td>
    </tr>
    <tr>
      <td>Queer: A Graphic History</td>
      <td><button>EDIT</button></td>
      <td><button>DELETE</button></td>
    </tr>
    <tr>
      <td>The Walking Dead, Vol. 1: Days Gone Bye</td>
      <td><button>EDIT</button></td>
      <td><button>DELETE</button></td>
    </tr>
    <tr>
      <td>Wake: The Hidden History of Women-Led Slave Revolts</td>
      <td><button>EDIT</button></td>
      <td><button>DELETE</button></td>
    </tr>
    <tr>
      <td>Watchmen</td>
      <td><button>EDIT</button></td>
      <td><button>DELETE</button></td>
    </tr>
  </tbody>
</table> */}
      </div>
    </main>
  );
}

export default Admin;
