import { useEffect, useState } from "react";
import books from "../data/books";

function Admin() {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const bookHere = books;
    // localStorage.setItem("bookHere", JSON.stringify(bookHere));
    setCollection(bookHere);
  }, []);

  console.log(collection);

  return (
    <main>
      <div className="admin">
        <div className="center-h1-button">
          <h1>ADMIN PAGE</h1>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>
                <button>EDIT</button>
              </td>
              <td>
                <button>DELETE</button>
              </td>
            </tr>
          ))}
          <input type="submit" value="ADD NEW COMIC" className="button" />
          <br />
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
