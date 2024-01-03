import Image from 'next/image'
import Head from 'next/head';
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "../src/layout/Layout";
import { home1SliderProps } from "../src/sliderProps";
// import Splitting from "splitting";

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>
          Dorset landscape, portrait and commercial photographer
        </title>
        <meta
          name="description"
          content="Professional photographer in Dorset. Landscape photography workshops. Portrait, editorial and commercial photography"
          key="desc"
        />
        <meta name="keywords" content="Dorset landscape photographer, Dorset photography workshops, portrait photographer" />
        <meta property="og:title" content="Dorset landscape, portrait and commercial photographer" />
        <meta property="og:description" content="Dorset landscape photographer, Dorset photography workshops, portrait photographer" />
        <meta property="og:image" content="https://socreativephoto.com/assets/images/photos/london-burning-sky.jpg" />
      </Head>
      <div className="wrapper">
        {/* Section Hero Main Slider */}
        <Swiper {...home1SliderProps} className="section hero-main-slider">
          <SwiperSlide className="swiper-slide" data-color="white">
            <Image
              src="/assets/images/photos/london-burning-sky.jpg"
              alt="Socreative Photography - Landscapes"
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
              quality={85}
              fill
              priority
            />
            <div className="slide-titles">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* title */}
                  <div className="titles">
                    {/* <div className="label scrolla-element-anim-1">photography</div> */}
                    <div className="title">
                      <span
                        className="title-inner splitting-text-anim-2"
                        data-splitting=""
                      >
                        Landscapes
                      </span>
                    </div>
                    <div className="subtitle scrolla-element-anim-1">
                      Landscape and long exposure photography gallery
                    </div>
                  </div>
                  <div className="more-bts">
                    <Link legacyBehavior href="/landscapes">
                      <a
                        data-splitting=""
                        className="btn more-btn scrolla-element-anim-1"
                      >
                        see more
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-color="white">
            <Image
              src="/assets/images/photos/portrait-summer.jpg"
              alt="Socreative Photography - Portraits"
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
              quality={85}
              fill
              priority
            />
            <div className="slide-titles">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* title */}
                  <div className="titles">
                    {/* <div className="label scrolla-element-anim-1">photography</div> */}
                    <div className="title">
                      <span
                        className="title-inner splitting-text-anim-2"
                        data-splitting=""
                      >
                        Portraits<br />
                      </span>
                    </div>
                    <div className="subtitle scrolla-element-anim-1">
                      From fashion to family portraits in both natural light and photo studio 
                    </div>
                  </div>
                  <div className="more-bts">
                    <Link legacyBehavior href="/portraits">
                      <a
                        data-splitting=""
                        className="btn more-btn scrolla-element-anim-1"
                      >
                        see more
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-color="white">
            <Image
              src="/assets/images/photos/fitness.jpg"
              alt="Socreative Photography - Fitness Photography"
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
              quality={85}
              fill
              priority
            />
            <div className="slide-titles">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* title */}
                  <div className="titles">
                    {/* <div className="label scrolla-element-anim-1">photography</div> */}
                    <div className="title">
                      <span
                        className="title-inner splitting-text-anim-2"
                        data-splitting=""
                      >
                        Fitness
                      </span>
                    </div>
                    <div className="subtitle scrolla-element-anim-1">
                      Discover the art of fitness photography
                    </div>
                  </div>
                  <div className="more-bts">
                    <Link legacyBehavior href="/fitness">
                      <a
                        data-splitting=""
                        className="btn more-btn scrolla-element-anim-1"
                      >
                        see more
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-color="white">
            <Image
              src="/assets/images/photos/glam.jpg"
              alt="Socreative Photography - Fasion Photography"
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
              quality={85}
              fill
              priority
            />
            {/* slide titles */}
            <div className="slide-titles">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* title */}
                  <div className="titles">
                    {/* <div className="label scrolla-element-anim-1">photography</div> */}
                    <div className="title">
                      <span
                        className="title-inner splitting-text-anim-2"
                        data-splitting=""
                      >
                        Fashion
                      </span>
                    </div>
                    <div className="subtitle scrolla-element-anim-1">
                      Fashion photography and editorials.
                    </div>
                  </div>
                  <div className="more-bts">
                    <Link legacyBehavior href="/fashion">
                      <a
                        data-splitting=""
                        className="btn more-btn scrolla-element-anim-1"
                      >
                        see more
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* pagination */}
          <div
            className="swiper-pagination scrolla-element-anim-1 scroll-animate swiper-pagination-bullets swiper-pagination-horizontal animate__active animate__animated"
            data-animate="active"
          />
          {/* navigation */}
          <div className="swiper-buttons">
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </Swiper>
      </div>
    </Layout>
  );
};
export default Index;
