import React from 'react';

import Container from '../Container';
import Menu from '../../Menu/Menu';
import Body from '../Body/Body';

import Hero from '../../sections/Hero/Hero';
import About from '../../sections/About/About';
import Services from '../../sections/Services/Services';
import Portfolio from '../../sections/Portfolio/Portfolio';
import News from '../../sections/News/News';
import Contact from '../../sections/Contact/Contact';
import Footer from '../../Footer/Footer';

const Wrapper = () =>
    (
        <Container>
            <Menu />
            <Body>
                <Hero id={'home'} />
                <About id={'about'} />
                <Services id={'services'} />
                <Portfolio id={'portfolio'} />
                <News id={'news'} />
                <Contact id={'contact'} />
                <Footer />
            </Body>
        </Container>
    )

export default Wrapper;