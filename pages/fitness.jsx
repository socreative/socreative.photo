import Head from 'next/head'
import Footer from '../src/layout/Footer'
import Layout from '../src/layout/Layout'
import PageTitle from '../src/layout/PageTitle'
import MasonryImageGallery from '../src/components/shared/MasonryImageGallery'

const galleryImages = [
  {
    src: 'fitness/Carmelle_edit_3.jpg',
    alt: 'urban fitness'
  },
  {
    src: 'fitness/bailee-2.jpg',
    alt: 'urban fitness'
  },
  {
    src: 'fitness/carmelle-2.jpg',
    alt: 'Carmelle - fitness'
  },
  {
    src: 'fitness/bailee-yoga.jpg',
    alt: 'bailee-yoga - fitness'
  },
  {
    src: 'fitness/bailee_vaux_square.jpg',
    alt: 'Bailee - fitness'
  },
  {
    src: 'fitness/isabell-2.jpg',
    alt: 'isabell-2 - fitness'
  },
  {
    src: 'fitness/niash.jpg',
    alt: 'niash - fitness'
  },
  {
    src: 'fitness/urban-fitness-1.jpg',
    alt: 'Urban fitness'
  },
  {
    src: 'fitness/urban-fitness-2.jpg',
    alt: 'Urban fitness'
  },
  {
    src: 'fitness/Carmelle_edit_5.jpg',
    alt: 'fitness fashion'
  },
  {
    src: 'fitness/lilly-2.jpg',
    alt: 'Lilly - fitness'
  },
  {
    src: 'fitness/wendy-2-2.jpg',
    alt: 'Wendy fitness outfit - fitness'
  },
  {
    src: 'fitness/wendy-2.jpg',
    alt: 'Wendy fitness outfit - fitness'
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
        <PageTitle title="Fitness" />
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
