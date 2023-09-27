/* eslint-disable no-undef */
import { useState, useRef } from "react";
import Axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

const Contact = () => {
    const [SuccessMsg, setSuccessMsg] = useState("");
    const [ErrorMsg, setErrorMsg] = useState("");
    const [valid_token, setValidToken] = useState([]);
    const [isFormFilled, setIsFormFilled] = useState(false); 
    const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);


    const sitekey = import.meta.env.VITE_SITE_KEY || process.env.VITE_SITE_KEY;
    const privatekey = import.meta.env.VITE_PRIVATE_KEY || process.env.VITE_PRIVATE_KEY;

    const captchaRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let token = captchaRef.current.getValue();
        captchaRef.current.reset();

        if (token && isFormFilled && isRecaptchaVerified) { 
            sendEmail(e);
            let valid_token = await verifyToken(token);
            setValidToken(valid_token);

            if (valid_token && valid_token[0].success === true) {
                console.log("verified");
                sendEmail();
                setSuccessMsg("Hurray!! you have submitted the form");
            } else {
                console.log("not verified");
                setErrorMsg(" Sorry!! Verify you are not a bot");
            }
        }
    };

    const verifyToken = async (token) => {
        let APIResponse = [];

        try {
            let response = await Axios.post(
                `http://localhost:5172/verify-token`,
                {
                    reCAPTCHA_TOKEN: token,
                    Secret_Key: privatekey,
                }
            );

            APIResponse.push(response["data"]);
            return APIResponse;
        } catch (error) {
            console.log(error);
        }
    };

    const form = useRef();

    const handleInputChange = () => {
        const nameInput = form.current.querySelector("#name");
        const emailInput = form.current.querySelector("#email");
        const messageInput = form.current.querySelector("#message");

        if (nameInput.value && emailInput.value && messageInput.value) {
            setIsFormFilled(true);
        } else {
            setIsFormFilled(false);
        }
    };

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
                () => {
                    console.log("Message sent!");
                    e.target.reset();
                    window.location.reload();
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

                <form className="form-wrapper" ref={form} onSubmit={handleSubmit}>
                    <div className="form-group" id="name-form">
                        <input
                            type="text"
                            id="name"
                            name="user_name"
                            required
                            aria-required="true"
                            autoComplete="off"
                            onChange={handleInputChange} 
                        />
                        <label htmlFor="name">Your name</label>
                    </div>
                    <div className="form-group" id="email-form">
                        <input
                            type="text"
                            id="email"
                            name="user_email"
                            required
                            aria-required="true"
                            autoComplete="off"
                            onChange={handleInputChange} 
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

                    {isFormFilled && ( 
                        <ReCAPTCHA
                            className="recaptcha"
                            ref={captchaRef}
                            sitekey={sitekey}
                            onChange={(value) => setIsRecaptchaVerified(!!value)}
                            // size="invisible"
                        />
                    )}

                    {valid_token && valid_token.length > 0 && valid_token[0].success === true ? (
                        <h3 className="textSuccess">{SuccessMsg}</h3>
                    ) : (
                        <h3 className="textError">{ErrorMsg} </h3>
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