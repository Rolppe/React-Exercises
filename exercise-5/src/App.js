import Country from "./components/Country";

const countries = [
  {
    name: "Suomi",
    capital: "Helsinki",
  },
  {
    name: "Ruotsi",
    capital: "Tukholma",
  },
  {
    name: "Norja",
    capital: "Oslo",
  },
];

function App() {
  return (
    <div>
      <Country country={countries[0]} />
      <Country country={countries[1]} />
      <Country country={countries[2]} />
    </div>
  );
}

export default App;
