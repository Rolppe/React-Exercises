const Country = (props) => {
  return (
    <div>
      <p>
        Maa: {props.country.name}, Pääkaupunki: {props.country.capital}
      </p>
    </div>
  );
};

export default Country;
