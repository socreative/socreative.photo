const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__builder">
        <div className="container align-center">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              {/* social */}
              <div className="social-links footer-social-links">
                <a
                  target="_blank"
                  href="https://instagram.com/socreativephoto"
                  className="scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                  aria-label="Socreative Photography Instagram link"
                >
                  <i aria-hidden="true" className="fab fa-instagram" />
                  <span>instagram</span>
                </a>
                <a
                  target="_blank"
                  href="https://facebook.com/socreativephoto"
                  className="scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                  aria-label="Socreative Photography Facebook page link"
                >
                  <i aria-hidden="true" className="fab fa-facebook-f" />
                  <span>facebook</span>
                </a>
                <a

                  target="_blank"
                  href="https://twitter.com/socreativephoto"
                  className="scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                  aria-label="Socreative Photography Twitter link"
                >
                  <i aria-hidden="true" className="fab fa-twitter" />
                  <span>twitter</span>
                </a>
              </div>
              <span className="contact-telephone">Tel: 07466318246</span>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 text-center">
              
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div
                className="copyright-text scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <a className="sm-link" href="https://www.socreative.digital">Crafted by Socreative.Digital</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
