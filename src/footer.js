import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export default class Footer extends Component{
  render(){
    return(
      <footer>
        <Grid fluid="true">
          <Row>
            <Col className="footer-brand" xs={12} md={6}>
                <h2>Bombayworks</h2>
            </Col>
          </Row>
        </Grid>
      </footer>
    );
  }
}
