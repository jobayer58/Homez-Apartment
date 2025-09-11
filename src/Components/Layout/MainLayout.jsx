import Navbar from '../Pages/Navbar';
import Banner from '../Pages/banner';
import Footer from '../Pages/Footer';
import DiscoverFeatured from '../Pages/DiscoverFeatured';
import ApartmentTypes from '../Pages/ApartmentTypes';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <DiscoverFeatured></DiscoverFeatured>
            <ApartmentTypes></ApartmentTypes>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;