import { useRef } from "react";
import emailjs from "@emailjs/browser";
// import ReCAPTCHA from "react-google-recaptcha";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

const Contact = () => {

    // const key = import.meta.env.VITE_DEMO_SITE_KEY
    // const onChange = () => {
    //     const submitButton = document.querySelector('.submit-button')
    //     submitButton.removeAttribute("disabled")
    // }
 
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("Message sent!");
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <>
            <section id="contact-container">
                <h3 className="title">Contact me</h3>

                <form
                    className="form-wrapper"
                    ref={form}
                    onSubmit={sendEmail}
                    autoComplete="off"
                >
                    <div className="form-group" id="name-form">
                        <input
                            type="text"
                            id="name"
                            name="user_name"
                            required
                        />

                        <label htmlFor="name">Your name</label>
                    </div>
                    <div className="form-group" id="email-form">
                        <input
                            type="text"
                            id="email"
                            name="user_email"
                            required
                        />

                        <label htmlFor="email">Your e-mail</label>
                    </div>
                    <div className="form-group" id="message-form">
                        <textarea
                            id="message"
                            name="message"
                            required
                        ></textarea>

                        <label htmlFor="message">Your message</label>
                    </div>

                    {/* <ReCAPTCHA className="recaptcha"
                        sitekey={key}
                        onChange={onChange}
                        required
                    /> */}
                    
                    <button type="submit" className="submit-button">
                        launch
                        <HiOutlineRocketLaunch className="rocket" />
                    </button>
                </form>
            </section>
        </>
    );
};

export default Contact;