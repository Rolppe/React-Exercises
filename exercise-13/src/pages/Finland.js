import Modal from "../components/Modal";
import Backdrop from "../components/Backdrop";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const FinlandPage = () => {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const showModalHandler = () => {
    setShowModal(true);
  };

  const cancelModalHandler = () => {
    setShowModal(false);
  };

  const randomHandler = () => {
    if (Math.random() > 0.5) {
      history.push("/italy");
    } else {
      history.push("/brazil");
    }
    //history.replace
  };

  return (
    <div>
      <h2>You are at Helsinki airport. Where do you want to travel?</h2>
      <button onClick={showModalHandler}>Go to random destination</button>
      {showModal && (
        <Modal onCancel={cancelModalHandler} onConfirm={randomHandler} />
      )}
      {showModal ? <Backdrop onClick={cancelModalHandler} /> : null}
    </div>
  );
};

export default FinlandPage;
