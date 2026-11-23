import { useRef, useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane, FaCheck } from "react-icons/fa";
import LazyLottie from "./LazyLottie";

const EMAILJS = {
    serviceId: "service_g8d4cfd",
    templateId: "template_4szcvmj",
    publicKey: "dWdSuk3nDC-gqpGJR",
};

// Code-split: the animation JSON, EmailJS and SweetAlert2 are only fetched when needed.
const loadContactAnimation = () => import("../assets/contact-form.json");
const loadSwal = () => import("sweetalert2").then((m) => m.default);

const Field = ({ as = "input", icon, label, className = "", ...props }) => {
    const Tag = as;
    const Icon = icon;
    const isTextarea = as === "textarea";

    return (
        <div className={`group relative ${className}`}>
            <Tag
                {...props}
                placeholder=" "
                className={`peer block w-full rounded-2xl border border-slate-200 bg-slate-50/70 pl-12 pr-4 text-[15px] font-medium text-[#0F172A] shadow-[inset_0_1px_2px_rgba(15,23,42,0.04)] outline-none transition-[border-color,background-color,box-shadow] duration-300 ease-out placeholder:text-transparent hover:border-slate-300 focus:border-[#FF7E29]/70 focus:bg-white focus:shadow-[0_0_0_4px_rgba(255,126,41,0.12),0_10px_30px_-12px_rgba(255,94,75,0.35)] ${isTextarea ? "min-h-[9.5rem] resize-none pb-3 pt-7" : "h-14 pb-2 pt-6"
                    }`}
            />
            <Icon
                aria-hidden="true"
                className={`pointer-events-none absolute left-4 text-[15px] text-slate-400 transition-colors duration-300 peer-focus:text-[#FF7E29] ${isTextarea ? "top-[1.15rem]" : "top-1/2 -translate-y-1/2"
                    }`}
            />
            <label
                htmlFor={props.id}
                className={`pointer-events-none absolute left-12 origin-left text-slate-500 transition-all duration-200 ease-out
                    top-2 text-[11px] font-semibold uppercase tracking-wider
                    peer-placeholder-shown:text-[15px] peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal
                    peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-[#FF7E29]
                    ${isTextarea ? "peer-placeholder-shown:top-4" : "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:translate-y-0"}`}
            >
                {label}
            </label>
        </div>
    );
};

const ContactForm = () => {
    const form = useRef(null);
    const [status, setStatus] = useState("idle"); // idle | sending | sent

    const sendEmail = async (e) => {
        e.preventDefault();
        if (status === "sending") return;
        setStatus("sending");

        try {
            const [{ default: emailjs }, Swal] = await Promise.all([
                import("@emailjs/browser"),
                loadSwal(),
            ]);
            try {
                await emailjs.sendForm(EMAILJS.serviceId, EMAILJS.templateId, form.current, {
                    publicKey: EMAILJS.publicKey,
                });
                form.current.reset();
                setStatus("sent");
                Swal.fire({
                    icon: "success",
                    title: "Message Sent!",
                    text: "Your message has been sent successfully.",
                    confirmButtonColor: "#FF7E29",
                });
                setTimeout(() => setStatus("idle"), 3500);
            } catch (error) {
                console.error("EmailJS failed:", error?.text ?? error);
                setStatus("idle");
                Swal.fire({
                    icon: "error",
                    title: "Failed!",
                    text: "Something went wrong. Please try again.",
                    confirmButtonColor: "#ef4444",
                });
            }
        } catch (error) {
            // Chunk failed to load (offline, etc.)
            console.error(error);
            setStatus("idle");
        }
    };

    return (
        <div className="section-shell py-10 md:py-14 lg:py-16">
            <div className="section-container">
                <div className="mb-10 text-center md:mb-12">
                    <span className="section-badge">📬 GET IN TOUCH</span>
                    <h2 className="mt-1 text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
                        Let's <span className="text-gradient-primary">Work Together</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                        Have a SaaS idea, a product to build, or a workflow to automate with AI? Fill out the form below and I’ll get back to you as soon as possible.
                    </p>
                </div>

                <div className="relative">
                    {/* Ambient glow behind the card */}
                    <div aria-hidden="true" className="pointer-events-none absolute -inset-x-6 -inset-y-8 -z-10 opacity-80">
                        <div className="absolute left-[8%] top-0 h-64 w-64 rounded-full bg-[#FF7E29]/15 blur-[90px]" />
                        <div className="absolute bottom-0 right-[6%] h-72 w-72 rounded-full bg-[#FF3E6C]/12 blur-[100px]" />
                    </div>

                    {/* Gradient hairline border */}
                    <div className="rounded-[2.25rem] bg-gradient-to-br from-[#FF7E29]/35 via-slate-200/70 to-[#FF3E6C]/35 p-px shadow-[0_30px_80px_-30px_rgba(15,23,42,0.25)]">
                        <div className="relative grid overflow-hidden rounded-[calc(2.25rem-1px)] bg-white/95 lg:grid-cols-[0.95fr_1.05fr]">
                            {/* Left: visual panel */}
                            <div className="relative flex flex-col justify-center gap-6 border-b border-slate-100 bg-gradient-to-br from-[#FFF7F2] via-white to-[#FFF3F6] p-6 md:p-10 lg:border-b-0 lg:border-r">
                                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:18px_18px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
                                <LazyLottie
                                    load={loadContactAnimation}
                                    aspectRatio="16 / 9"
                                    className="relative"
                                    label="Contact illustration"
                                />
                                <div className="relative text-center lg:text-left">
                                    <p className="text-lg font-semibold tracking-tight text-[#0F172A] md:text-xl">
                                        Got an idea? Let's build it.
                                    </p>
                                    <p className="mt-1.5 text-sm leading-6 text-slate-500">
                                        Share a few details about your project and I'll reply by email.
                                    </p>
                                </div>
                            </div>

                            {/* Right: form */}
                            <div className="p-6 md:p-10">
                                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <Field id="cf-name" type="text" name="name" label="Your Name" icon={FaUser} autoComplete="name" required />
                                        <Field id="cf-email" type="email" name="email" label="Your Email" icon={FaEnvelope} autoComplete="email" inputMode="email" required />
                                    </div>
                                    <Field id="cf-message" as="textarea" name="message" label="Your Message" icon={FaCommentDots} rows={5} required />

                                    <button
                                        type="submit"
                                        disabled={status === "sending"}
                                        aria-live="polite"
                                        className="group/btn relative flex h-14 w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#FF7E29] via-[#FF5E4B] to-[#FF3E6C] px-6 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_14px_30px_-10px_rgba(255,94,75,0.6)] transition-[transform,box-shadow,filter] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-12px_rgba(255,62,108,0.65)] active:translate-y-0 active:scale-[0.99] disabled:cursor-wait disabled:opacity-90 focus-ring cursor-pointer"
                                    >
                                        {/* Light sweep on hover */}
                                        <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-[left,opacity] duration-700 ease-out group-hover/btn:left-[110%] group-hover/btn:opacity-100" />
                                        {status === "sending" ? (
                                            <>
                                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                                                Sending…
                                            </>
                                        ) : status === "sent" ? (
                                            <>
                                                <FaCheck /> Message Sent
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <FaPaperPlane className="transition-transform duration-300 ease-out group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-1" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
