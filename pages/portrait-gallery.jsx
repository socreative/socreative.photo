import Head from 'next/head'
import Footer from '../src/layout/Footer'
import Layout from '../src/layout/Layout'
import PageTitle from '../src/layout/PageTitle'
import PortraitGallery from '../src/components/galleries/PortraitGallery'

const Gallery3Column = () => {
  return (
    <Layout>
      <Head>
        <title>
          Portrait photographer, Dorset portrait photography workshops - Socreative Photography
        </title>
        <meta
          name="description"
          content="Portrait photographer in Dorset. Dorset portrait photography workshops"
          key="desc"
        />
        <meta name="keywords" content="Dorset portrait photographer, Dorset photography workshops, Dorset photography" />
        <meta property="og:title" content="Dorset photographer, Dorset photography workshops" />
        <meta property="og:description" content="Dorset landscape photographer, Dorset landscape photography workshops" />
        <meta property="og:image" content="https://socreativephoto.com/assets/images/photos/landscape/durdle-door.jpg" />
      </Head>
      <div className="wrapper">
        {/* Section Started Heading */}
        <PageTitle title="Portraits" />
        {/* Section Works */}
        <PortraitGallery />
      </div>
      <Footer />
    </Layout>
  );
};
export default Gallery3Column;