import Head from 'next/head'
import Footer from '../src/layout/Footer'
import Layout from '../src/layout/Layout'
import PageTitle from '../src/layout/PageTitle'
import MasonryImageGallery from '../src/components/shared/MasonryImageGallery'

const galleryImages = [
  {
    src: 'fashion/under-1.jpg',
    alt: 'underwear fashion'
  },
  {
    src: 'fashion/urban-fitness-fashion.jpg',
    alt: 'urban fitness fashion'
  },
  {
    src: 'fashion/bou-1.jpg',
    alt: 'studio fashion'
  },
  {
    src: 'fashion/west-1.jpg',
    alt: 'city - fashion'
  },
  {
    src: 'fashion/kew-1.jpg',
    alt: 'Kew - fashion'
  },
  {
    src: 'fashion/kew-2.jpg',
    alt: 'fashion editorial'
  },
  {
    src: 'fashion/isa-1.jpg',
    alt: 'fashion editorial'
  },
  {
    src: 'fashion/blue-case.jpg',
    alt: 'studio fashion'
  },
  {
    src: 'fashion/laura-22.jpg',
    alt: 'Urban fashion'
  },
  {
    src: 'fashion/rich.jpg',
    alt: 'bikini fashion'
  },
  {
    src: 'fashion/laura-23.jpg',
    alt: 'fashion editorial'
  },
  {
    src: 'fashion/kew-3.jpg',
    alt: 'fashion editorial'
  },
  {
    src: 'fashion/debbie-2.jpg',
    alt: 'boudoir fashion'
  },
]



const Gallery3Column = () => {
  return (
    <Layout>
      <Head>
        <title>
          Fashion photographer, Dorset photography workshops - Socreative Photography
        </title>
        <meta
          name="description"
          content="Fashino photographer in Dorset. Dorset photography workshops"
          key="desc"
        />
        <meta name="keywords" content="Dorset fashion photographer, Dorset photography workshops, Dorset photography" />
        <meta property="og:title" content="Dorset photographer, Dorset photography workshops" />
        <meta property="og:description" content="Dorset landscape photographer, Dorset landscape photography workshops" />
        <meta property="og:image" content="https://socreativephoto.com/assets/images/photos/landscape/durdle-door.jpg" />
      </Head>
      <div className="wrapper">
      
        {/* Section Started Heading */}
        <PageTitle title="Fashion" />
        <MasonryImageGallery
          images={galleryImages}
        />
        
      </div>
      <Footer />
    </Layout>
  );
};
export default Gallery3Column;
