import { Outlet } from 'react-router-dom';
const SharedProjectLayout = () => {
  return (
    <>
      <h2 id="project-heading">My Recnet Works</h2>
      <Outlet />
    </>
  );
};
export default SharedProjectLayout;
