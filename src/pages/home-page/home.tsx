// @ts-ignore
import React from 'react';
import { pageSpacingsAndBackground } from "../../services/background";
import { isMobile } from "../../services/mobile";

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

    render() {

        return (
            <div className="container-fluid">
                <div className={"row mask d-flex justify-content-center align-items-center"}
                     style={pageSpacingsAndBackground(`url(http://alexcaligari.com/wp-content/uploads/2018/05/funeralhome-rose-bg.jpg)`,'noNeed')}
                >
                    <div className="text-center">
                        <p className={"yellow-text "+ (this.state.mobile ? "display-3":"display-2")} >ALEX CALIGARI</p>
                        <p className="mt-4 fontFamily display-3 grey-text">Tattoo artist based in Bucharest, Romania</p>
                        <a href="#aboutPage" className={"d-flex justify-content-center"}>
                            <div className={"d-flex flex-column btn-group-home-page"}>
                                <button type="button" className="btn btn-outline-light waves-effect mt-5 p-2">
                                    Find out more
                                </button>
                                <i className="fas fa-arrow-down faArrow yellow-text"/>
                            </div>
                        </a>
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


