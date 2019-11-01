import React, { Component } from 'react';
import axios from 'axios';
import { 
  Row, 
  Col,
  Form,
  FormText, 
  FormGroup, 
  Label, 
  Input, 
  Jumbotron, 
  Button 
} from 'reactstrap';

class FormComponent extends Component {
  state = {
    availableTuppersIds: [],
    formData: {
      account:'',
      selectedId:'',
      loansdate:'',
      returndate:'',
    }
  }
  getAvailableTuppers() {
    axios.get('/tuppers/available').then(({ data }) => {
      this.setState(data);
    });
  }
  componentDidMount() {
    this.getAvailableTuppers();
  }
  render() {
    const { availableTuppersIds } = this.state;
    return (
      <Jumbotron>
        <h3>Prestar tupper</h3>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label>
                  Cuenta institucional: 
                </Label>
                <Input />
                <FormText color="muted"> (sin @ucaribe.edu.mx) </FormText>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup >
              <Label>Selecciona el ID del tupper a prestar: </Label>
              <Input type="select">
                {
                  availableTuppersIds.length ? availableTuppersIds.map((id) =>
                  <option key={id} value={id}>Tupper #{id} </option>
                  ) : <option value={0}>No hay tuppers disponibles </option>
                }
              </Input>
              </FormGroup>
            </Col>

          </Row>
          <Col md={{size:2,offset:10}}>
            <Button color="success">Prestar</Button>
          </Col>
        </Form>
      </Jumbotron>

    );
  }
}
export default FormComponent;