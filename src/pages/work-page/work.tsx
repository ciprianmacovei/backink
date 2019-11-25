import React from 'react';
import { isMobile } from "../../services/mobile";


export default class WorkPage extends React.Component<MyProps,MyState> {

    constructor(props: MyProps){
        super(props);
        this.state = {
            mobile: false
        };
    }

    componentDidMount(): void {
        isMobile().then( (res:boolean) => {
            this.setState({mobile:res});
        })
    }

    render() {
        return (
            <div
                id="workPage"
                style={{backgroundColor:"black"}}
                className={"row"}
            >
                    <div className={"col-md-3 col-sm-12"}>
                        <div className="card cardMinHeight">
                            <div className="view">
                                <a href="#">
                                    <div className="mask rgba-white-slight"/>
                                </a>
                            </div>
                            <div className="card-body elegant-color white-text d-flex justify-content-center align-items-center">
                                <div className={"text-center"}>
                                    <h4 className="card-title yellow-text display-4">Work</h4>
                                    <p className="card-text white-text custom-font">Alex Caligari specializes in black and grey tattoos, with a big focus on realism and portraits.</p>
                                    <a href="#" className="btn btn-outline-white btn-md waves-effect">View full gallery</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-md-3 col-sm-12 "}>
                        <div className={"parent"} >
                            <div className={"child cardMinHeight"} >
                                <div className={"card-image"}>
                                    <div
                                        className={"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4"}
                                    >
                                        <div>
                                            <h5 className="grey-text"><i className={"fas fa-chart-pie"}/> Marketing</h5>
                                            <h3 className={"card-title pt-2"}><strong>This is the card title</strong></h3>
                                            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat,
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
                    <div className={"col-md-3 col-sm-12 "}>
                        <div className={"parent "} >
                            <div className={"child cardMinHeight"} >
                                <div className={"card-image"}>
                                    <div
                                        className={"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4"}
                                    >
                                        <div>
                                            <h5 className="grey-text"><i className={"fas fa-chart-pie"}/> Marketing</h5>
                                            <h3 className={"card-title pt-2"}><strong>This is the card title</strong></h3>
                                            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat,
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
                    <div className={"col-md-3 col-sm-12 "}>
                        <div className={"parent "} >
                            <div className={"child cardMinHeight"} >
                                <div className={"card-image"}>
                                    <div
                                        className={"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4"}
                                    >
                                        <div>
                                            <h5 className="grey-text"><i className={"fas fa-chart-pie"}/> Marketing</h5>
                                            <h3 className={"card-title pt-2"}><strong>This is the card title</strong></h3>
                                            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat,
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
                    <div className={"col-md-3 col-sm-12 "}>
                        <div className={"parent "} >
                            <div className={"child cardMinHeight"} >
                                <div className={"card-image"}>
                                    <div
                                        className={"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4"}
                                    >
                                        <div>
                                            <h5 className="grey-text"><i className={"fas fa-chart-pie"}/> Marketing</h5>
                                            <h3 className={"card-title pt-2"}><strong>This is the card title</strong></h3>
                                            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat,
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
                    <div className={"col-md-3 col-sm-12 "}>
                        <div className={"parent "} >
                            <div className={"child cardMinHeight"} >
                                <div className={"card-image"}>
                                    <div
                                        className={"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4"}
                                    >
                                        <div>
                                            <h5 className="grey-text"><i className={"fas fa-chart-pie"}/> Marketing</h5>
                                            <h3 className={"card-title pt-2"}><strong>This is the card title</strong></h3>
                                            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat,
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
                    <div className={"col-md-3 col-sm-12 "}>
                        <div className={"parent "} >
                            <div className={"child cardMinHeight"} >
                                <div className={"card-image"}>
                                    <div
                                        className={"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4"}
                                    >
                                        <div>
                                            <h5 className="grey-text"><i className={"fas fa-chart-pie"}/> Marketing</h5>
                                            <h3 className={"card-title pt-2"}><strong>This is the card title</strong></h3>
                                            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat,
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
                    <div className={"col-md-3 col-sm-12 "}>
                        <div className={"parent "} >
                            <div className={"child cardMinHeight"} >
                                <div className={"card-image"}>
                                    <div
                                        className={"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4"}
                                    >
                                        <div>
                                            <h5 className="grey-text"><i className={"fas fa-chart-pie"}/> Marketing</h5>
                                            <h3 className={"card-title pt-2"}><strong>This is the card title</strong></h3>
                                            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat,
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
        );
    }

}

interface MyProps {

}

interface MyState {
    mobile: boolean;
}
