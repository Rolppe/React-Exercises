import { useEffect, useState } from "react";
import AddFamousPerson from "./components/AddFamousPerson";
import "./App.css";

function App() {
  const [famousPersons, setFamousPersons] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addFamousPersonHandler = async (famousPerson) => {
    console.log(famousPerson);
    const response = await fetch(
      "https://famous-people-4d42b-default-rtdb.europe-west1.firebasedatabase.app/famousPersons.json",
      {
        method: "POST",
        body: JSON.stringify(famousPerson),
        headers: { ContentType: "application/json" },
      }
    );
    const data = await response.json();
    console.log(data);
    fetchFamousPersons();
    toggleShowForm();
  };

  const fetchFamousPersons = async () => {
    const response = await fetch(
      "https://famous-people-4d42b-default-rtdb.europe-west1.firebasedatabase.app/famousPersons.json"
    );

    const data = await response.json();
    const fetchedFamousPersons = [];

    for (const key in data) {
      fetchedFamousPersons.push({
        id: key,
        firstName: data[key].firstName,
        lastName: data[key].lastName,
        dateOfBirth: data[key].dateOfBirth,
      });
    }
    setFamousPersons(fetchedFamousPersons);
  };

  useEffect(() => {
    fetchFamousPersons();
  }, []);

  const toggleShowForm = () => {
    setShowForm((current) => !current);
  };

  let content = famousPersons.map((data) => (
    <div key={data.id}>
      <h2>
        {data.firstName} {data.lastName}
      </h2>
      <h3>{data.dateOfBirth}</h3>
    </div>
  ));

  return (
    <div className="App">
      <button onClick={toggleShowForm}>
        {showForm ? "cancel" : "add new person"}
      </button>
      {showForm && (
        <AddFamousPerson onAddFamousPerson={addFamousPersonHandler} />
      )}
      <div>{content}</div>
    </div>
  );
}

export default App;
