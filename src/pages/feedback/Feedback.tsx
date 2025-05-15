import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RiContactsFill } from "react-icons/ri";
import PageHeaderContent from "../../components/pageHeaderContent/PageHeaderContent";
import Popup from "../../components/popup/Popup";
import { app } from "../../main";
import "./feedback.scss";

type FormData = {
  name: string;
  feedback: string;
};

const Feedback = () => {
  const { register, handleSubmit, setValue } = useForm<FormData>();

  const [showPopup, setShowPopup] = useState(false);

  const reset = () => {
    setValue("name", "");
    setValue("feedback", "");
  };

  const db = getFirestore(app);

  const onSubmit = handleSubmit(async (data) => {
    const userId = localStorage.getItem("userId");
    try {
      if (userId) {
        await setDoc(doc(db, "feedback", userId), {
          name: data.name ?? "guest",
          feedback: data.feedback,
        });
      }
    } catch (error) {
      console.error(error);
    }
    setShowPopup(true);
    reset();
  });

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="give me a feedback"
        icon={<RiContactsFill size={40} />}
      />
      <div className="contact-content">
        <h3 className="contact-content-header-text">Your Feedback</h3>
        <form onSubmit={onSubmit} className="contact-content-form">
          <div className="contact-content-form-controls-wrapper">
            <div className="name-wrapper">
              <input
                required
                {...register("name")}
                className="input-name"
                type="text"
              />
              <label htmlFor="name" className="name-label">
                Name / Email (optional)
              </label>
            </div>
            <div className="description-wrapper">
              <textarea
                {...register("feedback")}
                className="input-description"
                rows={5}
                style={{ resize: "none" }}
              />
              <label htmlFor="feedback" className="description-label">
                Your Feedback
              </label>
            </div>
          </div>
          <input type="submit" />
        </form>
      </div>
      {showPopup && (
        <Popup message="Thank you for your Feedback!" onClose={closePopup} />
      )}
    </section>
  );
};

export default Feedback;
