"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../../common/breadcrumb";
import PortfolioDetailsMain from "./portfolio-details";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import FooterTwo from "@/components/layout/footers/footer-two";

const PortfolioDetails = ({singleData}) => {
    return (
        <>
            <SEO pageTitle={singleData?.title} />
            <HeaderOne />
            <BreadCrumb title={singleData?.title} innerTitle={singleData?.title} />
            <PortfolioDetailsMain singleData={singleData} />
            <FooterTwo />
            <ScrollToTop />
        </>
    );
};

export default PortfolioDetails;