"use client";
import SEO from "@/components/data/seo";
import HeaderFour from "@/components/layout/headers/header/header-four";
import FooterFour from "@/components/layout/footers/footer-four";
import BannerFour from "./banner";
import AboutFour from "./about";
import ChooseFour from "./choose";
import Tab from "./tab/tab";
import Video from "./video";
import BlogFour from "./blog";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import ServicesFour from "./services";
import Portfoliofour from "./portfolio";
import FaqFour from "./faq";

const HomeFour = () => {
    return (
        <div>
            <SEO pageTitle='Afrip consulting' />
            <HeaderFour />
            <BannerFour />
            <AboutFour />
            <ServicesFour />
            <Portfoliofour />
            <ChooseFour />
            <FaqFour/>
            <Video />
            <Tab />
            <BlogFour />
            <FooterFour />
            <ScrollToTop />
        </div>
    );
};

export default HomeFour;