import { RiContactsFill } from "react-icons/ri";
import PageHeaderContent from "../../components/pageHeaderContent/PageHeaderContent";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import "./contact.scss";
import { verifyCaptcha } from "./utils";
import { useState } from "react";
import Popup from "../../components/popup/Popup";

type FormData = {
  name: string,
  email: string,
  description: string,
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm<FormData>()

  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const reset = () => {
    setValue("name", "");
    setValue("email", "");
    setValue("description", "");
  };

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    setShowPopup(true); // Show the popup after submission
    reset(); // Reset the form fields
    console.log(showPopup);
  });

  const handleCaptchaChange = (value: string | null) => {
    verifyCaptcha(value).then((res) => {
      if (res) {
        console.log(res);
      }
    });
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<RiContactsFill size={40} />}
      />
      <div className="contact-content">
        <h3 className="contact-content-header-text">Let's Talk</h3>
        <form onSubmit={onSubmit} className="contact-content-form">
          <div className="contact-content-form-controls-wrapper">
            <div className="name-wrapper">
              <input required {...register("name")} className="input-name" type="text"/>
              <label htmlFor="name" className="name-label">
                Name
              </label>
            </div>
            <div className="email-wrapper">
              <input {...register("email")} className="input-email" type="text" />
              <label htmlFor="email" className="email-label">
                Email
              </label>
            </div>
            <div className="description-wrapper">
              <textarea
                {...register("description")}
                className="input-description"
                rows={5}
                style={{ resize: "none" }}
              />
              <label htmlFor="description" className="description-label">
                Description
              </label>
            </div>
          {/* reCAPTCHA */}
          <ReCAPTCHA
            sitekey="6Ldk2fsqAAAAAP5tzoSgItVkV4jx6TcZ6Yf-xPnA" // Replace with your reCAPTCHA site key
            onChange={handleCaptchaChange}
          />
          </div>
          <input type="submit"/>
        </form>
      </div>
      {showPopup && (
        <Popup
          message="Thank you for your submission!"
          onClose={closePopup}
        />
      )}
    </section>
  );
};

export default Contact;
