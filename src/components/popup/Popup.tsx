import React from "react";
import ReactDOM from "react-dom";
import "./popup.scss";

type PopupProps = {
  message: string;
  onClose: () => void;
};

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
  return ReactDOM.createPortal(
    <div className="popup-overlay">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("popup-root")!
  );
};

export default Popup;
