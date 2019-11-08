import React from 'react';
import { isMobile } from '../../services/mobile';
import './box.css';

export default class DetailBox extends React.Component<MyProps,MyState> {

    constructor(props: MyProps) {
        super(props);
        this.state = {
            mobile: false
        };
    }

    componentDidMount(): void {
        isMobile().then( (res: boolean) => {
            this.setState({mobile: res});
        })
    }


    render() {
        return (

            <div className="d-flex flex-column ">
                <div className="d-flex flex-column"
                     style={{fontSize: this.state.mobile ? "x-small": "large"}}
                >
                    <div className="d-flex flex-row">
                        <i className="fas fa-male pt-1"/>
                        <span className="mx-2">Alex Caligari</span>
                        <i className="far fa-clock pt-1"/>
                        <span className="mx-2">{this.props.boxDate}</span>
                    </div>
                    {this.props.hover ?
                        <div className={"lineDraw"}/>
                        : <div className={"beforeDrawLine"}/>}
                </div>
                <span className="text-left yellow-text font-weight-bold"
                    style={{fontSize: this.state.mobile ? "medium": "x-large"}}
                >
                    {this.props.boxTitle}
                </span>
            </div>
        );
    }

}


interface MyProps {
    boxTitle: string;
    boxDate: string;
    hover: boolean;
}

interface MyState {
    mobile: boolean;
}
