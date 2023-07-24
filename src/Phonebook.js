import { useState } from "react";
import PhoneList from "./phoneList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: phones, isPending, error } = useFetch("http://localhost:8000/phones");
  const [selectedOption, setSelectedOption] = useState(null);
  const [filterText, setFilterText] = useState("");

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);

    // If the user selects "All", set selectedOption to null to show all phone books
    if (selectedValue === "all") {
      setSelectedOption(null);
    }
  };

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  // Filter the phones based on the selected option and filter text
  const filteredPhones = phones?.filter((phone) => {
    if (selectedOption === null) {
      // Show all phone books if selectedOption is null
      return phone.name.toLowerCase().includes(filterText.toLowerCase());
    } else {
      // Show filtered phone books based on both selected option and filter text
      return (
        phone.name === selectedOption &&
        phone.name.toLowerCase().includes(filterText.toLowerCase())
      );
    }
  });

  return (
    <div className="Home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <select onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="all">All phone books</option>
        {phones &&
          phones.map((phone) => (
            <option key={phone.id} value={phone.name}>
              {phone.name}
            </option>
          ))}
      </select>
      <label htmlFor="">Filter here </label>
      <input type="text" onChange={handleFilterChange} value={filterText} />
      {filteredPhones && (
        <PhoneList
          phones={filteredPhones}
          title={
            selectedOption
              ? `Phone books with name: ${selectedOption}`
              : "All phone books"
          }
        />
      )}
    </div>
  );
};

export default Home;
