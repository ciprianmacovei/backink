// @ts-ignore
import React, { CSSProperties } from 'react';
import { isMobile } from "../../services/mobile";
import './home.css';

export default class HomePage extends React.Component<MyProps,MyState> {

    constructor(props:MyProps) {
        super(props);
        this.state = {
            mobile: false,
        }
    }

    componentDidMount(): void {
        isMobile().then( (res:boolean) => {
            this.setState({mobile:res});
        })
    }

    pageSpacingsAndBackground(background?: string, color?:string): CSSProperties {
        const height: string = this.state.mobile && color !== 'noNeed' ? "auto" : "100vh";
        const obj: CSSProperties = {
            width:"100vw",
            height:height,
            backgroundColor: color,
        };
        return { backgroundImage: background,...obj } as CSSProperties;
    }

    render() {

        return (
            <div className="container-fluid">
                <div className={"row mask d-flex justify-content-center align-items-center img-fluid"}
                     style={this.pageSpacingsAndBackground(`url(http://alexcaligari.com/wp-content/uploads/2018/05/funeralhome-rose-bg.jpg)`,'noNeed')}
                >
                    <div className="text-center">
                        <p className="yellow-text display-2" >ALEX CALIGARI</p>
                        <p className="mt-4 fontFamily display-3 grey-text">Tattoo artist based in Bucharest, Romania</p>
                        <a href="#aboutPage" className={"d-flex justify-content-center"}>
                            <div className={"d-flex flex-column btn-group-home-page"}>
                                <button type="button" className="btn btn-outline-light waves-effect mt-5 p-2">
                                    Find out more
                                </button>
                                <i className="fas fa-arrow-down faArrow yellow-text"></i>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="row" id="aboutPage"
                     style={this.pageSpacingsAndBackground(`url(http://alexcaligari.com/wp-content/uploads/2018/05/funeral-home-pattern-cross.png)`,'rgba(0,0,0,0.94)')}
                >
                    <div className={(this.state.mobile ? "blackBackground" : "gradientBackground") + " col-sm-12"}>
                        <div className="row" >
                            <div className="col-sm-12 col-md-4 offset-md-1 mt-100">
                                <img src="http://alexcaligari.com/wp-content/uploads/2018/12/caligari_about.jpg" className="img-fluid"/>
                            </div>
                            <div className={"col-sm-12 col-md-4 offset-md-1 pt-5 mt-100 " + (this.state.mobile ? 'text-center' : 'text-right')}>
                                <h1 className="mb-5 grey-text col-sm-12">ABOUT ALEX CALIGARI</h1>
                                <h3 className="mb-3 yellow-text col-sm-12">Black & Gray Realism</h3>
                                <h4 className="mt-5 grey-text col-sm-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"row d-flex justify-content-center gradientBackgroundBottom"} id="tourPage"
                     style={this.pageSpacingsAndBackground(`url(http://alexcaligari.com/wp-content/uploads/2018/05/funeral-home-pattern-cross.png)`,'rgba(0,0,0,0.94)')}
                >
                    <div className={"col-sm-12 mt-100"}>
                        <p className={'text-center yellow-text display-3'}>TOUR</p>
                    </div>
                </div>
            </div>
        )
    }
}

interface MyProps {

}

interface MyState {
    mobile: boolean;
}


