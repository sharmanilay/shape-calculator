import React, {Component} from 'react';
import {Grid, Row, Col,Image,Form,FormGroup, Radio,Button} from 'react-bootstrap';
import Lorem from './lorem.js'
import Rectangle from './shapes/rectangle.js'
import Circle from './shapes/circle.js'
import Square from './shapes/square.js'
import Ellipse from './shapes/ellipse.js'
import ad from './images/ad.png';


export default class MainContent extends Component{
  constructor(props){
    super(props);
    this.state = {
      step : 1,
      shape : "Rectangle",
      area: 0,
      showText: ""
    }
    this.step1 = this.step1.bind(this);
    this.step2 = this.step2.bind(this);
    this.step3 = this.step3.bind(this);
    this.shapeVariables = this.shapeVariables.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }
  step1(){
    this.setState({
      step : 1,
    })
  }
  step2(){
    this.setState({
      step: 2,
    })
  }
  step3(ar){
    let are =ar;
    console.log(ar);
    this.setState({
      area: are
    });
    console.log(this.state.area);
  }
  shapeVariables(){
    let returnForm;
    if(this.state.shape==="Rectangle"){
      returnForm =   <Rectangle cancel={this.step1} carea={(are,text)=>{this.setState({
        step: 3,
        area: are,
        text: text
      })}} />;
    }else if(this.state.shape==="Circle"){
      returnForm = <Circle cancel={this.step1} carea={(are,text)=>{this.setState({
        step:3,
        area: are,
        text: text
      })}} />;
    }else if(this.state.shape==="Square"){
      returnForm = <Square cancel={this.step1} carea={(are,text)=>{this.setState({
        step:3,
        area: are,
        text: text
      })}} />;
    }else if(this.state.shape==="Ellipse"){
      returnForm = <Ellipse cancel={this.step1} carea={(are,text)=>{this.setState({
        step:3,
        area: are,
        text: text
      })}} />;
    }
    return returnForm;
  }
  handleOptionChange(e){
    this.setState({
      shape: e.target.value
    })
  }

  render(){
    const step = this.state.step;
    let mainForm;
    if(step===1){
      mainForm =    <FormGroup>
                    <h3>Step 1: Select Your Shape</h3>
                    <p>
                      Please select the shape that you would like
                      to calculate the area of and press the
                      button "Go to step 2"
                    </p>
                        <Radio  className="radio-group" value="Rectangle" onChange={this.handleOptionChange} checked={this.state.shape==="Rectangle"}  name="radioGroup">
                          Rectangle
                        </Radio>{' '}
                        <Radio className="radio-group" value="Circle" onChange={this.handleOptionChange} checked={this.state.shape==="Circle"} name="radioGroup">
                          Circle
                        </Radio>{' '}
                        <Radio className="radio-group" value="Square" onChange={this.handleOptionChange} checked={this.state.shape==="Square"} name="radioGroup">
                          Square
                        </Radio>
                        <Radio className="radio-group" value="Ellipse" onChange={this.handleOptionChange} checked={this.state.shape==="Ellipse"} name="radioGroup">
                          Ellipse
                        </Radio>{' '}
                        <Button className="ani" onClick={this.step2}>Go to step {this.state.step+1}</Button>
                        <Button className="ani" onClick={this.step1}>Cancel</Button>
                      </FormGroup>;
    }else if(step===2){
      mainForm = <FormGroup>
                    <h3>Step 2: Insert your values</h3>
                    <p>
                      You have selected a <b>{this.state.shape.toLowerCase()}</b>. Please enter the variables required.
                    </p>
                    <this.shapeVariables />
                  </FormGroup>;
    }else if(step===3){
        mainForm = <FormGroup>
                      <h3>Step 3: Calculated area</h3>
                      <p>You have calculated the area of a <b>{this.state.shape}</b> with
                        {this.state.text}
                      </p>
                      <p className="result">The area is {this.state.area}</p>
                        <Button className="ani" onClick={this.step1}>Start Over </Button>
                    </FormGroup>;
    }

    return(
      <Grid className="main-div " fluid={true}>
        <Row>
            <Col xs={12} md={6}>
              <Lorem  />
            </Col>
            <Col xs={7} md={4}>
              <div className="main-form">
                <div className="form-wrapper">
                    <Form className="form">
                      {mainForm}
                    </Form>
                </div>
              </div>
            </Col >
            <Col xs={5} md={2}>
                <Image src={ad} alt="ad" />
            </Col>
        </Row>
      </Grid>
    );
  }
}
