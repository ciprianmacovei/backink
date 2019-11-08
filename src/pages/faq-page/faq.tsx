import React from 'react';
import { pageSpacingsAndBackground } from "../../services/background";
import { isMobile } from "../../services/mobile";
import './faq.css';

interface MyProps {
}

interface MyState {
    mobile: boolean;
    faqArray: faqItems[];
}

interface faqItems {
    question: string;
    response: string;
    show: boolean;
}


export default class FaqPage extends React.Component<MyProps,MyState> {

    constructor(props: MyProps) {
        super(props);
        this.state = {
            mobile: false,
            faqArray: [
                {
                    question:"How much does it cost?",
                    response: "All projects are different and can be finished in one or multiple sessions. Pricing is per " +
                        "project divided by number of sessions. Estimates vary per project depending on size, design, placement, " +
                        "skin, and various other conditions. For this reason we do not give estimates. Final figures are determined " +
                        "after the design is created in person.",
                    show: false
                },
                {
                    question:"Why do I have to come in to the shop to get a quote?",
                    response:"There are too many variables to give a quote over the phone or over the internet. The size and" +
                        " placement are important factors in the cost of a tattoo. You should always meet the artist and discuss" +
                        " in detail exactly what you want, because it will be on you, forever.",
                    show: false

                },
                {
                    question:"Can I bring my own design?",
                    response:"Just about any design you can think of can be made into a beautiful tattoo. You are more than " +
                        "welcome to bring in your own design. If you already know what you want, great, it is very simple to " +
                        "convey your idea to the artist. I want my customers to feel comfortable about getting a professional tattoo.\n" +
                        "The easiest way is with a picture. Even if you can’t draw, I love to do the custom work. Just describe" +
                        " it well or even bring in a stick drawing. I can turn it into the tattoo you imagined.",
                    show: false

                },
                {
                    question:"How big does my tattoo have to be?",
                    response:"The size depends on the complexity of the image/text and the area of the body where the tattoo is being " +
                        "placed. In general, tattoos that look big on paper look far smaller in the larger context of your body. " +
                        "I will gladly consult with you to determine the best way to meet your needs and get a tattoo that will " +
                        "survive the test of time.",
                    show: false

                },
                {
                    question:"Do you sell your tattoo designs?",
                    response:"No we do not sell designs. Due to the hands-on nature of each Project, the designs that are " +
                        "created are a part of a collaborative Process relative to each individual client.",
                    show: false
                }
            ]
        }
    }

    showItem(index: number) {
        let newFaqArray = this.state.faqArray;
        newFaqArray[index].show = !newFaqArray[index].show;
        this.setState({
            faqArray: newFaqArray
        })
    }

    componentDidMount(): void {
        isMobile().then( (res:boolean) => {
            this.setState({mobile:res});
        })
    }


    render() {
        return (
            <div id="faqPage"
                 className="d-flex flex-column justify-content-center"
                 style={pageSpacingsAndBackground('none','black', this.state.mobile)}
            >
                <div className="mt-100">
                    <div className="row">
                        <div className="col-md-5 offset-md-2 col-sm-12">
                            <h3 className="yellow-text">FAQ & INFO</h3>
                            <ul className="mt-5">
                                {
                                    this.state.faqArray.map( (el: faqItems, index) =>
                                            el.show ?
                                                <li className="d-flex flex-column liActive pl-5 animated fadeIn" onClick={() => this.showItem(index)}
                                                    key={index}>
                                                    <div className="d-flex flex-row">
                                                        <span className="yellow-text mr-4">{index + 1}</span>
                                                        <p className="yellow-text">{el.question}</p>
                                                    </div>
                                                    <p className="white-text">{el.response}</p>
                                                </li> :
                                                <li className="d-flex flex-column pl-5" onClick={() => this.showItem(index)}
                                                    key={index}>
                                                    <div className="d-flex flex-row">
                                                        <span className="grey-text mr-4">{index + 1}</span>
                                                        <p className="grey-text">{el.question}</p>
                                                    </div>
                                                </li>
                                    )}
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-12">
                            <div className="d-flex flex-column mt-50">
                                <h5 className="yellow-text">Info</h5>
                                <p className="white-text">If you have any other question that isn't covered in the FAQ, feel free to send us a
                                    message using the form or the information provided below.</p>
                                <a href="#" className="yellow-text">Contact me</a>
                            </div>

                            <div className="d-flex flex-column mt-5">
                                <h5 className="yellow-text">Black Ink Studio</h5>
                                <p className="white-text">Alex Caligari is the owner of Black Ink Studio, a tattoo studio located in central Bucharest,
                                    Romania. Opened in 2008, with over 10 years of experience, Black Ink Studio is one of the
                                    best tattoo studios in Bucharest. For scheduling and appointments, please use the forms
                                    and contact info provided on the studios website.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
