"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../../common/breadcrumb";
import BlogGridMain from "./blog-grid";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import FooterTwo from "@/components/layout/footers/footer-two";
import HeaderFour from "@/components/layout/headers/header/header-four";


const BlogGrid = () => {
    return (
        <>
            <SEO pageTitle='Blog Grid' />
            <HeaderFour />
            <BreadCrumb title="Blog Grid" innerTitle="Blog Grid" />
            <BlogGridMain />
            <FooterTwo />
            <ScrollToTop />
        </>
    );
};

export default BlogGrid;