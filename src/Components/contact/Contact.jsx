import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

const Contact = () => {
    const [areInputsFilled, setAreInputsFilled] = useState(false);
    const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
    const recaptchaRef = React.createRef();
    // eslint-disable-next-line no-undef
    const sitekey = import.meta.env.VITE_SITE_KEY || process.env.VITE_SITE_KEY;

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        if (isRecaptchaVerified) {
            emailjs
                .sendForm(
                    import.meta.env.VITE_SERVICE_ID,
                    import.meta.env.VITE_TEMPLATE_ID,
                    form.current,
                    import.meta.env.VITE_PUBLIC_KEY
                )
                .then(
                    () => {
                        console.log("Message sent!");
                        e.target.reset();
                        window.location.reload();
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        } else {
            console.log("reCAPTCHA not verified. Cannot submit.");
        }
    };

    const onChange = () => {
        const recaptchaValue = recaptchaRef.current.getValue();
        if (recaptchaValue) {
            setIsRecaptchaVerified(true);
            console.log("enabled");
        } else {
            setIsRecaptchaVerified(false);
            console.log("disabled");
        }
    };

    const handleInputChange = () => {
        const nameInput = document.getElementById("name").value;
        const emailInput = document.getElementById("email").value;
        
        setAreInputsFilled(nameInput.trim() !== "" && emailInput.trim() !== "");
    };

    return (
        <>
            <section id="contact-container">
                <h2 className="title">Contact me</h2>

                <form className="form-wrapper" ref={form} onSubmit={sendEmail}>
                    <div className="form-group" id="name-form">
                        <input
                            type="text"
                            id="name"
                            name="user_name"
                            required
                            aria-required="true"
                            autoComplete="off"
                        />
                        <label htmlFor="name">Your name</label>
                    </div>
                    <div className="form-group" id="email-form">
                        <input
                            type="email"
                            id="email"
                            name="user_email"
                            required
                            aria-required="true"
                            autoComplete="off"
                        />
                        <label htmlFor="email">Your e-mail</label>
                    </div>
                    <div className="form-group" id="message-form">
                        <textarea
                            id="message"
                            name="message"
                            required
                            aria-required="true"
                            autoComplete="off"
                            onChange={handleInputChange}
                        ></textarea>
                        <label htmlFor="message">Your message</label>
                    </div>

                    {areInputsFilled && (
                        <ReCAPTCHA
                            className="grecaptcha"
                            ref={recaptchaRef}
                            theme="dark"
                            sitekey={sitekey}
                            onChange={onChange}
                        />
                    )}

                    <button
                        type="submit"
                        className="submit-button"
                        disabled={!isRecaptchaVerified}
                    >
                        launch
                        <HiOutlineRocketLaunch className="rocket" role="none" />
                    </button>
                </form>
            </section>
        </>
    );
};

export default Contact;
