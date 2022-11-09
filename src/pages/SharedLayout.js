import { Outlet } from 'react-router-dom';
// import Navbar from '../components/StyledNavbar';
import StyledNavbar from '../components/StyledNavbar';
import StyledFooter from '../components/StyledFooter';
const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
      <StyledFooter />
    </>
  );
};
export default SharedLayout;
