import ScImage from '../shared/ScImage'

const PortraitGallery = () => {
  const baseUrl = '/assets/images/photos/'
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
export default PortraitGallery;
