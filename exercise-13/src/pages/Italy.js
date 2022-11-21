import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Modal from "../components/Modal";
import Backdrop from "../components/Backdrop";

const ItalyPage = () => {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const showModalHandler = () => {
    setShowModal(true);
  };

  const cancelModalHandler = () => {
    setShowModal(false);
  };

  const randomHandler = () => {
    let randomNumber = Math.random();
    if (randomNumber < 0.2) {
      history.push("/");
    } else if (randomNumber < 0.4) {
      history.push("/brazil");
    } else if (randomNumber < 0.6) {
      history.push("/croatia");
    } else if (randomNumber < 0.8) {
      history.push("/india");
    } else {
      history.push("/ukraine");
    }
    //history.replace
  };

  const backToFinlandHandler = () => {
    history.push("/");
  };

  return (
    <div>
      <h2>Welcome to tasty (and beautiful!) Italy!</h2>
      <button onClick={backToFinlandHandler}>Back to finland</button>
      <button onClick={showModalHandler}>Go to random destination</button>
      {showModal && (
        <Modal onCancel={cancelModalHandler} onConfirm={randomHandler} />
      )}
      {showModal ? <Backdrop onClick={cancelModalHandler} /> : null}
    </div>
  );
};

export default ItalyPage;
