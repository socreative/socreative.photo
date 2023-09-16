import ScImage from './ScImage'

const MasonryImageGallery = (props) => {
  const baseUrl = '/assets/images/photos/'

  return (
    <div className="section section-inner m-works">
      <div className="container gallery-container">
        { 
          props.images.map(img => (
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
export default MasonryImageGallery;
