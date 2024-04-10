import { useState } from 'react';
import style from './Contact.module.css';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, subject, message } = formData;

    const mailtoLink = `mailto:kartiksapkal5799@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`)}`;

    window.location.href = mailtoLink;

  
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };
 

  return (
    <div>
      <div className={style.ContactSection} id='contact'>
        <h1 className={`${style.contactHeading} ${style.gradientText}`}>Contact Me!</h1>
        <p className={`${style.contactText} ${style.gradientText}`}>You can Connect Me Here</p>
        <div className={style.contactCard}>
         <div className={style.contactInfo}>
            <div className={style.infoItems}>kartiksapkal5799@gmail.com</div>
            <div className={style.infoItems}>+917066668709</div>
         </div>
         <div>
           <form onSubmit={handleSubmit} className={style.formstyle}>
              <div>
                <label htmlFor="name" className={`${style.gradientText}`}>Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
