import * as React from "react";
import Navbar from '../../components/navbar/navbar';
import AboutPage from "../about-page/about";
import ContactPage from "../contact-page/contact";
import FaqPage from "../faq-page/faq";
import HomePage from "../home-page/home";
import TourPage from "../tour-page/tour";
import WorkPage from "../work-page/work";

export default class Master extends React.Component {

    scrollingNavBar(): void {
        const nav = document.getElementsByTagName('nav');
        const doc = document.documentElement;
        window.addEventListener('scroll', function () {
            if ((window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0) === 0)
                {
                nav[0].classList.remove('animated');
                nav[0].classList.remove('pulse');
                } else {
                nav[0].classList.add('animated');
                nav[0].classList.add("pulse");
            }
        })
    }

    componentDidMount(): void {
        this.scrollingNavBar();
    }

    render() {
        return (
            <div>
                <Navbar/>
                <HomePage/>
                <AboutPage/>
                <TourPage/>
                <WorkPage/>
                <FaqPage/>
                <ContactPage/>
            </div>
        )
    }
}
