import Navbar from '../Pages/Navbar';
import Banner from '../Pages/banner';
import Footer from '../Pages/Footer';
import DiscoverFeatured from '../Pages/DiscoverFeatured';
import ApartmentTypes from '../Pages/ApartmentTypes';
import Realtor from '../Pages/Realtor';
import ApartmentCard from '../Pages/ApartmentCard';
import BuySell from '../Pages/BuySell';
import Comment from '../Pages/Comment';
import Trusted from '../Pages/Trusted';
import BestDeal from '../Pages/BestDeal';
import OurBlog from '../Pages/OurBlog';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <DiscoverFeatured></DiscoverFeatured>
            <ApartmentTypes></ApartmentTypes>
            <Realtor></Realtor>
            <ApartmentCard></ApartmentCard>
            <BuySell></BuySell>
            <Comment></Comment>
            <BestDeal></BestDeal>
            <OurBlog></OurBlog>
            <Trusted></Trusted>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;