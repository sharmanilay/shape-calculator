import React, {Component} from 'react';
import {FormGroup,Button,FormControl,ControlLabel} from 'react-bootstrap';

export default class Square extends Component{
  constructor(props){
    super(props);
    this.state = {
      length: 0,
      area: 0
    };
    this.handleLengthChange = this.handleLengthChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getValidationState() {
    const length = this.state.length;
    if (!isNaN(length)){
      return "success";
    }else{
      return "error";
    }
  }
  handleLengthChange(e){
    let l = e.target.value;
    let ar = l*l;
    this.setState({
      length: e.target.value,
      area: ar,
    })
  }
  handleSubmit(){
    if(this.getValidationState()==="success"){
      let area = this.state.area;
      let text = ` length of ${this.state.length}. Below is your result:`
      this.props.carea(area,text);
    }
  }
  render(){
    return(
      <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
          <ControlLabel>Length</ControlLabel>
          <FormControl
            type="text"
            value={this.state.length}
            placeholder="Enter text"
            onChange={this.handleLengthChange}
          />
          <FormControl.Feedback />
        <Button className="ani" onClick={this.handleSubmit}>Go to step 3</Button>
        <Button className="ani" onClick={this.props.cancel}>Cancel</Button>
        </FormGroup>
    );
  }
}
