import { useContext, useEffect, useState } from 'react';
import Axios from 'axios';
import { Button, Jumbotron, Row } from 'reactstrap';

import authContext from '../contexts/Auth';

const Profile = () => {
  const [user, setUser] = useState({});
  const { setAvatar } = useContext(authContext);

  useEffect(() => {
    Axios.get('https://reqres.in/api/users/3').then((res) => {
      setUser(res.data.data);
      setAvatar(res.data.data.avatar);
    });
  }, []);

  return (
    <Row>
      <Jumbotron>
        <img src={user.avatar} alt={user.email} className="display-3" />
        <p className="lead">
          {user.first_name} {user.last_name}
        </p>
        <hr className="my-2" />
        <p>{user.email}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quam
          consectetur, vero magni modi ullam quos aspernatur cum numquam beatae?
        </p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </Row>
  );
};

export default Profile;
