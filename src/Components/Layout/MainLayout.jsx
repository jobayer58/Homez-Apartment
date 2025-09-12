import Navbar from '../Pages/Navbar';
import Banner from '../Pages/banner';
import Footer from '../Pages/Footer';
import DiscoverFeatured from '../Pages/DiscoverFeatured';
import ApartmentTypes from '../Pages/ApartmentTypes';
import Realtor from '../Pages/Realtor';
import ApartmentCard from '../Pages/ApartmentCard';
import BuySell from '../Pages/BuySell';
import Trusted from '../Pages/Trusted';
import BestDeal from '../Pages/BestDeal';
import OurBlog from '../Pages/OurBlog';
import Testimonials from '../Pages/Testimonials';
import BuyOrSell from '../Pages/BuyOrSell';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <DiscoverFeatured></DiscoverFeatured>
            <ApartmentTypes></ApartmentTypes>
            <Realtor></Realtor>
            <ApartmentCard></ApartmentCard>
            <BuyOrSell></BuyOrSell>
            {/* <BuySell></BuySell> */}
            <Testimonials></Testimonials>
            <BestDeal></BestDeal>
            <OurBlog></OurBlog>
            <Trusted></Trusted>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;