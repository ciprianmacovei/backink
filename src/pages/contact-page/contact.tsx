import React from 'react';
import { toast } from "react-toastify";
import { isMobile } from "../../services/mobile";
import { MDBBtn, MDBInput } from "mdbreact";

import './contact.css';

interface MyState {
    mobile: boolean;
    name: string;
    subject: string;
    email: string;
    text: string;
}

interface MyProps {

}

export default class ContactPage extends React.Component<MyProps,MyState> {

    constructor(props: MyProps) {
        super(props);
        this.state = {
            mobile: false,
            name: 'Name',
            subject: 'Subject',
            email: 'email@example.com',
            text: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(): void {
        isMobile().then( (res:boolean) => {
            this.setState({mobile:res});
        })
    }

    handleSubmit(event: any) {
        const xhr = new XMLHttpRequest();
        const self = this;
        xhr.open('POST', 'http://localhost:5000/email', true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.responseType = 'json';
        let obj = {
            ...this.state
        };
        xhr.send(JSON.stringify(obj));
        xhr.onload = function() {
            let responseObj = xhr.response;
            console.log(responseObj, "@@@@@@@@@@@@@@");
            if (responseObj.data) {
              toast.success("You have succesfully send a email! Thank you!",
                {className: 'dark-toaster'});
            }
        };
        event.preventDefault();
    }

    handleChange(event: any, name: string) {
        let obj: any = {};
        obj[name] = event.target.value;
        this.setState(obj);
    }

    render() {
        return (
            <div id="contactPage"
                 className="d-flex flex-column justify-content-center custom-font row"
                 style={{backgroundColor:"black",height: this.state.mobile ? 'auto' : '100vh'}}
            >
                <div className="mt-100">
                    <div className="row" style={{marginRight:"0"}}>
                        <div className="col-md-5 offset-md-2 col-sm-12">
                            <div className="d-flex flex-column">
                                <h5 className="white-text display-4">Contact Me</h5>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <MDBInput
                                    label="Name"
                                    size="sm"
                                    onChange={(e) => this.handleChange(e,'name')}
                                    value={this.state.name}/>
                                <div className="md-form input-group">
                                    <input type="text" className="form-control"
                                           onChange={(e) => this.handleChange(e,'email')}
                                           value={this.state.email}
                                    />
                                    <input type="text" className="form-control"
                                           onChange={(e) => this.handleChange(e,'subject')}
                                           value={this.state.subject}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="comment" id="textLabel">Text:</label>
                                    <textarea className="form-control" onChange={(e) => this.handleChange(e,'text')} value={this.state.text} id="comment"/>
                                </div>
                                <MDBBtn type="submit" outline color="warning" style={{width:"100%",margin:"0"}}>Send</MDBBtn>
                            </form>
                        </div>

                        <div className="col-md-2 offset-md-1 col-sm-12 white-text">
                            <div className="d-flex flex-column mb-5">
                                <div className="row">
                                    <i className="fas fa-map-marker-alt mr-4 yellow-text col-2" style={{fontSize:"40px"}}/>
                                    <div className="d-flex flex-column col-6">
                                        <h5>Address</h5>
                                        <p>Batiște Str. 1-3, București, RO</p>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-column mb-5">
                                <div className="row">
                                    <i className="fas fa-phone-alt mr-4 yellow-text col-2" style={{fontSize:"40px"}}/>
                                    <div className="d-flex flex-column col-6">
                                        <h5>PHONE</h5>
                                        <p>Black Ink Studio</p>
                                        <p>(+4) 0726.803.369</p>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-column mb-5">
                                <div className="row">
                                    <i className="fas fa-envelope mr-4 yellow-text col-2" style={{fontSize:"40px"}}/>
                                    <div className="d-flex flex-column col-6">
                                        <h5>E-MAIL</h5>
                                        <p>Business inquiries:</p>
                                        <p>Alex Caligari</p>
                                        <p>Bookings:</p>
                                        <p>contact@blackinkstudio.ro</p>
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
