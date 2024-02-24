import Head from 'next/head'
import Footer from '../src/layout/Footer'
import Layout from '../src/layout/Layout'
import PageTitle from '../src/layout/PageTitle'
import MasonryImageGallery from '../src/components/shared/MasonryImageGallery'

const galleryImages = [
  {
    src: 'landscape/durdle-door.jpg',
    alt: 'Durdle Door, Dorset - landscape'
  },
  {
    src: 'landscape/london-burning-sky.jpg',
    alt: 'Westminster, London - landscape'
  },
  {
    src: 'landscape/ukraine.jpg',
    alt: 'Ukraine - landscape'
  },
  {
    src: 'landscape/nash-point.jpg',
    alt: 'Nash Point - landscape'
  },
  {
    src: 'landscape/lake-district.jpg',
    alt: 'Lake District - landscape'
  },
  {
    src: 'landscape/london-canary-wharf.jpg',
    alt: 'London Canary Wharf - landscape'
  },
  {
    src: 'landscape/portland-bill.jpg',
    alt: 'Portland Bill - landscape'
  },
  {
    src: 'landscape/canary-wharf-blue-hour.jpg',
    alt: 'Canary Wharf - landscape'
  },
  {
    src: 'landscape/lake-district-2.jpg',
    alt: 'Lake District - landscape'
  },
  {
    src: 'landscape/westminster-1.jpg',
    alt: 'Westminster - landscape'
  },
  {
    src: 'landscape/Felixstowe_Pier_2.jpg',
    alt: 'Felixstowe - landscape'
  },
  {
    src: 'landscape/isle-of-skye-2.jpg',
    alt: 'Isle of Skye - landscape'
  },
  {
    src: 'landscape/nash-point-1.jpg',
    alt: 'Nash Point - landscape'
  },
  {
    src: 'landscape/london-tower-bridge.jpg',
    alt: 'Tower Bridge - landscape'
  },
  {
    src: 'landscape/bournemouth-beach.jpg',
    alt: 'Bournemouth Beach - landscape'
  },
  {
    src: 'landscape/isle-of-skye.jpg',
    alt: 'Isle of Skye - landscape'
  },
  {
    src: 'landscape/st-pauls.jpg',
    alt: 'St Pauls Cathedral'
  },
  {
    src: 'landscape/Felixstowe_pier.jpg',
    alt: 'Felixstowe_pier'
  },
]

const pageMeta = {
  title: 'Landscape photographer in Dorset. Photography workshops in Dorset',
  description: 'Landscape photographer in Poole, Dorset. Photography workshops Dorset',
  keywords: 'dorset landscape photography, photography workshops dorset, landscape photography workshops, Dorset landscape photographer, landscape photography dorset',
  image: 'https://socreativephoto.com/assets/images/photos/landscape/portland-bill.jpg',
}

const Gallery3Column = () => {
  return (
    <Layout>
      <Head>
        <title>{ pageMeta.title }</title>
        <meta name="description" content={ pageMeta.description } key="desc" />
        <meta name="keywords" content={ pageMeta.keywords } />
        <meta property="og:title" content={ pageMeta.title } />
        <meta property="og:description" content={ pageMeta.description } />
        <meta property="og:image" content={ pageMeta.image } />
        <meta property="twitter:title" content={ pageMeta.title } />
        <meta property="twitter:description" content={ pageMeta.description } />
        <meta property="twitter:image" content={ pageMeta.image } />
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
