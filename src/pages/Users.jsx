import { useContext, useEffect, useState } from 'react';
import Axios from 'axios';
import { Card, CardTitle, Col, Row } from 'reactstrap';

import authContext from '../contexts/Auth';

const Users = () => {
  const [users, setUsers] = useState([]);
  const { token } = useContext(authContext);

  useEffect(() => {
    Axios.get('https://reqres.in/api/users', { token }).then((res) => {
      setUsers(res.data.data);
    });
  }, []);

  return (
    <Row>
      {users.map((user) => {
        return (
          <Col key={user.email}>
            <Card body>
              <CardTitle>{user.email}</CardTitle>
              <img src={user.avatar} alt={user.email} />
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default Users;
