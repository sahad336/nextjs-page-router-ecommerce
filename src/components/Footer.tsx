import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="pt-5 pb-4" style={{background: '#0070f3'}}>
  <div className="container text-center text-md-start">
    <div className="row text-center text-md-start">

      <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h5 className="text-uppercase mb-4 fw-bold text-warning">ShopEase</h5>
        <p style={{color:'white'}}>
          Experience seamless online shopping with ShopEase — where quality meets comfort and convenience.
        </p>
      </div>

      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 fw-bold text-warning">Quick Links</h6>
        <p><a href="/" className="text-light text-decoration-none">Home</a></p>
        <p><a href="/products" className="text-light text-decoration-none">Shop</a></p>
        <p><a href="/about" className="text-light text-decoration-none">About</a></p>
        <p><a href="/contact" className="text-light text-decoration-none">Contact</a></p>
      </div>

      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 fw-bold text-warning">Customer Care</h6>
        <p><a href="#" className="text-light text-decoration-none">FAQs</a></p>
        <p><a href="#" className="text-light text-decoration-none">Shipping</a></p>
        <p><a href="#" className="text-light text-decoration-none">Returns</a></p>
        <p><a href="#" className="text-light text-decoration-none">Privacy Policy</a></p>
      </div>

      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 fw-bold text-warning">Contact</h6>
        <div style={{color:'white'}}>
        <p><i className="bi bi-house-door-fill me-2"></i> Kochi, Kerala, India</p>
        <p><i className="bi bi-envelope-fill me-2"></i> support@shopease.com</p>
        <p><i className="bi bi-phone-fill me-2"></i> +91 98765 43210</p>
        </div>
      </div>

    </div>

    <hr className="my-4 text-light"/>

    <div className="row align-items-center">
      <div className="col-md-6 col-lg-7">
        <p className="text-center text-white text-md-start mb-0">
          © 2025 <span className="text-warning fw-bold">ShopEase</span>. All Rights Reserved.
        </p>
      </div>

      <div className="col-md-6 col-lg-5 text-center text-md-end">
        <a href="#" className="text-light me-3"><i className="bi bi-facebook fs-5"></i></a>
        <a href="#" className="text-light me-3"><i className="bi bi-instagram fs-5"></i></a>
        <a href="#" className="text-light me-3"><i className="bi bi-twitter-x fs-5"></i></a>
        <a href="#" className="text-light"><i className="bi bi-linkedin fs-5"></i></a>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}
export default Footer;