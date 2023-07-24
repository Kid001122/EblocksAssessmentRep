import { useState } from "react";

const Create = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset previous error message
    setNameError("");

    // Check for errors
    if (!name.trim()) {
      setNameError("Phone book name cannot be empty");
      return;
    }

    const phonebook = { name };
    fetch("http://localhost:8000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(phonebook),
    }).then(() => {
      console.log("new phone book added");
    });
  };

  return (
    <div className="create">
      <h2>add a new phone book</h2>
      <form onSubmit={handleSubmit}>
        {nameError && <div className="error">{nameError}</div>}
        <label htmlFor="">Phone book Name </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Create;