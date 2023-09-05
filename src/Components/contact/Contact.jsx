import { useRef } from "react";
import emailjs from "@emailjs/browser";
// import ReCAPTCHA from "react-google-recaptcha";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

const Contact = () => {

    // const key = import.meta.env.VITE_DEMO_KEY
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
                <h2 className="title">Contact me</h2>

                <form
                    className="form-wrapper"
                    ref={form}
                    onSubmit={sendEmail}
                    autoComplete="off"
                >
                    <div className="form-group" id="name-form">
                        
                    <label htmlFor="name">Your name</label>
                        <input
                            type="text"
                            id="name"
                            name="user_name"
                            required
                            aria-required="true"
                        />
                    </div>
                    <div className="form-group" id="email-form">
                    <label htmlFor="email">Your e-mail</label>
                        <input
                            type="text"
                            id="email"
                            name="user_email"
                            required
                            aria-required="true"
                        />
                    </div>
                    <div className="form-group" id="message-form">
                    <label htmlFor="message">Your message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            aria-required="true"
                        ></textarea>
                    </div>

                    {/* <ReCAPTCHA className="recaptcha"
                        sitekey={key}
                        theme={"dark"}
                        onChange={onChange}
                        required
                    /> */}
                    
                    <button type="submit" className="submit-button" disabled>
                        launch
                        <HiOutlineRocketLaunch className="rocket" role="none"/>
                    </button>
                </form>
            </section>
        </>
    );
};

export default Contact;