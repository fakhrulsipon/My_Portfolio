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
        <div className='section-shell py-16 md:py-20 lg:py-24'>
            <div className="section-container">

            <h2 className="mb-2 text-center text-4xl font-medium tracking-tight text-white md:text-5xl">
                Get In Touch
            </h2>
            <p className="mx-auto mb-10 mt-4 max-w-2xl text-center leading-7 text-slate-400">
                Have questions or want to work together? Fill out the form below and I’ll get back to you as soon as possible.
            </p>

            <div className='premium-card grid items-center gap-8 rounded-[2rem] p-5 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12'>

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
                            className="w-full rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3.5 text-white placeholder-slate-400 transition duration-300 focus:border-cyan-300/50 focus:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
                            required
                        />

                        {/* Email */}
                        <input
                            type="email"
                            name="email"
                            autoComplete="off"
                            placeholder="Your Email*"
                            className="w-full rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3.5 text-white placeholder-slate-400 transition duration-300 focus:border-cyan-300/50 focus:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
                            required
                        />

                        {/* Message */}
                        <textarea
                            name="message"
                            placeholder="Your message*"
                            rows="5"
                            className="w-full rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3.5 text-white placeholder-slate-400 transition duration-300 focus:border-cyan-300/50 focus:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
                            required
                        ></textarea>

                        {/* Submit */}
                        <button
                            type="submit"
                            value='send'
                            className="w-full rounded-2xl border border-cyan-300/40 bg-cyan-300/10 px-4 py-3.5 font-semibold text-cyan-100 shadow-lg shadow-cyan-950/30 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/20 hover:text-white focus-ring"
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
