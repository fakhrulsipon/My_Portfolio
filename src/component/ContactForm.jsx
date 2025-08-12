import emailjs from '@emailjs/browser';
import React, { useRef } from "react";
import Swal from 'sweetalert2';
import contactLottie from '../assets/contact-form.json'
import Lottie from 'lottie-react';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_g8d4cfd', 'template_4szcvmj', form.current, {
                publicKey: 'dWdSuk3nDC-gqpGJR',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    Swal.fire({
                        icon: 'success',
                        title: 'Message Sent!',
                        text: 'Your message has been sent successfully.',
                        confirmButtonColor: '#06b6d4',
                    });
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    Swal.fire({
                        icon: 'error',
                        title: 'Failed!',
                        text: 'Something went wrong. Please try again.',
                        confirmButtonColor: '#ef4444',
                    });
                },
            );
    };

    return (
        <div className='lg:mt-16 md:mt-12 mt-8 px-4 md:px-8 lg:px-20'>

            <h2 className="text-3xl md:text-4xl font-medium text-white text-center mb-2">
                Get In Touch
            </h2>
            <p className="mt-3 text-gray-400 text-center mb-6">
                Have questions or want to work together? Fill out the form below and I’ll get back to you as soon as possible.
            </p>

            <div className='lg:flex justify-center items-center'>

                <div className="w-full flex-1">
                    <Lottie animationData={contactLottie} loop={true} style={{ width: '100%', height: '100%' }} />
                </div>

                {/* contact-form */}
                <div className="flex items-center justify-center flex-1">
                    <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg space-y-4">
                        {/* Name */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name*"
                            autoComplete="off"
                            className="w-full px-4 py-3 bg-transparent border border-green-400 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />

                        {/* Email */}
                        <input
                            type="email"
                            name="email"
                            autoComplete="off"
                            placeholder="Your Email*"
                            className="w-full px-4 py-3 bg-transparent border border-green-400 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />

                        {/* Message */}
                        <textarea
                            name="message"
                            placeholder="Your message*"
                            rows="5"
                            className="w-full px-4 py-3 bg-transparent border border-green-400 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        ></textarea>

                        {/* Submit */}
                        <button
                            type="submit"
                            value='send'
                            className="w-full px-4 py-3 border border-green-400 text-green-400 rounded-md hover:bg-green-700 hover:text-white font-semibold transition-colors"
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ContactForm;
