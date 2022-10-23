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
    history.push(Math.random() > 0.5 ? "./" : "./brazil");
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
