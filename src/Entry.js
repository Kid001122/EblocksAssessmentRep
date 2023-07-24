import "./css/forms.css";
import { useState, useEffect } from "react";

const Entry = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [nameError, setNameError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [books, setBooks] = useState([]); // New state for books data

  useEffect(() => {
    // Fetch books data from the API
    fetch("http://localhost:8000/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data); // Store the fetched data in the state variable
      })
      .catch((error) => {
        console.error("Error fetching books data:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset previous error messages
    setNameError("");
    setNumberError("");

    // Check for errors
    let hasError = false;
    if (!name.trim()) {
      setNameError("Name cannot be empty");
      hasError = true;
    }
    if (number.length !== 10) {
      setNumberError("Number should be 10 characters long");
      hasError = true;
    }

    if (!hasError) {
      const entry = { name, number };
      fetch("http://localhost:8000/phones", "http://localhost:8000/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
      }).then(() => {
        console.log("new blog added ");
      });
    }
  };

  return (
    <div className="entry">
      <h2>Add an Entry</h2>

      <form onSubmit={handleSubmit}>
        <div className="error">{nameError}</div>
        <select>
          {books.map((book) => (
            <option key={book.id} value={book.name}>
              {book.name}
            </option>
          ))}
        </select>
        <label htmlFor="">Name </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="error">{numberError}</div>
        <label htmlFor="">Cellphone </label>
        <input
          type="text"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <button>Add</button>
      </form>
    </div>
  );
};

export default Entry;
