import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { HiOutlineRocketLaunch } from "react-icons/hi2";


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_n3uotfp",
                "template_k21aqla",
                form.current,
                "vsDVDqRAVA7xNtI8F"
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

                <form className="form-wrapper" ref={form} onSubmit={sendEmail} autoComplete="off">
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

                    <button type="submit">
                        launch<HiOutlineRocketLaunch className="rocket"/>
                    </button>
                </form>
            </section>
        </>
    );
};

export default Contact;

{
    /* <form ref={form} onSubmit={sendEmail}>
<label>Name</label>
<input type="text" name="user_name" />
<label>Email</label>
<input type="email" name="user_email" />
<label>Message</label>
<textarea name="message" />
<input type="submit" value="Send" />
</form> */
}
