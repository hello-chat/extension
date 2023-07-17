import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <div>Hello-Chat-app</div>
      <Outlet />
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/chat">chat</Link>
        <Link to="/login">login</Link>
        <Link to="/logout">logout</Link>
        <Link to="/settings">settings</Link>
      </nav>
    </div>
  );
};

export default Layout; //
