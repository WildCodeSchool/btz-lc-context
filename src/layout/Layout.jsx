import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import { Container } from 'reactstrap';

import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Container>{children}</Container>
      <ToastContainer position="bottom-center" autoClose={2000} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
