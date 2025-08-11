import React from 'react';
import aboutLottie from '../assets/about.json'
import Lottie from 'lottie-react';
const About = () => {
    return (
        <div className='lg:flex lg:justify-center lg:items-center px-4 md:px-8 lg:px-20'>

            {/* ✅ Right: Responsive Lottie Animation */}
            <div className="w-full flex-1">
                <Lottie animationData={aboutLottie} loop={true} style={{ width: '100%', height: '100%' }} />
            </div>
            <div className='flex-1'>
                <h1 className='font-semibold text-3xl text-center my-4'>About me</h1>
                <p className="text-gray-700 mb-4 leading-relaxed">
                    I started my programming journey with curiosity and passion, diving deep into frontend technologies and later expanding to the MERN stack.
                    I enjoy crafting clean, user-friendly, and efficient web applications that solve real-world problems.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                    My favorite kind of work involves both designing beautiful interfaces and implementing robust backend logic to bring ideas to life.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                    Outside of programming, I love playing football, exploring digital art, and listening to music which helps me stay creative and motivated.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                    I’m always eager to learn new technologies and collaborate with others to build amazing projects. Problem-solving is what excites me most about development.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Overall, I’m a dedicated developer who believes in continuous growth and delivering quality work with passion.
                </p>
            </div>
        </div>
    );
};

export default About;