import React from 'react'
import  './Modal.css'

function Modal({showModal,setShowModal,handlePlayAgain, xScore, oScore}) {
  if (showModal === true) {
    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <span className="close" onClick={() => setShowModal(false)}>
            Close
          </span>
          <div className="modalContent">
            <p>Winner - {xScore > oScore ? "X wins" : "O wins"} </p>
            <button
              onClick={() => {
                handlePlayAgain();
                setShowModal(false);
              }}
            >
              Restart
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Modal