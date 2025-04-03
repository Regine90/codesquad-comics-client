import React from "react";

function Create() {
    return(
        <main>
            <form>
        <div className="create">
            <h1>CREATE NEW COMIC</h1>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" placeholder="Title"/>
            </div>
    
            <div className="form-group">
                <label htmlFor="author">Author:</label>
                <input type="text" id="author" name="author" placeholder="Author"/>
            </div>
    
            <div className="form-group">
                <label htmlFor="publisher">Publisher:</label>
                <select id="publisher" name="publisher" required>
                    <option value="">Select</option>
                    <option value="BOOM! Box">BOOM! Box</option>
                    <option value="DC Comics">DC Comics</option>
                    <option value="Harry N. Abrams">Harry N. Abrams</option>
                    <option value="Icon Books">Icon Books</option>
                    <option value="Image Comics">Image Comics</option>
                    <option value="Marvel">Marvel</option>
                    <option value="Simon &amp; Schuster">Simon & Schuster</option>
                    <option value="Top Shelf Productions">Top Shelf Productions</option>
                    <option value="VIZ Media LLC">VIZ Media LLC</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="genre">Genre:</label>
                <input type="text" id="genre" name="genre" placeholder="Genre"/>
            </div>
            <div className="form-group">
                <label htmlFor="pages">Number of Pages:</label>
                <input type="number" id="pages" name="pages" placeholder="Number of pages" min="1"/>
            </div>
            <div className="form-group">
                <label htmlFor="rating">Rating:</label>
                <input type="number" id="rating" name="rating" min="0" max="5" step="0.1" placeholder="Number (0-5)"/>
            </div>
            <div className="form-group">
                <label htmlFor="synopsis">Synopsis:</label>
                <textarea id="synopsis" name="synopsis" placeholder="Synopsis"></textarea>
            </div>
            <button>Submit</button>
        </div>
    </form>
        </main>
    );
};

export default Create;