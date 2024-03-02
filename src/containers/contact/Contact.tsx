import { RiContactsFill } from "react-icons/ri";
import PageHeaderContent from "../../components/pageHeaderContent/PageHeaderContent";
import "./contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<RiContactsFill size={40} />}
      />
      <div className="contact-content">
        <h3 className="contact-content-header-text">Let's Talk</h3>
        <div className="contact-content-form">
          <div className="contact-content-form-controls-wrapper">
            <div className="name-wrapper">
              <input required name="name" className="input-name" type="text" />
              <label htmlFor="name" className="name-label">
                Name
              </label>
            </div>
            <div className="email-wrapper">
              <input name="email" className="input-email" type="text" />
              <label htmlFor="email" className="email-label">
                Email
              </label>
            </div>
            <div className="description-wrapper">
              <textarea
                name="description"
                className="input-description"
                rows={5}
                style={{ resize: "none" }}
              />
              <label htmlFor="description" className="description-label">
                Description
              </label>
            </div>
          </div>
          <button>Submit</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
