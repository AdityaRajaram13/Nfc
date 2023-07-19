import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import UserProfile from '../Components/Dashboards/UserProfile';

const Layout = () => {
    return (
      <div className="flex flex-col h-screen">
        <div className="fixed top-0 w-full z-10">
          <Navbar />
        </div>
        <div className="flex flex-grow">
          <div className="fixed left-0 top-0 h-screen">
            <Sidebar />
          </div>
          <div className="flex-grow flex flex-col overflow-hidden">
            <div className="flex-shrink-0">
              <div className="absolute top-16 right-0">
                <UserProfile />
              </div>
            </div>
            <div className="flex-grow overflow-y-auto">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  
  
export default Layout;