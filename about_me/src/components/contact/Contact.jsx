//https://herotofu.com/solutions/guides/react-contact-form

import React, { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faFacebook
} from "@fortawesome/free-brands-svg-icons";
const FORM_ENDPOINT = "https://public.herotofu.com/v1/652bbc00-4f01-11ed-8970-6943e4ac8982"; // TODO - fill on the later step

const ContactForm = () => {
    //Enabling TailWind CSS
    useEffect(() => {
        if (document) {
            const stylesheet = document.createElement("link");
            stylesheet.rel = "stylesheet";
            stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

            document.head.appendChild(stylesheet);
        }
    }, []);
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">We'll be in touch soon.</div>
            </>
        );
    }

    return (
        <div className="contact">
            <h1 className="head">Contact me below</h1>
            <div className="formbox">
                <form
                    action={FORM_ENDPOINT}
                    onSubmit={handleSubmit}
                    method="POST"
                    target="_blank"
                >
                    <div className="mb-3 pt-0">
                        <input
                            type="text"
                            placeholder="Your name"
                            name="name"
                            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                            required
                        />
                    </div>
                    <div className="mb-3 pt-0">
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                            required
                        />
                    </div>
                    <div className="mb-3 pt-0">
                        <textarea
                            placeholder="Your message"
                            name="message"
                            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                            required
                        />
                    </div>
                    <div className="mb-3 pt-0">
                        <button
                            className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                        >
                            Send a message
                        </button>
                    </div>
                </form>
            </div>
            <div className="bottom">
                <h1 className="head">Social Follow</h1>
                <a href="https://www.linkedin.com/in/abu-khawaja/"
                    className="foot">
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
                <a href="https://www.github.com/akhawaja2"
                    className="foot">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
                <a href="https://www.github.com/akhawaja2"
                    className="foot">
                    <FontAwesomeIcon icon={faYoutube} size="3x" />
                </a>
                <a href="https://www.github.com/akhawaja2"
                    className="foot">
                    <FontAwesomeIcon icon={faFacebook} size="3x" />
                </a>
            </div>
        </div>
    );
};
export default ContactForm;
