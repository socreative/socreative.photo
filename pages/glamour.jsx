import Head from 'next/head'
import Footer from '../src/layout/Footer'
import Layout from '../src/layout/Layout'
import PageTitle from '../src/layout/PageTitle'
import MasonryImageGallery from '../src/components/shared/MasonryImageGallery'

const galleryImages = [
  {
    src: 'glamour/chris-tuxedo-3.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/debbie1.1.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/tunnel_color.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/bunny-55.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/debbie-2.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/_5D_9194.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/eva-1.3_small.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/red1.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/_5D_4776.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/chris-edit-1.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/_5D_5950.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/under-1.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/_5D_5932.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/_5D_9194.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/_5D_6462.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/_5D_9842-Edit.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/belita.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/_5D_5498-55.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/_MG_0360-2.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/_5D_6469.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/_5D_4546-Edit.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/wendy-grey-1.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/red2.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/isabella-bikini.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/chris-bunny-1.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/_5D_1565-1.jpg',
    alt: 'x'
  },
  {
    src: 'glamour/_5D_9877.jpg',
    alt: 'x'
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
