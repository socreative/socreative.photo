import ScImage from './ScImage'

const LandscapeGallery = () => {
  const baseUrl = '/assets/images/photos/'
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

  return (
    <div className="section section-inner m-works">
      <div className="container gallery-container">
        { 
          galleryImages.map(img => (
             <div className="works-item">
                <a
                  href={ `${baseUrl}${img.src}` }
                  className="has-popup-image"
                >
                  <ScImage
                    src={ `${baseUrl}${img.src}` }
                    alt={ img.alt }
                  />
                </a>
              </div>
          ))
        }
      </div>
    </div>
  )
}
export default LandscapeGallery;
