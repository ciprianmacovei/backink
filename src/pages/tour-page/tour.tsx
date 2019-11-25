import React from 'react';
import DetailBox from "../../components/detailBox/box";
import { pageSpacingsAndBackground } from "../../services/background";
import { isMobile } from "../../services/mobile";

export default class TourPage extends React.Component<MyProps,MyState> {

  constructor(props: MyProps) {
    super(props);
    this.state = {
      mobile: false,
      isHovered1: false,
      isHovered2: false,
      isHovered3: false,
    };

    this.handleMouseHover = this.handleMouseHover.bind(this);
  }

  handleMouseHover(stateKey: string): void {
    this.setState({
      [stateKey]: !this.state[stateKey]
    });
  }


  componentDidMount(): void {
    isMobile().then( (res:boolean) => {
      this.setState({mobile:res});
    })
  }

  render() {
    return (

      <div className={"row d-flex justify-content-center"}
           id="tourPage"
           style={pageSpacingsAndBackground('black','black', this.state.mobile)}
      >
          <p className={'text-center yellow-text display-4 mb-50 col-12'}>TOUR</p>
            <div className={"col-md-4 col-sm-12 "}
                 style={{height: this.state.mobile ? "100%" : "auto", marginBottom: this.state.mobile ? "7px": "auto"}}>
              <div className={"card-image cardHover"}
                   onMouseEnter={() => this.handleMouseHover('isHovered1')}
                   onMouseLeave={() => this.handleMouseHover('isHovered1')}>

                <div id="yourElement"
                     className={"text-white text-center d-flex align-items-center rgba-black-strong py-5 "}
                     style={{height : this.state.mobile ? 'auto' : '660px'}}
                >
                  <div className="align-self-end ">
                    <DetailBox boxTitle={"AMSTERDAM"} boxDate={"December 5,2018"} hover={this.state.isHovered1}/>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={"col-md-4 col-sm-12 " + (this.state.mobile ? "":"colPadding")}
              style={{height: this.state.mobile ? "100%" : "auto"}}
            >
              <div
                className="card card-image cardHover"
                style={{backgroundImage: `url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)`,
                  marginBottom:"7px"}}
                onMouseEnter={() => this.handleMouseHover('isHovered2')}
                onMouseLeave={() => this.handleMouseHover('isHovered2')}>

                <div
                  className="text-white text-center d-flex align-items-center rgba-black-strong py-5"
                  style={{
                    maxHeight: this.state.mobile ? 'none':'327.5px',
                    minHeight: this.state.mobile ? 'none':'327.5px',
                  }}>
                  <div className="align-self-end ">
                    <DetailBox boxTitle={"AMSTERDAM"} boxDate={"December 5,2018"} hover={this.state.isHovered2}/>
                  </div>
                </div>
              </div>

              <div className="card card-image cardHover"
                   style={{backgroundImage: `url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)`}}>
                <div
                  className="text-white text-center d-flex align-items-center rgba-black-strong py-5 "
                  style={{
                    maxHeight: this.state.mobile ? 'none':'327.5px',
                    minHeight: this.state.mobile ? 'none':'327.5px',
                  }}
                  onMouseEnter={() => this.handleMouseHover('isHovered3')}
                  onMouseLeave={() =>this.handleMouseHover('isHovered3')}>

                  <div className="align-self-end ">
                    <DetailBox boxTitle={"AMSTERDAM"} boxDate={"December 5,2018"} hover={this.state.isHovered3}/>
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
  isHovered1: boolean;
  isHovered2: boolean;
  isHovered3: boolean;
  [key: string]: boolean;
}
