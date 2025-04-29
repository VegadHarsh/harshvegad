// import React, { useState, useRef } from 'react';
// import Loader from './js/Loader';
// import "../CSS/contact.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import ReCAPTCHA from 'react-google-recaptcha';
// import Breadcrumb from './methods/Breadcrumb';

// function Contact() {
//     const recaptchaRef = useRef(null);
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         website: '',
//         message: ''
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const validateForm = () => {
//         if (!formData.name || !formData.email || !formData.message) {
//             alert("All fields are required!");
//             return false;
//         }
//         return true;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (validateForm()) {
//             try {
//                 const token = await recaptchaRef.current.executeAsync();
//                 recaptchaRef.current.reset();

//                 // Send form data with reCAPTCHA token
//                 const response = await fetch('http://localhost:5000/', {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({ ...formData, recaptchaToken: token })
//                 });

//                 if (!response.ok) throw new Error(`Failed to send message! Status: ${response.status}`);

//                 alert("Message sent successfully!");
//                 setFormData({ name: '', email: '', website: '', message: '' });
//             } catch (error) {
//                 console.error("Error submitting form:", error);
//                 alert("Something went wrong. Please try again.");
//             }
//         }
//     };

//     // Handle reCAPTCHA response and send data to backend
//     // const onReCAPTCHAChange = async (token) => {
//     //     if (token) {
//     //         console.log("Recaptcha Token:", token);

//     //         const dataToSend = {
//     //             ...formData,
//     //             recaptchaToken: token
//     //         };

//     //         try {
//     //             const response = await fetch('http://localhost:5000/', {
//     //                 method: 'POST',
//     //                 headers: { 'Content-Type': 'application/json' },
//     //                 body: JSON.stringify({ name, email, website, message, recaptchaToken })
//     //             });                        

//     //             if (!response.ok) throw new Error(`Failed to send message! Status: ${response.status}`);

//     //             alert("Message sent successfully!");
//     //             setFormData({ name: '', email: '', website: '', message: '' }); // Reset form
//     //         } catch (error) {
//     //             console.error("Error submitting form:", error);
//     //             alert("Something went wrong. Please try again.");
//     //         }
//     //     }
//     // };

//     return (
//         <div className='main_contact_me'>
//             <Loader />
//             <Breadcrumb title="Contact Us" path={["Contact"]} />

//             {/* Contact Information Section */}
//             <section className="contact-widget spad">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-4 col-md-6 d-flex justify-center">
//                             <div className="contact__widget__item">
//                                 <div className='contact__widget__item__icon'>
//                                     <FontAwesomeIcon className='i_con' icon={faMapMarkerAlt} />
//                                 </div>
//                                 <div className="contact__widget__item__text">
//                                     <h4>Address</h4>
//                                     <p>Ahmedabad, Gujarat, India</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 d-flex justify-center">
//                             <div className="contact__widget__item">
//                                 <div className='contact__widget__item__icon'>
//                                     <FontAwesomeIcon className='i_con' icon={faPhone} />
//                                 </div>
//                                 <div className="contact__widget__item__text">
//                                     <h4>Business Number</h4>
//                                     <p>+91 7984285538</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 d-flex justify-center">
//                             <div className="contact__widget__item">
//                                 <div className='contact__widget__item__icon'>
//                                     <FontAwesomeIcon className='i_con' icon={faEnvelope} />
//                                 </div>
//                                 <div className="contact__widget__item__text">
//                                     <h4>Email</h4>
//                                     <p>harshvegad135@gmail.com</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Contact Form Section */}
//             <section className="contact spad">
//                 <div className="container">
//                     <div className="row d-flex justify-center">
//                         <div className="col-lg-6 col-md-6">
//                             <div className="contact__form">
//                                 <h3>Get in touch</h3>
//                                 <form onSubmit={handleSubmit}>
//                                     <input
//                                         type="text"
//                                         name="name"
//                                         placeholder="Name"
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         placeholder="Email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                     <input
//                                         type="text"
//                                         name="website"
//                                         placeholder="Website"
//                                         value={formData.website}
//                                         onChange={handleChange}
//                                     />
//                                     <textarea
//                                         name="message"
//                                         placeholder="Message"
//                                         value={formData.message}
//                                         onChange={handleChange}
//                                         required
//                                     ></textarea>
//                                     <button type="submit" className="site-btn">Send Message</button>

//                                     {/* Invisible reCAPTCHA */}
//                                     {/* <ReCAPTCHA
//                                         ref={recaptchaRef}
//                                         sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
//                                         size="invisible"
//                                         className='reCaptcha_invisible'
//                                     /> */}
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Contact;


// import React, { useState } from 'react';
// import Loader from './js/Loader';
// import "../CSS/contact.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// // import ReCAPTCHA from 'react-google-recaptcha';
// import Breadcrumb from './methods/Breadcrumb';

// function Contact() {
//     // const recaptchaRef = useRef(null);
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         website: '',
//         message: ''
//     });

//     // Handle input changes
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     // // Form validation
//     // const validateForm = () => {
//     //     if (!formData.name || !formData.email || !formData.message) {
//     //         alert("All fields are required!");
//     //         return false;
//     //     }
//     //     return true;
//     // };

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     try {
//     //         const response = await fetch("http://localhost:5000/send-email", {
//     //             method: "POST",
//     //             headers: {
//     //                 "Content-Type": "application/json",
//     //             },
//     //             body: JSON.stringify({ name, email, message }),
//     //         });

//     //         if (!response.ok) {
//     //             throw new Error("Server error: " + response.status);
//     //         }

//     //         const data = await response.json();
//     //         console.log("Success:", data);
//     //     } catch (error) {
//     //         console.error("Error submitting form:", error);
//     //     }
//     // };

//     const [userName, setUserName] = useState("");
//     const [email, setEmail] = useState("");
//     const [website, setwebsite] = useState("");
//     const [message, setMessage] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch("http://localhost/xampp/backend/api.php", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ userName, email, website, message }),
//             });

//             if (!response.ok) {
//                 throw new Error("Server error: " + response.status);
//             }

//             const data = await response.json();
//             console.log("Success:", data);
//         } catch (error) {
//             console.error("Error submitting form:", error);
//         }
//     };

//     return (
//         <div className='main_contact_me'>
//             <Loader />
//             <Breadcrumb title="Contact Us" path={["Contact"]} />
//             {/* Contact Information */}
//             <section className="contact-widget spad">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-4 col-md-6 d-flex justify-center">
//                             <div className="contact__widget__item">
//                                 <FontAwesomeIcon className='i_con' icon={faMapMarkerAlt} />
//                                 <div className="contact__widget__item__text">
//                                     <h4>Address</h4>
//                                     <p>Ahmedabad, Gujarat, India</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 d-flex justify-center">
//                             <div className="contact__widget__item">
//                                 <FontAwesomeIcon className='i_con' icon={faPhone} />
//                                 <div className="contact__widget__item__text">
//                                     <h4>Business Number</h4>
//                                     <p>+91 7984285538</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 d-flex justify-center">
//                             <div className="contact__widget__item">
//                                 <FontAwesomeIcon className='i_con' icon={faEnvelope} />
//                                 <div className="contact__widget__item__text">
//                                     <h4>Email</h4>
//                                     <p>harshvegad135@gmail.com</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Contact Form */}
//             <section className="contact spad">
//                 <div className="container">
//                     <div className="row d-flex justify-center">
//                         <div className="col-lg-6 col-md-6">
//                             <div className="contact__form">
//                                 <h3>Get in touch</h3>
//                                 <form onSubmit={handleSubmit}>
//                                     <input
//                                         // type="text"
//                                         // name="name"
//                                         // placeholder="Name"
//                                         // value={formData.name}
//                                         // onChange={handleChange}
//                                         // required
//                                         type="text"
//                                         placeholder="Name"
//                                         value={userName}
//                                         onChange={(e) => setUserName(e.target.value)}
//                                     />
//                                     <input
//                                         // type="email"
//                                         // name="email"
//                                         // placeholder="Email"
//                                         // value={formData.email}
//                                         // onChange={handleChange}
//                                         // required
//                                         type="email"
//                                         placeholder="Email"
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                         />
//                                     <input
//                                         type="text"
//                                         name="website"
//                                         placeholder="Website"
//                                         // value={formData.website}
//                                         // onChange={handleChange}
//                                         value={website}
//                                         onChange={(e) => setwebsite(e.target.value)}
//                                     />
//                                     <textarea
//                                         name="message"
//                                         placeholder="Message"
//                                         // value={formData.message}
//                                         onChange={(e) => setMessage(e.target.value)}
//                                         required
//                                     ></textarea>
//                                     <button type="submit" className="site-btn">Send Message</button>

//                                     {/* ReCAPTCHA - Invisible
//                                     <ReCAPTCHA
//                                         ref={recaptchaRef}
//                                         sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
//                                         size="invisible"
//                                         onChange={(token) => console.log("Captcha token:", token)}
//                                     /> */}
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Contact;







// import React, { useState } from 'react';
// import Loader from './js/Loader';
// import "../CSS/contact.css";
// import ReCAPTCHA from "react-google-recaptcha";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import Breadcrumb from './methods/Breadcrumb';
// import { message as antdMessage, Spin } from 'antd';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';

// function Contact() {
//     const [userName, setUserName] = useState("");
//     const [email, setEmail] = useState("");
//     const [website, setwebsite] = useState("");
//     const [message, setMessage] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [recaptchaToken, setRecaptchaToken] = useState(null);


//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // 🚫 Validate Fields
//         if (!userName || !email || !website || !message) {
//             antdMessage.error("Please fill in all required fields.");
//             return;
//         }

//         if (!recaptchaToken) {
//             antdMessage.error("Please complete the reCAPTCHA.");
//             return;
//         }

//         setLoading(true);

//         setTimeout(async () => {

//             try {
//                 const response = await fetch("http://localhost/xampp/backend/api.php", {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                         userName,
//                         email,
//                         website,
//                         message,
//                         recaptchaToken,
//                     }),
//                 });


//                 if (!response.ok) {
//                     throw new Error("Server error: " + response.status);
//                 }

//                 const data = await response.json();
//                 console.log("Success:", data);

//                 antdMessage.success("Message sent successfully! ✅");
//                 // 🔄 Reset fields
//                 setUserName("");
//                 setEmail("");
//                 setwebsite("");
//                 setMessage("");
//             } catch (error) {
//                 console.error("Error submitting form:", error);
//                 antdMessage.error("Failed to send message. ❌");
//             } finally {
//                 setLoading(false);
//             }
//         }, [4000]);

//     };

//     return (
//         <div className='main_contact_me'>
//             <Loader />
//             <Breadcrumb title="Contact Us" path={["Contact"]} />

//             {/* Contact Info */}
//             <section className="contact-widget spad">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-4 col-md-6 d-flex justify-center">
//                             <div className="contact__widget__item">
//                                 <div className='contact__widget__item__icon'>
//                                     <FontAwesomeIcon className='i_con' icon={faMapMarkerAlt} />
//                                 </div>
//                                 <div className="contact__widget__item__text">
//                                     <h4>Address</h4>
//                                     <p>Ahmedabad, Gujarat, India</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 d-flex justify-center">
//                             <div className="contact__widget__item">
//                                 <div className='contact__widget__item__icon'>
//                                     <FontAwesomeIcon className='i_con' icon={faPhone} />
//                                 </div>
//                                 <div className="contact__widget__item__text">
//                                     <h4>Business Number</h4>
//                                     <p>+91 7984285538</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 d-flex justify-center">
//                             <div className="contact__widget__item">
//                                 <div className='contact__widget__item__icon'>
//                                     <FontAwesomeIcon className='i_con' icon={faEnvelope} />
//                                 </div>
//                                 <div className="contact__widget__item__text">
//                                     <h4>Email</h4>
//                                     <p>harshvegad135@gmail.com</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Contact Form */}
//             <section className="contact spad">
//                 <div className="container">
//                     <div className="row d-flex justify-center">
//                         <div className="col-lg-6 col-md-6">
//                             <div className="contact__form">
//                                 <h3>Get in touch</h3>
//                                 <form onSubmit={handleSubmit}>
//                                     <input
//                                         type="text"
//                                         placeholder="Name"
//                                         value={userName}
//                                         onChange={(e) => setUserName(e.target.value)}
//                                     />
//                                     <input
//                                         type="email"
//                                         placeholder="Email"
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                     />
//                                     <input
//                                         type="text"
//                                         placeholder="Website"
//                                         value={website}
//                                         onChange={(e) => setwebsite(e.target.value)}
//                                     />
//                                     <textarea
//                                         placeholder="Message"
//                                         value={message}
//                                         onChange={(e) => setMessage(e.target.value)}
//                                     ></textarea>
//                                     <ReCAPTCHA
//                                         sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
//                                         onChange={(token) => setRecaptchaToken(token)}
//                                         onExpired={() => setRecaptchaToken(null)}
//                                     />

//                                     <button
//                                         type="submit"
//                                         className={`site-btn ${loading ? 'loading-btn' : ''}`}
//                                         disabled={loading}
//                                     >
//                                         {loading ? (
//                                             <>
//                                                 <FontAwesomeIcon icon={faSpinner} spin style={{ marginRight: 8 }} />
//                                                 Processing
//                                             </>
//                                         ) : (
//                                             "Send Message"
//                                         )}
//                                     </button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Contact;


// import React, { useState } from 'react';
// import Loader from './js/Loader';
// import "../CSS/contact.css";
// import ReCAPTCHA from "react-google-recaptcha";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faPhone, faEnvelope, faSpinner } from '@fortawesome/free-solid-svg-icons';
// import Breadcrumb from './methods/Breadcrumb';
// import { message as antdMessage } from 'antd';

// function Contact() {
//     const [userName, setUserName] = useState("");
//     const [email, setEmail] = useState("");
//     const [website, setWebsite] = useState("");
//     const [message, setMessage] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [recaptchaToken, setRecaptchaToken] = useState(null);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!userName || !email || !website || !message) {
//             antdMessage.error("Please fill in all required fields.");
//             return;
//         }

//         if (!recaptchaToken) {
//             antdMessage.error("Please complete the reCAPTCHA.");
//             return;
//         }

//         setLoading(true);

//         try {
//             const response = await fetch("http://localhost/xampp/backend/api.php", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     userName,
//                     email,
//                     website,
//                     message,
//                     recaptchaToken,
//                 }),
//             });

//             const data = await response.json();

//             if (data.status === "success") {
//                 antdMessage.success("Message sent successfully! ✅");
//                 setUserName("");
//                 setEmail("");
//                 setWebsite("");
//                 setMessage("");
//                 setRecaptchaToken(null);
//             } else {
//                 antdMessage.error(data.message || "Failed to send message ❌");
//             }
//         } catch (error) {
//             antdMessage.error("Failed to send message ❌");
//             console.error(error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className='main_contact_me'>
//             <Loader />
//             <Breadcrumb title="Contact Us" path={["Contact"]} />

//             <section className="contact-widget spad">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-4 col-md-6 d-flex justify-center">
//                             <div className="contact__widget__item">
//                                 <div className='contact__widget__item__icon'>
//                                     <FontAwesomeIcon className='i_con' icon={faMapMarkerAlt} />
//                                 </div>
//                                 <div className="contact__widget__item__text">
//                                     <h4>Address</h4>
//                                     <p>Ahmedabad, Gujarat, India</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 d-flex justify-center">
//                             <div className="contact__widget__item">
//                                 <div className='contact__widget__item__icon'>
//                                     <FontAwesomeIcon className='i_con' icon={faPhone} />
//                                 </div>
//                                 <div className="contact__widget__item__text">
//                                     <h4>Business Number</h4>
//                                     <p>+91 7984285538</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 d-flex justify-center">
//                             <div className="contact__widget__item">
//                                 <div className='contact__widget__item__icon'>
//                                     <FontAwesomeIcon className='i_con' icon={faEnvelope} />
//                                 </div>
//                                 <div className="contact__widget__item__text">
//                                     <h4>Email</h4>
//                                     <p>harshvegad135@gmail.com</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Contact Form */}
//             <section className="contact spad">
//                 <div className="container">
//                     <div className="row d-flex justify-center">
//                         <div className="col-lg-6 col-md-6">
//                             <div className="contact__form">
//                                 <h3>Get in touch</h3>
//                                 <form onSubmit={handleSubmit}>
//                                     <input
//                                         type="text"
//                                         placeholder="Name"
//                                         value={userName}
//                                         onChange={(e) => setUserName(e.target.value)}
//                                     />
//                                     <input
//                                         type="email"
//                                         placeholder="Email"
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                     />
//                                     <input
//                                         type="text"
//                                         placeholder="Website"
//                                         value={website}
//                                         onChange={(e) => setWebsite(e.target.value)}
//                                     />
//                                     <textarea
//                                         placeholder="Message"
//                                         value={message}
//                                         onChange={(e) => setMessage(e.target.value)}
//                                     ></textarea>
//                                     <ReCAPTCHA
//                                         sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
//                                         onChange={(token) => setRecaptchaToken(token)}
//                                         onExpired={() => setRecaptchaToken(null)}
//                                     />
//                                     <button
//                                         type="submit"
//                                         className={`site-btn ${loading ? 'loading-btn' : ''}`}
//                                         disabled={loading}
//                                     >
//                                         {loading ? (
//                                             <>
//                                                 <FontAwesomeIcon icon={faSpinner} spin style={{ marginRight: 8 }} />
//                                                 Processing
//                                             </>
//                                         ) : (
//                                             "Send Message"
//                                         )}
//                                     </button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Contact;













// Visibal recaptcha
// import React, { useState } from 'react';
// import Loader from './js/Loader';
// import "../CSS/contact.css";
// import ReCAPTCHA from "react-google-recaptcha";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faPhone, faEnvelope, faSpinner } from '@fortawesome/free-solid-svg-icons';
// import Breadcrumb from './methods/Breadcrumb';
// import { message as antdMessage } from 'antd';

// function Contact() {
//     const [userName, setUserName] = useState("");
//     const [email, setEmail] = useState("");
//     const [website, setWebsite] = useState("");
//     const [message, setMessage] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [recaptchaToken, setRecaptchaToken] = useState(null);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!userName || !email || !website || !message) {
//             antdMessage.error("Please fill in all required fields.");
//             return;
//         }

//         if (!recaptchaToken) {
//             antdMessage.error("Please complete the reCAPTCHA.");
//             return;
//         }

//         setLoading(true);

//         try {
//             const response = await fetch("http://localhost/xampp/backend/api.php", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     userName,
//                     email,
//                     website,
//                     message,
//                     recaptchaToken,
//                 }),
//             });

//             const data = await response.json();

//             if (data.status === "success") {
//                 antdMessage.success("Message sent successfully! ✅");
//                 setUserName("");
//                 setEmail("");
//                 setWebsite("");
//                 setMessage("");
//                 setRecaptchaToken(null);
//             } else {
//                 antdMessage.error(data.message || "Failed to send message ❌");
//             }
//         } catch (error) {
//             antdMessage.error("Failed to send message ❌");
//             console.error(error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className='main_contact_me'>
//             <Loader />
//             <Breadcrumb title="Contact Us" path={["Contact"]} />

//             <section className="contact-widget spad">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-4 col-md-6 d-flex justify-center">
//                             <div className="contact__widget__item">
//                                 <div className='contact__widget__item__icon'>
//                                     <FontAwesomeIcon className='i_con' icon={faMapMarkerAlt} />
//                                 </div>
//                                 <div className="contact__widget__item__text">
//                                     <h4>Address</h4>
//                                     <p>Ahmedabad, Gujarat, India</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 d-flex justify-center">
//                             <div className="contact__widget__item">
//                                 <div className='contact__widget__item__icon'>
//                                     <FontAwesomeIcon className='i_con' icon={faPhone} />
//                                 </div>
//                                 <div className="contact__widget__item__text">
//                                     <h4>Business Number</h4>
//                                     <p>+91 7984285538</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 d-flex justify-center">
//                             <div className="contact__widget__item">
//                                 <div className='contact__widget__item__icon'>
//                                     <FontAwesomeIcon className='i_con' icon={faEnvelope} />
//                                 </div>
//                                 <div className="contact__widget__item__text">
//                                     <h4>Email</h4>
//                                     <p>harshvegad135@gmail.com</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Contact Form */}
//             <section className="contact spad">
//                 <div className="container">
//                     <div className="row d-flex justify-center">
//                         <div className="col-lg-6 col-md-6">
//                             <div className="contact__form">
//                                 <h3>Get in touch</h3>
//                                 <form onSubmit={handleSubmit}>
//                                     <input
//                                         type="text"
//                                         placeholder="Name"
//                                         value={userName}
//                                         onChange={(e) => setUserName(e.target.value)}
//                                     />
//                                     <input
//                                         type="email"
//                                         placeholder="Email"
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                     />
//                                     <input
//                                         type="text"
//                                         placeholder="Website"
//                                         value={website}
//                                         onChange={(e) => setWebsite(e.target.value)}
//                                     />
//                                     <textarea
//                                         placeholder="Message"
//                                         value={message}
//                                         onChange={(e) => setMessage(e.target.value)}
//                                     ></textarea>
//                                     <ReCAPTCHA
//                                         sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
//                                         onChange={(token) => setRecaptchaToken(token)}
//                                         onExpired={() => setRecaptchaToken(null)}
//                                     />
//                                     <button
//                                         type="submit"
//                                         className={`site-btn ${loading ? 'loading-btn' : ''}`}
//                                         disabled={loading}
//                                     >
//                                         {loading ? (
//                                             <>
//                                                 <FontAwesomeIcon icon={faSpinner} spin style={{ marginRight: 8 }} />
//                                                 Processing
//                                             </>
//                                         ) : (
//                                             "Send Message"
//                                         )}
//                                     </button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Contact;






















import React, { useState, useRef, useEffect } from 'react';
import Loader from './js/Loader';
import "../CSS/contact.css";
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from './methods/Breadcrumb';
import { message as antdMessage } from 'antd';

function Contact() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState(null);

    const recaptchaRef = useRef(null);

    const isValidURL = (text) => {
        const urlPattern = new RegExp(
            '^(https?:\\/\\/)?' + // optional http or https
            '((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|' + // domain
            '\\d{1,3}(\\.\\d{1,3}){3})' + // OR IP (v4) address
            '(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-zA-Z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-zA-Z\\d_]*)?$', 'i' // fragment
        );
        return urlPattern.test(text);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userName.trim() || !email.trim() || !website.trim() || !message.trim()) {
            antdMessage.error("Please fill in all required fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            antdMessage.error("Please enter a valid email address.");
            return;
        }


        if (website && !isValidURL(website)) {
            antdMessage.error("Please enter a valid website URL.");
            return;
        }

        setLoading(true);

        try {
            const token = await recaptchaRef.current.executeAsync();
            setRecaptchaToken(token);

            const response = await fetch("http://localhost/xampp/hr%20vegad/backend/api.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userName,
                    email,
                    website,
                    message,
                    recaptchaToken: token,
                }),
            });

            const data = await response.json();

            if (data.status === "success") {
                antdMessage.success("Message sent successfully! ✅");
                setUserName("");
                setEmail("");
                setWebsite("");
                setMessage("");
                setRecaptchaToken(null);
                recaptchaRef.current.reset(); // reset reCAPTCHA after success
            } else {
                antdMessage.error(data.message || "Failed to send message ❌");
            }
        } catch (error) {
            antdMessage.error("Failed to send message ❌");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        return () => {
            recaptchaRef.current?.reset();
        };
    }, []);

    return (
        <div className='main_contact_me'>
            <Loader />
            <Breadcrumb title="Contact Us" path={["Contact"]} />

            <section className="contact-widget spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex justify-center">
                            <div className="contact__widget__item">
                                <div className='contact__widget__item__icon'>
                                    <FontAwesomeIcon className='i_con' icon={faMapMarkerAlt} />
                                </div>
                                <div className="contact__widget__item__text">
                                    <h4>Address</h4>
                                    <p>Ahmedabad, Gujarat, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex justify-center">
                            <div className="contact__widget__item">
                                <div className='contact__widget__item__icon'>
                                    <FontAwesomeIcon className='i_con' icon={faPhone} />
                                </div>
                                <div className="contact__widget__item__text">
                                    <h4>Business Number</h4>
                                    <p>+91 7984285538</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex justify-center">
                            <div className="contact__widget__item">
                                <div className='contact__widget__item__icon'>
                                    <FontAwesomeIcon className='i_con' icon={faEnvelope} />
                                </div>
                                <div className="contact__widget__item__text">
                                    <h4>Email</h4>
                                    <p>harshvegad135@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="contact spad">
                <div className="container">
                    <div className="row d-flex justify-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="contact__form">
                                <h3>Get in touch</h3>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Website"
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                                    />
                                    <textarea
                                        placeholder="Message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>

                                    {/* Invisible reCAPTCHA */}
                                    <ReCAPTCHA
                                        className='recaptcha invisible'
                                        ref={recaptchaRef}
                                        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                                        size="invisible"
                                        badge="bottomright"
                                        onErrored={() => {
                                            recaptchaRef.current?.reset();
                                            antdMessage.error("reCAPTCHA error. Please try again.");
                                        }}
                                        onExpired={() => {
                                            recaptchaRef.current?.reset();
                                            setRecaptchaToken(null);
                                        }}
                                    />

                                    <button
                                        type="submit"
                                        className={`site-btn ${loading ? 'loading-btn' : ''}`}
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <FontAwesomeIcon icon={faSpinner} spin style={{ marginRight: 8 }} />
                                                Processing
                                            </>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
