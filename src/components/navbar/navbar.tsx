import React, { CSSProperties } from 'react';
import { isMobile } from '../../services/mobile';

export default class Navbar extends React.Component<MyProps,MyState> {

    constructor(props: MyProps){
        super(props);
        this.state = {
            mobile: false
        };
    }

    clickOutsideTheModal(): void {
        // @ts-ignore
        document.addEventListener('click', function (event: React.FormEvent<HTMLSelectElement>) {
            const navBarCollapse = document.getElementsByClassName('navbar-collapse')[0].classList;
            if (navBarCollapse.contains('navbar-collapse') &&
                navBarCollapse.contains('collapse') &&
                navBarCollapse.contains('show')) {
                // @ts-ignore
                document.getElementsByClassName('navbar-toggler')[0].click()
            }
        })
    }

    componentDidMount(): void {
        isMobile().then( (res:boolean) => {
            this.setState({mobile: res});
        });
        this.clickOutsideTheModal();
    }

    render() {

        const container : CSSProperties = this.state.mobile ? { } :
            {   display:"flex",
                flexDirection:"row",
                justifyContent:"space-around",
                flex: "0 0 100%",
                color: "#ebcb00 !important",
            };

        const faInstagram : CSSProperties = {
            display: "inline-block",
            width: "20px",
            textAlign: "center",
            borderRadius: "4px",
            color: "#fff",
            fontSize: "1rem",
            lineHeight: "1",
            verticalAlign: "middle",
            background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
            boxShadow: "0px 3px 10px rgba(0,0,0,.25)",
            paddingBottom: "1px",
            marginBottom: "4px"
        };

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top scrolling-navbar">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarTogglerDemo02"
                                aria-controls="navbarTogglerDemo02" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <div style={container}>
                                    <a className="navbar-brand yellow-text" href="#">BlackInk</a>
                                    <ul className="navbar-nav smooth-scroll">
                                        <li className="nav-item"
                                            data-toggle="collapse"
                                            data-target=".navbar-collapse.show"
                                            style={{marginRight:"1vw"}}>
                                            <a className="nav-link" href="#" >Home
                                                <span className="sr-only">(current)</span>
                                            </a>
                                        </li>
                                        <li className="nav-item"
                                            data-toggle="collapse"
                                            data-target=".navbar-collapse.show
                                            " style={{marginRight:"1vw"}}>
                                            <a className="nav-link" href="#aboutPage">About</a>
                                        </li>
                                        <li className="nav-item"
                                            data-toggle="collapse"
                                            data-target=".navbar-collapse.show"
                                            style={{marginRight:"1vw"}}>
                                            <a className="nav-link" href="#tourPage">Tour</a>
                                        </li>
                                        <li className="nav-item"
                                            data-toggle="collapse"
                                            data-target=".navbar-collapse.show"
                                            style={{marginRight:"1vw"}}>
                                            <a className="nav-link" href="#">Work</a>
                                        </li>
                                        <li className="nav-item"
                                            data-toggle="collapse"
                                            data-target=".navbar-collapse.show"
                                            style={{marginRight:"1vw"}}>
                                            <a className="nav-link" href="#">FAQ</a>
                                        </li>
                                        <li className="nav-item"
                                            data-toggle="collapse"
                                            data-target=".navbar-collapse.show"
                                            style={{marginRight:"1vw"}}>
                                            <a className="nav-link" href="#">Contact</a>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav nav-flex-icons">
                                        <li className="nav-item">
                                            <a className="nav-link">
                                                <i style={{"color": "#8B9DC3"}} className="fab fa-facebook light-green-text-2"/>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link">
                                                <i style={{color:"#1DA1F2"}} className="fab fa-twitter light-green-text-2"/>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link">
                                                <i style={faInstagram} className="fab fa-instagram light-green-text-2"/>
                                            </a>
                                        </li>
                                    </ul>
                        </div>
                    </div>
                    </div>
                </nav>
            </div>
        )
    }
}



interface MyState {
    mobile: boolean;
}

interface MyProps {

}
