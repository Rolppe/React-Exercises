import { useRef } from "react";

const AddData = (props) => {
  const firstFieldRef = useRef("");
  const secondFieldRef = useRef("");
  const dateFieldRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("sisällä");

    const dataUnit = {
      firstField: firstFieldRef.current.value,
      secondField: secondFieldRef.current.value,
      dateField: dateFieldRef.current.value,
    };

    console.log(dataUnit);
    props.addDataUnitHandeler(dataUnit);

    firstFieldRef.current.value = "";
    secondFieldRef.current.value = "";
    dateFieldRef.current.value = "";

    props.navigateHomeHandler();
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <p>First Field</p>
        <label htmlFor="text"></label>
        <textarea rows="3" id="firstFeld" ref={firstFieldRef} />
      </div>
      <div>
        <p>Second Field</p>

        <label htmlFor="text"></label>
        <textarea rows="3" id="firstFeld" ref={secondFieldRef} />
      </div>
      <div>
        <p>Date Field</p>

        <label htmlFor="date"></label>
        <input type="date" id="dateFeld" ref={dateFieldRef} />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
};

export default AddData;
