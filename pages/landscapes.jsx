import Head from 'next/head'
import Footer from '../src/layout/Footer'
import Layout from '../src/layout/Layout'
import PageTitle from '../src/layout/PageTitle'
import MasonryImageGallery from '../src/components/shared/MasonryImageGallery'

const galleryImages = [
  {
    src: 'landscape/durdle-door.jpg',
    alt: 'Durdle Door, Dorset'
  },
  {
    src: 'landscape/london-burning-sky.jpg',
    alt: 'Westminster, London'
  },
  {
    src: 'landscape/lake-district.jpg',
    alt: 'Lake District'
  },
  {
    src: 'landscape/london-canary-wharf.jpg',
    alt: 'London Canary Wharf'
  },
  {
    src: 'landscape/portland-bill.jpg',
    alt: 'Portland Bill'
  },
  {
    src: 'landscape/canary-wharf-blue-hour.jpg',
    alt: 'Canary Wharf'
  },
  {
    src: 'landscape/lake-district-2.jpg',
    alt: 'Lake District'
  },
  {
    src: 'landscape/westminster-1.jpg',
    alt: 'Westminster'
  },
  {
    src: 'landscape/nash-point.jpg',
    alt: 'Nash Point'
  },

  {
    src: 'landscape/Felixstowe_Pier_2.jpg',
    alt: 'Felixstowe'
  },
  {
    src: 'landscape/nash-point-1.jpg',
    alt: 'Nash Point'
  },
  {
    src: 'landscape/london-tower-bridge.jpg',
    alt: 'Tower Bridge'
  },
  {
    src: 'landscape/bournemouth-beach.jpg',
    alt: 'Bournemouth Beach'
  } 
]

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
        <MasonryImageGallery
          images={galleryImages}
        />
      </div>
      <Footer />
    </Layout>
  );
};
export default Gallery3Column;
