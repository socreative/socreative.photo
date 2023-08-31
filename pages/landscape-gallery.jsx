import dynamic from "next/dynamic";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";
const LandscapeGallery3 = dynamic(
  () => import("../src/components/LandscapeGallery3"),
  {
    ssr: false,
  }
);
const Gallery3Column = () => {
  return (
    <Layout>
      <div className="wrapper">
        {/* Section Started Heading */}
        <PageTitle title="Landscapes" />
        {/* Section Works */}
        <LandscapeGallery3 />
      </div>
      <Footer />
    </Layout>
  );
};
export default Gallery3Column;
