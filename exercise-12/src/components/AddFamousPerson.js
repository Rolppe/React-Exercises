import { useRef } from "react";

const AddFamousPerson = (props) => {
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const dateOfBirthRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const famousPerson = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      dateOfBirth: dateOfBirthRef.current.value,
    };

    props.onAddFamousPerson(famousPerson);

    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    dateOfBirthRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="text">First name</label>
        <textarea rows="1" id="firstName" ref={firstNameRef} />
      </div>
      <div>
        <label htmlFor="text">Last name</label>
        <textarea rows="1" id="LastName" ref={lastNameRef} />
      </div>
      <div>
        <label htmlFor="date">Date of birth</label>
        <input type="date" id="date" ref={dateOfBirthRef} />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
};

export default AddFamousPerson;
