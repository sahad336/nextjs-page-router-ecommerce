"use client";

function Contact() {
  return (
    <div className="container py-5 mt-5">
      <h1 className="fw-bold text-center display-5 text-primary mb-5">
        Contact Us
      </h1>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>
        <div className="col-12">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            rows={4}
            placeholder="Your message..."
          ></textarea>
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary px-4">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
export default Contact;
