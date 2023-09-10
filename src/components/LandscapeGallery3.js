import Isotope from 'isotope-layout';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const LandscapeGallery3 = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [showLoading, setShowLoading] = useState(true);
  // let timer1 = setTimeout(() => setShowLoading(true), 1000);
  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
  }, [showLoading]);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  return (
    <div className="section section-inner m-works">
      <div className="container">
        {/* filter */}
        {/* <div className="filter-links">
          <a onClick={handleFilterKeyChange("*")} data-filter="*">
            All
          </a>
          <a
            onClick={handleFilterKeyChange("sorting-print")}
            data-filter="sorting-print"
          >
            Print
          </a>
          <a
            onClick={handleFilterKeyChange("sorting-photography")}
            data-filter="sorting-photography"
          >
            Photography
          </a>
          <a
            onClick={handleFilterKeyChange("sorting-branding")}
            data-filter="sorting-branding"
          >
            Branding
          </a>
          <a
            onClick={handleFilterKeyChange("sorting-art")}
            data-filter="sorting-art"
          >
            Art
          </a>
        </div> */}
        {/* works items */}
        <div className="works-items row classic column-3-offset portfolio-infinite-scrolling hide_title hide_category hide_description">
          <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-4 sorting-photography ">
            <div className="works-item">
              <a
                href="assets/images/photos/landscape/durdle-door.jpg"
                className="has-popup-image"
              >
                <span className="image">
                  <span className="img">
                    <Image
                      className="img-photo"
                      src="/assets/images/photos/landscape/durdle-door.jpg"
                      alt="Durdle Door, Dorset"
                      style={{
                        objectFit: 'contain',
                      }}
                      quality={85}
                      responsive
                      fill
                      priority
                    />
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-4 sorting-art ">
            <div className="works-item">
              <a
                href="assets/images/photos/landscape/london-burning-sky.jpg"
                className="has-popup-image"
              >
                <span className="image">
                  <span className="img">
                    <Image
                      className="img-photo"
                      src="/assets/images/photos/landscape/london-burning-sky.jpg"
                      alt="Westminster, London"
                      style={{
                        objectFit: 'contain',
                      }}
                      quality={85}
                      responsive
                      fill
                      priority
                    />
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-4 sorting-branding ">
            <div className="works-item">
              <a
                href="assets/images/photos/landscape/lake-disrtrict.jpg"
                className="has-popup-image"
              >
                <span className="image">
                  <span className="img">
                    <Image
                      className="img-photo"
                      src="/assets/images/photos/landscape/lake-disrtrict.jpg"
                      alt="Lake District"
                      style={{
                        objectFit: 'contain',
                      }}
                      quality={85}
                      responsive
                      fill
                      priority
                    />                    
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-4 sorting-branding ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a
                href="assets/images/photos/landscape/london-canary-wharf.jpg"
                className="has-popup-image"
              >
                <span className="image">
                     
                  <span className="img">
                    <Image
                      className="img-photo"
                      src="/assets/images/photos/landscape/london-canary-wharf.jpg"
                      alt="London Canary Wharf"
                      style={{
                        objectFit: 'contain',
                      }}
                      quality={85}
                      responsive
                      fill
                      priority
                    />    
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-4 sorting-art ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a
                href="assets/images/photos/landscape/portland-bill.jpg"
                className="has-popup-image"
              >
                <span className="image">
                  <span className="img">
                    <Image
                      className="img-photo"
                      src="/assets/images/photos/landscape/portland-bill.jpg"
                      alt="Portland Bill"
                      style={{
                        objectFit: 'contain',
                      }}
                      quality={85}
                      responsive
                      fill
                      priority
                    />
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-4 sorting-print ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a
                href="assets/images/photos/landscape/canary-wharf-blue-hour.jpg"
                className="has-popup-image"
              >
                <span className="image">
                  <span className="img">
                    <Image
                      className="img-photo"
                      src="/assets/images/photos/landscape/canary-wharf-blue-hour.jpg"
                      alt="Canary Wharf"
                      style={{
                        objectFit: 'contain',
                      }}
                      quality={85}
                      responsive
                      fill
                      priority
                    />
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-4 sorting-print ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a
                href="assets/images/photos/landscape/lake-district-2.jpg"
                className="has-popup-image"
              >
                <span className="image">
                  <span className="img">
                    <Image
                      className="img-photo"
                      src="/assets/images/photos/landscape/lake-district-2.jpg"
                      alt="Lake District"
                      style={{
                        objectFit: 'contain',
                      }}
                      quality={85}
                      responsive
                      fill
                      priority
                    />
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-4 sorting-print ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a
                href="assets/images/photos/landscape/westminster-1.jpg"
                className="has-popup-image"
              >
                <span className="image">
                  <span className="img">
                    <Image
                      className="img-photo"
                      src="/assets/images/photos/landscape/westminster-1.jpg"
                      alt="Westminster"
                      style={{
                        objectFit: 'contain',
                      }}
                      quality={85}
                      responsive
                      fill
                      priority
                    />
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-4 sorting-print ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a
                href="assets/images/photos/landscape/nash-point.jpg"
                className="has-popup-image"
              >
                <span className="image">
                  <span className="img">
                    <Image
                      className="img-photo"
                      src="/assets/images/photos/landscape/nash-point.jpg"
                      alt="Nash Point"
                      style={{
                        objectFit: 'contain',
                      }}
                      quality={85}
                      responsive
                      fill
                      priority
                    />
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-4 sorting-print ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a
                href="assets/images/photos/landscape/Felixstowe_Pier_2.jpg"
                className="has-popup-image"
              >
                <span className="image">
                  <span className="img">
                    <Image
                      className="img-photo"
                      src="/assets/images/photos/landscape/Felixstowe_Pier_2.jpg"
                      alt="Felixstowe"
                      style={{
                        objectFit: 'contain',
                      }}
                      quality={85}
                      responsive
                      fill
                      priority
                    />
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-4 sorting-print ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a
                href="assets/images/photos/landscape/nash-point-1.jpg"
                className="has-popup-image"
              >
                <span className="image">
                  <span className="img">
                    <Image
                      className="img-photo"
                      src="/assets/images/photos/landscape/nash-point-1.jpg"
                      alt="Nash Point"
                      style={{
                        objectFit: 'contain',
                      }}
                      quality={85}
                      responsive
                      fill
                      priority
                    />
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-4 sorting-print ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a
                href="assets/images/photos/landscape/london-tower-bridge.jpg"
                className="has-popup-image"
              >
                <span className="image">
                  <span className="img">
                    <Image
                      className="img-photo"
                      src="/assets/images/photos/landscape/london-tower-bridge.jpg"
                      alt="Tower Bridge"
                      style={{
                        objectFit: 'contain',
                      }}
                      quality={85}
                      responsive
                      fill
                      priority
                    />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandscapeGallery3;
