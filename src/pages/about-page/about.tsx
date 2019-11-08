import React from 'react';
import { pageSpacingsAndBackground } from '../../services/background';
import { isMobile } from "../../services/mobile";

export default class AboutPage extends React.Component<MyProps,MyState> {

    constructor(props: MyProps) {
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

    render() {
        return (
            <div className={"row"}
                 id="aboutPage"
                 style={pageSpacingsAndBackground(`url(http://alexcaligari.com/wp-content/uploads/2018/05/funeral-home-pattern-cross.png)`,'rgba(0,0,0,0.94)',this.state.mobile)}
            >
                <div className={(this.state.mobile ? "blackBackground" : "gradientBackground") + " col-sm-12"}>
                    <div className={"mt-50"}>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 offset-md-2 mt-100">
                                <img src="http://alexcaligari.com/wp-content/uploads/2018/12/caligari_about.jpg" className="img-fluid" alt={"backgroundImg"}/>
                            </div>
                            <div className={"col-sm-12 col-md-4 mt-100 " + (this.state.mobile ? 'text-center' : 'text-right')}>
                                <h1 className="mb-2 grey-text col-sm-12" style={{margin:"0"}}>ABOUT ALEX CALIGARI</h1>
                                <h3 className="mb-3 yellow-text col-sm-12">Black & Gray Realism</h3>
                                <h4 className="mt-5 grey-text col-sm-12 fontMediul">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum</h4>
                                <button type="button" className={" btn-lg btn-outline-light waves-effect my-2 " + (this.state.mobile ? "" : "mr-3")}>
                                    Read more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

interface MyState {
    mobile: boolean;
}

interface MyProps {

}

