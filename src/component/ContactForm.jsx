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
                        confirmButtonColor: '#FF7E29',
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
        <div className='section-shell py-6 md:py-8 lg:py-10'>
            <div className="section-container">

            <div className="mb-8 text-center">
                <span className="section-badge">📬 GET IN TOUCH</span>
                <h2 className="mt-1 text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
                    Get In Touch
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-center leading-7 text-slate-600">
                    Have questions or want to work together? Fill out the form below and I’ll get back to you as soon as possible.
                </p>
            </div>

            <div className='premium-card grid items-center gap-8 rounded-[2rem] bg-white p-5 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 border border-slate-200/80 shadow-lg shadow-slate-200/50'>

                <div className="w-full">
                    <Lottie animationData={contactLottie} loop={true} style={{ width: '100%', height: '100%' }} />
                </div>

                {/* contact-form */}
                <div className="flex items-center justify-center">
                    <form ref={form} onSubmit={sendEmail} className="w-full max-w-xl space-y-4">
                        {/* Name */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name*"
                            autoComplete="off"
                            className="w-full rounded-2xl border border-slate-200 bg-slate-50/90 px-4 py-3.5 text-[#0F172A] placeholder-slate-400 transition duration-300 focus:border-[#FF7E29] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF7E29]/20 font-medium"
                            required
                        />

                        {/* Email */}
                        <input
                            type="email"
                            name="email"
                            autoComplete="off"
                            placeholder="Your Email*"
                            className="w-full rounded-2xl border border-slate-200 bg-slate-50/90 px-4 py-3.5 text-[#0F172A] placeholder-slate-400 transition duration-300 focus:border-[#FF7E29] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF7E29]/20 font-medium"
                            required
                        />

                        {/* Message */}
                        <textarea
                            name="message"
                            placeholder="Your message*"
                            rows="5"
                            className="w-full rounded-2xl border border-slate-200 bg-slate-50/90 px-4 py-3.5 text-[#0F172A] placeholder-slate-400 transition duration-300 focus:border-[#FF7E29] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF7E29]/20 font-medium"
                            required
                        ></textarea>

                        {/* Submit */}
                        <button
                            type="submit"
                            value='send'
                            className="w-full rounded-full bg-gradient-to-r from-[#FF7E29] to-[#FF3E6C] px-4 py-3.5 font-bold text-white shadow-lg shadow-[#FF7E29]/25 transition duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#FF3E6C]/35 focus-ring cursor-pointer"
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
            </div>

        </div>
    );
};

export default ContactForm;
