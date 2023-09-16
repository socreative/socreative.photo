import Head from 'next/head'
import Footer from '../src/layout/Footer'
import Layout from '../src/layout/Layout'
import PageTitle from '../src/layout/PageTitle'
import MasonryImageGallery from '../src/components/shared/MasonryImageGallery'

const galleryImages = [
  {
    src: 'portrait/lena.jpg',
    alt: 'Lena'
  },
  {
    src: 'portrait/ina-1.jpg',
    alt: 'Ina'
  },
  {
    src: 'portrait/Carmelle_2.jpg',
    alt: 'Carmelle'
  },
  {
    src: 'portrait/dovile-1.jpg',
    alt: 'Dovile'
  },
  {
    src: 'portrait/red_dress_1.jpg',
    alt: 'Red dress'
  },
  {
    src: 'portrait/dovile-2.jpg',
    alt: 'Dovile'
  },
  {
    src: 'portrait/milly_pier_2.jpg',
    alt: 'Milly'
  },
  {
    src: 'portrait/urban-fitness-1.jpg',
    alt: 'Urban fitness'
  },
  {
    src: 'portrait/urban-fitness-2.jpg',
    alt: 'Urban fitness'
  },
  {
    src: 'portrait/laura-2-sc.jpg',
    alt: 'Laura'
  },
  {
    src: 'portrait/dovile-3.jpg',
    alt: 'Dovile'
  },
  {
    src: 'portrait/mia.jpg',
    alt: 'Mia'
  },
]

const Gallery3Column = () => {
  return (
    <Layout>
      <Head>
        <title>
          Portrait photographer, Dorset portrait photography workshops - Socreative Photography
        </title>
        <meta
          name="description"
          content="Glamour photographer in Dorset. Dorset glamour photography workshops"
          key="desc"
        />
        <meta name="keywords" content="Dorset portrait photographer, Dorset photography workshops, Dorset photography" />
        <meta property="og:title" content="Dorset photographer, Dorset photography workshops" />
        <meta property="og:description" content="Dorset landscape photographer, Dorset landscape photography workshops" />
        <meta property="og:image" content="https://socreativephoto.com/assets/images/photos/landscape/durdle-door.jpg" />
      </Head>
      <div className="wrapper">
        {/* Section Started Heading */}
        <PageTitle title="Glamour" />
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
