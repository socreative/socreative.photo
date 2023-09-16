import dynamic from 'next/dynamic';
import Head from 'next/head';
import Footer from '../src/layout/Footer';
import Layout from '../src/layout/Layout';
import PageTitle from '../src/layout/PageTitle';
const LandscapeGallery = dynamic(
  () => import('../src/components/LandscapeGallery'),
  {
    ssr: false,
  }
);
const Gallery3Column = () => {
  return (
    <Layout>
      <Head>
        <title>
          Landscape photographer, Dorset photography workshops - Socreative Photography
        </title>
        <meta
          name="description"
          content="Landscape photographer in Dorset. Dorset Landscape photography workshops"
          key="desc"
        />
        <meta name="keywords" content="Dorset landscape photographer, Dorset photography workshops, Dorset photography" />
        <meta property="og:title" content="Landscape photographer, Dorset photography workshops" />
        <meta property="og:description" content="Dorset landscape photographer, Dorset landscape photography workshops" />
        <meta property="og:image" content="https://socreativephoto.com/assets/images/photos/landscape/durdle-door.jpg" />
      </Head>
      <div className="wrapper">
        {/* Section Started Heading */}
        <PageTitle title="Landscapes" />
        {/* Section Works */}
        <LandscapeGallery />
      </div>
      <Footer />
    </Layout>
  );
};
export default Gallery3Column;
