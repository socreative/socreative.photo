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
                >
                  <i aria-hidden="true" className="fab fa-instagram" />
                </a>
                <a
                  target="_blank"
                  href="https://facebook.com/socreativephoto"
                  className="scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <i aria-hidden="true" className="fab fa-facebook-f" />
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/socreativephoto"
                  className="scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <i aria-hidden="true" className="fab fa-twitter" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div
                className="copyright-text scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                © 2023 Socreative Photography
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
