import Navbar from '../Pages/Navbar';
import Banner from '../Pages/banner';
import Footer from '../Pages/Footer';
import DiscoverFeatured from '../Pages/DiscoverFeatured';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <DiscoverFeatured></DiscoverFeatured>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;