"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../common/breadcrumb";
import AboutMain from "./about";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FooterTwo from "@/components/layout/footers/footer-two";
import HeaderFour from "@/components/layout/headers/header/header-four";
import About from "@/app/about/page";

const AboutUs = () => {
    return (
      <>
        <SEO pageTitle="About Us" />
        <HeaderFour />
        <BreadCrumb title="About Us" innerTitle="Company About" />
        <AboutMain />
        <FooterTwo />        
        <ScrollToTop />
      </>
    );
};

export default AboutUs;