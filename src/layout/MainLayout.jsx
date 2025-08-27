
import Navbar from '../component/Navbar';
import About from '../component/About';
import Skills from '../component/Skills';
import Hero from '../component/Hero';
import Projects from '../component/Projects';
import ContactForm from '../component/ContactForm';
import Footer from '../component/Footer';

const MainLayout = () => {
    return (
        <div className='bg-gray-900'>

            <section id='home'>
                <Navbar></Navbar>
                <section className='pt-16'>
                    <Hero></Hero>
                </section>
            </section>

            <section id='about'>
                <About></About>
            </section>

            <section id='skills'>
                <Skills></Skills>
            </section>

            <section id='projects' className='pt-10'>
                <Projects></Projects>
            </section>

             <ContactForm></ContactForm>

            <section id='contact'>
                <Footer></Footer>
            </section>
            
        </div>
    );
};

export default MainLayout;