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
                            <div className="col-sm-12 col-md-4 offset-md-2 mt-100">
                                <img src="http://alexcaligari.com/wp-content/uploads/2018/12/caligari_about.jpg" className="img-fluid"/>
                            </div>
                            <div className={"col-sm-12 col-md-4 pt-5 mt-100 " + (this.state.mobile ? 'text-center' : 'text-right')}>
                                <h1 className="mb-5 grey-text col-sm-12">ABOUT ALEX CALIGARI</h1>
                                <h3 className="mb-3 yellow-text col-sm-12">Black & Gray Realism</h3>
                                <h4 className="mt-5 grey-text col-sm-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum</h4>
                                <button type="button" className=" btn-lg btn-outline-light waves-effect my-2">
                                    Read more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"row d-flex justify-content-center"} id="tourPage"
                     style={this.pageSpacingsAndBackground(`url(http://alexcaligari.com/wp-content/uploads/2018/05/funeral-home-pattern-cross.png)`,'rgba(0,0,0,0.94)')}
                >
                    <div className={"col-sm-12 mt-100 gradientBackgroundBottom"}>
                        <p className={'text-center yellow-text display-3 mb-100'}>TOUR</p>
                        <div className={"row"}>
                            <div className={"col-md-4 offset-md-2 col-sm-12 parent"} style={{height:"100%", marginBottom: this.state.mobile ? "7px": "auto"}}>
                                <div className={"child"} >
                                    <div className={"card-image"}>
                                            <div id="yourElement"
                                                 className={"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4"}
                                                 style={{height : this.state.mobile ? 'auto' : '660px'}}
                                            >
                                                <div>
                                                <h5 className="grey-text"><i className={"fas fa-chart-pie"}/> Marketing</h5>
                                                <h3 className={"card-title pt-2"}><strong>This is the card title</strong></h3>
                                                <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat,
                                                    laboriosam, voluptatem,
                                                    optio vero odio nam sit officia accusamus minus error nisi architecto nulla
                                                    ipsum dignissimos.
                                                    Odit sed qui, dolorum!.</p>
                                                <a className="btn btn-yellow"><i className="fas fa-clone left"></i> View project</a>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>

                            <div className={"col-md-4 col-sm-12"}>
                                <div className={"parent"} >
                                    <div className="card card-image child"
                                         style={{backgroundImage: `url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)`,
                                                 maxHeight: this.state.mobile ? 'none':'327.5px'
                                         }}>
                                        <div
                                            className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                                            <div>
                                                <h5 className="grey-text"><i className="fas fa-chart-pie"/> Marketing</h5>
                                                <h3 className="card-title pt-2"><strong>This is the card title</strong></h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat,
                                                    laboriosam, voluptatem,
                                                    optio vero odio nam sit officia accusamus minus error nisi architecto nulla
                                                    ipsum dignissimos.
                                                    Odit sed qui, dolorum!.</p>
                                                <a className="btn btn-yellow"><i className="fas fa-clone left"/> View project</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={"parent"} >
                                    <div className="card card-image child"
                                         style={{backgroundImage: `url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)`,
                                                 maxHeight: this.state.mobile ? 'none':'327.5px'
                                         }}>
                                        <div
                                            className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                                            <div>
                                                <h5 className="grey-text"><i className="fas fa-chart-pie"/> Marketing</h5>
                                                <h3 className="card-title pt-2"><strong>This is the card title</strong></h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat,
                                                    laboriosam, voluptatem,
                                                    optio vero odio nam sit officia accusamus minus error nisi architecto nulla
                                                    ipsum dignissimos.
                                                    Odit sed qui, dolorum!.</p>
                                                <a className="btn btn-yellow"><i className="fas fa-clone left"/> View project</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
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


