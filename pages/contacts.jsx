import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";
import { useState } from 'react'

const Contacts = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = {
      name,
      email,
      message
    }

    setSubmitted(true)

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <Layout>
      <div className="wrapper">
        {/* Section Started Heading */}
        {/* <PageTitle title="Get in touch" /> */}

        {/* Section Image Large */}
        {/* <div
          className="section section-inner m-image-large scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <div className="image">
            <div
              className="img js-parallax"
              style={{ backgroundImage: "url(assets/images/contact.jpg)" }}
            />
          </div>
        </div> */}
        {/* Section Contacts Form */}
        <div className="section section-inner m-contacts-form">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                {/* titles */}
                <div className="m-titles">
                  <div
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    { !submitted && 'Get in touch' }
                    { submitted && 'Thank you!' }
                  </div>
                </div>
                {/* contact form */}
                { !submitted && <div className="contacts-form">
                  <form id="cform" method="post">
                    <div className="group">
                      <div
                        className="value scrolla-element-anim-1 scroll-animate"
                        data-animate="active"
                      >
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          onChange={(e)=>{setName(e.target.value)}}
                        />
                      </div>
                    </div>
                    <div className="group">
                      <div
                        className="value scrolla-element-anim-1 scroll-animate"
                        data-animate="active"
                      >
                        <input
                          type="text"
                          name="email"
                          placeholder="Email Address"
                          onChange={(e)=>{setEmail(e.target.value)}}
                        />
                      </div>
                    </div>
                    <div className="group full">
                      <div
                        className="value scrolla-element-anim-1 scroll-animate"
                        data-animate="active"
                      >
                        <textarea
                          name="message"
                          placeholder="Message"
                          defaultValue={""}
                          onChange={(e)=>{setMessage(e.target.value)}}
                        />
                      </div>
                    </div>
                    <div
                      className="submit scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <a href="#" className="btn" onClick={(e)=>{handleSubmit(e)}}>
                        Send a Message
                      </a>
                    </div>
                  </form>
                </div>
              }
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};
export default Contacts;
