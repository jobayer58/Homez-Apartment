import Navbar from '../Pages/Navbar';
import Banner from '../Pages/banner';
import Footer from '../Pages/Footer';
import DiscoverFeatured from '../Pages/DiscoverFeatured';
import ApartmentTypes from '../Pages/ApartmentTypes';
import Realtor from '../Pages/Realtor';
import ApartmentCard from '../Pages/ApartmentCard';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <DiscoverFeatured></DiscoverFeatured>
            <ApartmentTypes></ApartmentTypes>
            <Realtor></Realtor>
            <ApartmentCard></ApartmentCard>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;