import * as React from "react";
import Navbar from '../../components/navbar/navbar';
import HomePage from "../home-page/home";

export default class Master extends React.Component {




    scrollingNavBar(): void {
        const nav = document.getElementsByTagName('nav');
        var doc = document.documentElement;
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
            </div>
        )
    }
}
