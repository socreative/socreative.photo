import Head from 'next/head'
import Footer from '../src/layout/Footer'
import Layout from '../src/layout/Layout'
import PageTitle from '../src/layout/PageTitle'
import MasonryImageGallery from '../src/components/shared/MasonryImageGallery'

const galleryImages = [
  {
    src: 'portrait/lena.jpg',
    alt: 'Lena - portrait'
  },
  {
    src: 'portrait/ina-4.jpg',
    alt: 'Ina - portrait'
  },
  {
    src: 'portrait/Carmelle_2.jpg',
    alt: 'Carmelle - portrait'
  },
  {
    src: 'portrait/dovile-1.jpg',
    alt: 'Dovile - portrait'
  },
  {
    src: 'portrait/ina-1.jpg',
    alt: 'Ina - portrait'
  },
  {
    src: 'portrait/red_dress_1.jpg',
    alt: 'Red dress'
  },
  {
    src: 'portrait/laura-1.jpg',
    alt: 'Laura - portrait'
  },
  {
    src: 'portrait/dovile-2.jpg',
    alt: 'Dovile - portrait'
  },
  {
    src: 'portrait/milly_pier_2.jpg',
    alt: 'Milly - portrait'
  },
  {
    src: 'portrait/urban-portrait.jpg',
    alt: 'Urban - portrait'
  },
  {
    src: 'portrait/urban-fitness-1.jpg',
    alt: 'Urban fitness - portrait'
  },
  {
    src: 'portrait/laura-2-sc.jpg',
    alt: 'Laura - portrait'
  },
  {
    src: 'portrait/dovile-3.jpg',
    alt: 'Dovile - portrait'
  },
  {
    src: 'portrait/mia.jpg',
    alt: 'Mia - portrait'
  },
  {
    src: 'portrait/leah-1.jpg',
    alt: 'Leah - portrait'
  },
  {
    src: 'portrait/bailee_vaux.jpg',
    alt: 'Bailee - portrait'
  },
  {
    src: 'portrait/hot-motif.jpg',
    alt: 'Hot Motif'
  },
  {
    src: 'portrait/eva-portrait.jpg',
    alt: 'Hot Motif'
  },

]

const Gallery3Column = () => {
  return (
    <Layout>
      <Head>
        <title>
          Portrait and family photographer in Poole, Dorset - Socreative Photography
        </title>
        <meta
          name="description"
          content="Portrait and family photographer in Poole, Dorset. To book a session call: 07466318246"
          key="desc"
        />
        <meta name="keywords" content="Poole portrait photographer, Poole family photographer, Dorset portrait photographer, Dorset photography workshops, Dorset photography" />
        <meta property="og:title" content="Portrait and family photographer in Poole, Dorset - Socreative Photography" />
        <meta property="og:description" content="Portrait and family photographer in Poole, Dorset. To book a session call: 07466318246" />
        <meta property="og:image" content="https://socreativephoto.com/assets/images/photos/portrait/lena.jpg" />
      </Head>
      <div className="wrapper">
        {/* Section Started Heading */}
        <PageTitle title="Portraits" />
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
