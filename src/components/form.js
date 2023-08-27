import "./FormStyles.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hgjnmhb', 'template_8wj6erq', form.current, 'VLxenQP583gEQz0et')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert("Email Sent!");
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};

export default Form