import { Outlet } from 'react-router-dom';
import BottomMenu from './BottomMenu';

const Layout = () => {
  return (
    <>
      <Outlet />
      <BottomMenu />
    </>
  );
};

export default Layout;
