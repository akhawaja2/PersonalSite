//https://herotofu.com/solutions/guides/react-contact-form

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faFacebook
} from "@fortawesome/free-brands-svg-icons";
const FORM_ENDPOINT = "https://public.herotofu.com/v1/652bbc00-4f01-11ed-8970-6943e4ac8982"; // TODO - fill on the later step

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <div class="text-2xl">Thank you!</div>
                <div class="text-md">We'll be in touch soon.</div>
            </>
        );
    }

    return (
        <div className="w-full p-3">
            <h1 className="text-5xl p-3">Contact me below</h1>
            <div className="border p-3 border-black border-rounded">
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
                <div class="">
                <h1 class="head">Social Follow</h1>
                <a href="https://www.linkedin.com/in/abu-khawaja/"
                    class="foot">
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
                <a href="https://www.github.com/akhawaja2"
                    class="foot">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
                <a href="https://www.github.com/akhawaja2"
                    class="foot">
                    <FontAwesomeIcon icon={faYoutube} size="3x" />
                </a>
                <a href="https://www.github.com/akhawaja2"
                    class="foot">
                    <FontAwesomeIcon icon={faFacebook} size="3x" />
                </a>
            </div>
            </div>
            
        </div>
    );
};
export default ContactForm;
