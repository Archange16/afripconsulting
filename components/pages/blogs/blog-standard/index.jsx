"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import BlogStandardMain from "./blog-standard";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import FooterTwo from "@/components/layout/footers/footer-two";
import HeaderFour from "@/components/layout/headers/header/header-four";


const BlogStandardPage = () => {
    return (
        <>
            <SEO pageTitle='Blog Standard' />
            <HeaderFour />
            <BreadCrumb title="Blog Standard" innerTitle="Blog Standard" />
            <BlogStandardMain />
            <FooterTwo/>
            <ScrollToTop />
        </>
    );
};

export default BlogStandardPage;