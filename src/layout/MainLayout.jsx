import React from 'react';
import Navbar from '../component/Navbar';

import About from '../component/About';
import Skills from '../component/Skills';
import Hero from '../component/Hero';

const MainLayout = () => {
    return (
        <div className='bg-cyan-100'>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <section id='skills'>
                <Skills></Skills>
            </section>
        </div>
    );
};

export default MainLayout;