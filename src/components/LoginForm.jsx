import { useContext, useEffect, useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { toast } from 'react-toastify';

import authContext from '../contexts/Auth';

const LoginForm = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setToken } = useContext(authContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(null);
    Axios.post('https://reqres.in/api/login', {
      email,
      password,
    })
      .then((res) => {
        setToken(res.data.token);
        toast.success('Login successful !');
        history.push('/profile');
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label for="email" sm={2}>
          Email
        </Label>
        <Col sm={10}>
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="password" sm={2}>
          Password
        </Label>
        <Col sm={10}>
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Col>
      </FormGroup>
      <FormGroup>
        <Button type="submit" color="success" block>
          Login
        </Button>
      </FormGroup>
    </Form>
  );
};

export default LoginForm;
