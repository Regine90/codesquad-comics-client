import booksData from "../data/books";

function Home() {
    return(
        <main>
            <div className="index">
    <h1>CODESQUAD COMICS</h1>
    <p>CodeSquad Comics is a collection of graphic novels read by Regine Valmont. The site is intended to display comic book covers along with information about each book, including the author, a rating, and other details about the graphic novel. Browse through the complete collection below. Click on the cover image or the Details link to see even more information for each graphic novel including the publisher, genre, number of pages, and a brief synopsis. The About page includes meta information about this collection. Login is only available to the site administrator at this time.</p>
    </div>
    <div className="index-border">
    <h2>COMPLETE COMIC COLLECTION</h2>    
    <div className="comic">
        <img src="/images/fun-home.jpg" style={{ width: '200px' }} />
        <br />
        <em>Fun Home: A Family Tragicomic</em>
        <br />
        by Alison Bechdel
        <br />
        5 stars
        <br />
        <a href="#">Details</a>
    </div>
    <div className="comic">
        <img src="public/images/watchmen.jpg" style={{ width: '200px' }} />
        <br/>
        <em>Watchmen</em>
        <br/>
        by Alan Moore
        <br/>
        5 stars
        <br />
        <a href="#">Details</a>
    </div>
    <div className="comic">
        <img src="public/images/hunter-x-hunter.jpg" style={{ width: '200px' }}/><br/>
        <em>Hunter X Hunter Vol. 1</em><br/>by Yoshihiro Togashi 5 stars<br/>
        <a href="#">Details</a>
    </div>
    <div className="comic">
        <img src="public/images/lumberjanes.jpg" style={{ width: '200px' }}/>
        <br/>
        <em>Lumberjanes Vol. 1</em>
        <br/>by Noelle Stevenson
        <br/>
        4 stars
        <br/>
        <a href="#">Details</a>
    </div>
    <div className="comic">
        <img src="public/images/one-piece.jpg" style={{ width: '200px' }}/>
        <br/>
        <em>One Piece, Vol. 1: Romance Dawn</em>
        <br/>by Eiichiro Oda
        <br/>
        5 stars
        <br/>
        <a href="#">Details</a>
    </div>
    <div className="comic">
        <img src="public/images/wake.jpg" style={{ width: '200px' }}/>
        <br/>
        <em>Wake: The Hidden History of Women-Led Slave Revolts</em>
        <br/>by Rebecca Hall
        <br/>
        4 stars
        <br/>
        <a href="#">Details</a>
    </div>
    <div className="comic">
        <img src="public/images/black-panther.jpg" style={{ width: '200px' }}/>
        <br/>
        <em>Black Panther: A Nation Under Our Feet Book 1</em>
        <br/>by Ta-Nehisi Coates
        <br/>
        3 stars
        <br/>
        <a href="#">Details</a>
    </div>
    <div className="comic">
        <img src="public/images/the-walking-dead.jpg" style={{ width: '200px' }}/>
        <br/>
        <em>The Walking Dead, Vol. 1: Days Gone Bye</em>
        <br/>by Robert Kirkman
        <br/>
        4 stars
        <br/>
        <a href="#">Details</a>
    </div>
    <div className="comic">
        <img src="public/images/march.jpg" style={{ width: '200px' }}/>
        <br/><em>March: Book One</em>
        <br/>by John Lewis
        <br/>
        5 stars
        <br/>
        <a href="#">Details</a>
    </div>
    <div className="comic">
        <img src="public/images/batman.jpg" style={{ width: '200px' }}/>
        <br/>
        <em>Batman: The Dark Knight Returns</em>
        <br/>by Frank Miller
        <br/>
        3 stars
        <br/>
        <a href="#">Details</a>
    </div>
    <div className="comic">
        <img src="public/images/queer.jpg" style={{ width: '200px' }}/>
        <br/>
        <em>Queer: A Graphic History</em>
        <br/>by Meg-John Barker
        <br/>
        4 stars
        <br/>
        <a href="#">Details</a>
    </div>
    <div className="comic">
        <img src="public/images/parable-of-the-sower.jpg" style={{ width: '200px' }}/>
        <br/>
        <em>Parable of the Sower</em>
        <br/>by Octavia E. Bulter
        <br/>
        4 stars
        <br/>
        <a href="#">Details</a>
    </div>
    <br/>
    <button className="button">Display More</button>
    </div>
        </main>
    );
};

export default Home;