import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Modal from "../components/Modal";
import Backdrop from "../components/Backdrop";

const BrazilPage = () => {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const showModalHandler = () => {
    setShowModal(true);
  };

  const cancelModalHandler = () => {
    setShowModal(false);
  };

  const randomHandler = () => {
    history.push(Math.random() > 0.5 ? "./" : "./italy");
  };

  const backToFinlandHandler = () => {
    history.push("/");
  };
  return (
    <div>
      <h2>Welcome to beautiful (and tasty!) Brazil!</h2>
      <button onClick={backToFinlandHandler}>Back to finland</button>
      <button onClick={showModalHandler}>Go to random destination</button>
      {showModal && (
        <Modal onCancel={cancelModalHandler} onConfirm={randomHandler} />
      )}
      {showModal ? <Backdrop onClick={cancelModalHandler} /> : null}
    </div>
  );
};

export default BrazilPage;
