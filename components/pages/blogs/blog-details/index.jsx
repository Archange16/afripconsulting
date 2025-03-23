"use client"

import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import BlogSingleMain from "./blog-details";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import FooterTwo from "@/components/layout/footers/footer-two";
import HeaderFour from "@/components/layout/headers/header/header-four";

const BlogDetails = ({singleData}) => {
    const firstThreeWords = singleData?.title.split(' ').slice(0, 3).join(' ') + '...';
    return (
        <>
            <SEO pageTitle={singleData?.title} />
            <HeaderFour />
            <BreadCrumb title={firstThreeWords} innerTitle={singleData?.title} />
            <BlogSingleMain singleData={singleData}/>
            <FooterTwo />
            <ScrollToTop />
        </>
    );
};

export default BlogDetails;