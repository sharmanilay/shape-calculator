import React, {Component} from 'react';
import {FormGroup,Button,FormControl,ControlLabel} from 'react-bootstrap';

export default class Circle extends Component{
  constructor(props){
    super(props);
    this.state = {
      diameter: 0,
      area: 0
    };
    this.handleRadiusChange = this.handleRadiusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getValidationState() {
    const diameter = this.state.diameter;
    if (!isNaN(diameter)){
      return "success";
    }else{
      return "error";
    }
  }
  handleRadiusChange(e){
    let r = e.target.value;
    let ar = Math.PI*r*r;
    ar = ar/4;
    this.setState({
      diameter: e.target.value,
      area: ar,
    })
  }
  handleSubmit(){
    if(this.getValidationState()==="success"){
      let area = this.state.area;
      let text = `a diameter of ${this.state.diameter}. Below is your result:`
      this.props.carea(area, text);
    }
  }
  render(){
    return(
      <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
          <ControlLabel>Diameter</ControlLabel>
          <FormControl
            type="text"
            value={this.state.diameter}
            placeholder="Enter Diameter"
            onChange={this.handleRadiusChange}
          />
          <FormControl.Feedback />

        <Button onClick={this.handleSubmit}>Go to step 3</Button>
        <Button onClick={this.props.cancel}>Cancel</Button>
        </FormGroup>
    );
  }
}
