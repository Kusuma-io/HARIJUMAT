import React from "react";
import contactUs from "../../Image/contact-us.jpg";
function Contact(props) {
  return (
    <>
      <section>
        <div className="container py-5">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h3 className="text-center">Contact Us</h3>
                  <hr />
                  <div className="form-group">
                    <label className="mb-1">User Name</label>
                    <input type="text" className="form-control" placeholder="Enter your username" />
                  </div>
                  <div className="form-group py-3">
                    <label className="mb-1">Phone Number</label>
                    <input type="text" className="form-control" placeholder="081234567890" />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Message</label>
                    <textarea name="" id="" cols="3" className="form-control" placeholder="Type your problem ..."></textarea>
                  </div>
                  <div className="form-group pt-3">
                    <button type="button" className="btn btn-success shadow w-100">
                      Submit
                    </button>
                  </div>
                </div>
                <div className="col-md-6 border-start text-center">
                  <img src={contactUs} alt="" width="420" height="420" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
