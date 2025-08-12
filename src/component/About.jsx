import React from 'react';
import aboutLottie from '../assets/about.json'
import Lottie from 'lottie-react';
const About = () => {
    return (
        <div className='lg:flex lg:justify-center lg:items-center lg:mt-16 md:mt-12 mt-8 px-4 md:px-8 lg:px-20'>

            {/* ✅ Right: Responsive Lottie Animation */}
            <div className="w-full flex-1">
                <Lottie animationData={aboutLottie} loop={true} style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="flex-1 text-gray-300">
                <h1 className="text-3xl md:text-4xl font-medium my-4 text-white tracking-wide">
                    Meet Sipon
                </h1>

                {/* Short Intro */}
                <p className="mb-6 text-lg leading-relaxed text-white">
                    <span className="font-semibold">MERN Stack Developer 🚀</span> |
                    <span className="font-semibold"> Forever Curious Learner 📚</span> |
                    <span className="font-semibold"> Adventurous Soul 🌍</span> |
                    <span className="font-semibold"> Introvert with an Extroverted Heart |</span>
                </p>

                {/* Article about you */}
                <article className="space-y-4 text-base leading-relaxed text-gray-300">
                    <p>
                        Hey there! I’m <span className="font-semibold text-teal-400">Fakhrul Islam Sipon</span>,
                        a passionate <span className="font-semibold text-teal-400">MERN stack developer</span> who loves
                        to transform ideas into digital experiences. My journey in web development started with curiosity
                        and has grown into a deep passion for crafting beautiful interfaces and robust backend systems.
                    </p>
                    <p>
                        When I’m not coding, you can find me playing football, exploring digital art, or listening
                        to music to recharge my creativity. I believe in continuous growth and staying updated with the latest tech trends.
                    </p>
                    <p>
                        I’m always excited to work on projects that challenge me to think differently and collaborate with
                        like-minded people. Problem-solving isn’t just part of my job — it’s what drives me every day.
                    </p>
                    <p>
                        My ultimate goal is to build meaningful projects that not only solve problems but also inspire people.
                        Every line of code I write is aimed at delivering quality, efficiency, and creativity.
                    </p>
                </article>

            </div>

        </div>
    );
};

export default About;