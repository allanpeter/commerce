/* eslint-disable @typescript-eslint/ban-ts-comment */
import Header from './Header';
import Footer from './Footer';
//@ts-ignore
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
}; 

export default Layout;
