 function AboutUs() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="py-5 text-center bg-light">
        <div className="container">
          <h1 className="fw-bold display-5 text-primary">About Us</h1>
          <p className="lead text-muted mt-3">
            We’re more than just an online store — we’re your trusted shopping companion.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=800&q=60"
              alt="Team working"
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold text-primary mb-3">Who We Are</h2>
            <p className="text-muted">
              Founded in 2020, <strong>ShopEase</strong> is an innovative e-commerce platform
              dedicated to delivering quality products at unbeatable prices. Our team of
              passionate professionals works tirelessly to bring you the latest trends in
              fashion, electronics, and lifestyle — all in one place.
            </p>
            <p className="text-muted">
              We focus on building trust through exceptional customer support and a
              hassle-free shopping experience.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Mission & Vision</h2>
          <div className="row justify-content-center">
            <div className="col-md-5 mb-4">
              <div className="p-4 bg-white text-dark rounded-4 shadow-sm h-100">
                <h5 className="fw-bold mb-3 text-primary">Our Mission</h5>
                <p>
                  To empower people to shop smarter by providing an easy, secure, and
                  enjoyable online shopping experience that exceeds expectations.
                </p>
              </div>
            </div>
            <div className="col-md-5 mb-4">
              <div className="p-4 bg-white text-dark rounded-4 shadow-sm h-100">
                <h5 className="fw-bold mb-3 text-primary">Our Vision</h5>
                <p>
                  To be the most customer-centric e-commerce platform that connects millions
                  of shoppers with their favorite brands, globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container py-5">
        <h2 className="fw-bold text-center mb-5 text-primary">Why Choose Us?</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="p-4 shadow-sm rounded-4 h-100">
              <i className="bi bi-truck display-4 text-primary mb-3"></i>
              <h5 className="fw-semibold">Fast Delivery</h5>
              <p className="text-muted">
                Quick and reliable shipping across the country — right to your doorstep.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="p-4 shadow-sm rounded-4 h-100">
              <i className="bi bi-shield-check display-4 text-primary mb-3"></i>
              <h5 className="fw-semibold">Secure Payments</h5>
              <p className="text-muted">
                100% safe transactions with trusted payment gateways and encryption.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="p-4 shadow-sm rounded-4 h-100">
              <i className="bi bi-emoji-smile display-4 text-primary mb-3"></i>
              <h5 className="fw-semibold">Customer Satisfaction</h5>
              <p className="text-muted">
                24/7 support and easy returns to make your shopping experience stress-free.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default AboutUs;