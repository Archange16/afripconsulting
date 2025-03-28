"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../../common/breadcrumb";
import ServicesMain from "./services";
import WorkArea from "../../home/work";
import Testimonial from "../../home/testimonial";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import FooterTwo from "@/components/layout/footers/footer-two";

const ServicePage = () => {
    return (
        <>
            <SEO pageTitle="Our Services" />
            <HeaderOne />
            <BreadCrumb title="Our Services" innerTitle="Our Services" />
            <ServicesMain />
            <WorkArea />
            <Testimonial />
            <FooterTwo />
            <ScrollToTop />
        </>
    );
};

export default ServicePage;