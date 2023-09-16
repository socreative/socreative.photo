import ScImage from '../ScImage'

const GlamourGallery = () => {
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
  ]

  return (
    <div className="section section-inner m-works">
      <div className="container gallery-container">
        { 
          galleryImages.map(img => (
            <div
              key={img.src} 
              className="works-item"
            >
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
export default GlamourGallery;
