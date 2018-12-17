import React, {Component} from 'react';
import {FormGroup,Button,FormControl,ControlLabel} from 'react-bootstrap';

export default class Ellipse extends Component{
  constructor(props){
    super(props);
    this.state = {
      length: 0,
      breadth: 0,
      area: 0
    };
    this.handleLengthChange = this.handleLengthChange.bind(this);
    this.handleBreadthChange = this.handleBreadthChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleLengthChange(e){
    let ar = Math.PI*this.state.breadth*e.target.value;
    this.setState({
      length: e.target.value,
      area: ar,
    })
  }
  handleBreadthChange(e){
    let ar = Math.PI*this.state.length*e.target.value;
    this.setState({
      breadth: e.target.value,
      area: ar
    })
  }
  getValidationState() {
    const length = this.state.length;
    const breadth = this.state.breadth;
    if (!isNaN(length) && !isNaN(breadth)){
      return "success";
    }else{
      return "error";
    }
  }
  getLengthValidation(){
    const length = this.state.length;
    if (!isNaN(length)){
      return "success";
    }else{
      return "error";
    }
  }
  getBreadthValidation(){
    const breadth = this.state.breadth;
    if (!isNaN(breadth)){
      return "success";
    }else{
      return "error";
    }
  }
  handleSubmit(){
    if(this.getValidationState()==="success"){
      let area = this.state.area;
      let text = ` x-axis of ${this.state.length} and y-axis of ${this.state.breadth}. Below is your result:`
      console.log(area);
      this.props.carea(area,text);
    }
  }
  render(){
    return(
      <div>
      <FormGroup controlId="formBasicText" validationState={this.getLengthValidation()}>
          <ControlLabel>X-axis</ControlLabel>
          <FormControl
            type="text"
            value={this.state.length}
            placeholder="Enter Length"
            onChange={this.handleLengthChange}
          />
          <FormControl.Feedback />
      </FormGroup>
      <FormGroup controlId="breadth" validationState={this.getBreadthValidation()}>
      <ControlLabel>Y-axis</ControlLabel>
      <FormControl
        type="text"
        value={this.state.breadth}
        placeholder="Enter text"
        onChange={this.handleBreadthChange}
      />
      <FormControl.Feedback />
      </FormGroup>
      <Button onClick={this.handleSubmit}>Go to step 3</Button>
      <Button onClick={this.props.cancel}>Cancel</Button>
      </div>
    );
  }
}
