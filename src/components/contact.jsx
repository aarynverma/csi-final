import React, { Component } from "react";
// import PersonSharpIcon from "@material-ui/icons/PersonSharp";
export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="section-title">
              <h2>Contact Us</h2>
            </div>
            {/* part 1 */}
            <div className="col 12 col-md-5 col-md-offset-1 contact-info justify-content-center align-self-center">
              {/* coordinator contacts */}
              <div className="contact-item">
                <h3>CSI-SB Co-ordinator</h3>
                <p>
                  <span>
                    <i className="fa fa-user"></i> Mr. Vijay Prakash
                  </span>
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> 9993390764
                  </span>{" "}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> 7974344929
                  </span>{" "}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i>
                    {this.props.data ? this.props.data.email : "loading"}
                  </span>{" "}
                </p>
              </div>
              {/* coordinator contacts ends */}
              <br />
              <br />
              <br />

              {/* Student contact */}
              <div className="contact-item">
                <h3>Student Co-ordinator</h3>
                <p>
                  <span>
                    <i className="fa fa-user"></i>Ankur Singh Tomar
                  </span>
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> 8871003213
                  </span>{" "}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-user"></i>Kanhaiya Sharma
                  </span>{" "}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> 9617138985
                  </span>{" "}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-user"></i>Taher Kapedia
                  </span>{" "}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i>8965086788
                  </span>{" "}
                </p>
              </div>
              {/* student contact ends */}
            </div>
            {/* part 1 ends */}
            {/* Contact Info */}
            {/* part 2 */}
            <div className="col-12 col-md-6">
              <div className="row">
                <h3>Drop us a line</h3>

                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="3"
                      placeholder="Message"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            {/* part 2 ends */}

            {/* socila icons */}

            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a  href={this.props.data ? this.props.data.facebook : "/"}
                      >
                        <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.twitter : "/"}>
                      <a href="https://www.linkedin.com/" target="_blank"><i className="fa fa-linkedin"></i>
                      </a></a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.youtube : "/"}>
                      <a href="https://www.instagram.com/" target="_blank"> <i className="fa fa-instagram"></i>
                      </a></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div id="footer">
          <div className="container text-center">
            <p>&copy; CSI-SB SVVV| Designed And Developed</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

// import React, { Component } from "react";

// export class Contact extends Component {
//   render() {
//     return (
//       <div>
//         <div id="contact">
//           <div className="container">
//             <div className="col-md-6">
//               <div className="row">
//                 <div className="section-title">
//                   <h2>Contact Us</h2>
//                   <p>
//                     Please fill out the form below to send us an email and we
//                     will get back to you as soon as possible.
//                   </p>
//                 </div>
//                 <form name="sentMessage" id="contactForm" noValidate>
//                   <div className="row">
//                     <div className="col-md-6">
//                       <div className="form-group">
//                         <input
//                           type="text"
//                           id="name"
//                           className="form-control"
//                           placeholder="Name"
//                           required="required"
//                         />
//                         <p className="help-block text-danger"></p>
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <div className="form-group">
//                         <input
//                           type="email"
//                           id="email"
//                           className="form-control"
//                           placeholder="Email"
//                           required="required"
//                         />
//                         <p className="help-block text-danger"></p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="form-group">
//                     <textarea
//                       name="message"
//                       id="message"
//                       className="form-control"
//                       rows="4"
//                       placeholder="Message"
//                       required
//                     ></textarea>
//                     <p className="help-block text-danger"></p>
//                   </div>
//                   <div id="success"></div>
//                   <button type="submit" className="btn btn-custom btn-lg">
//                     Send Message
//                   </button>
//                 </form>
//               </div>
//             </div>
//             {/* Contact Info */}
//             <div className="col-md-5 col-md-offset-1 contact-info">
//               <div className="contact-item">
//                 <h3>Contact Info</h3>
//                 <p>
//                   <span>
//                     <i className="fa fa-map-marker"></i> Address
//                   </span>
//                   {this.props.data ? this.props.data.address : "loading"}
//                 </p>
//               </div>
//               <div className="contact-item">
//                 <p>
//                   <span>
//                     <i className="fa fa-phone"></i> Phone
//                   </span>{" "}
//                   {this.props.data ? this.props.data.phone : "loading"}
//                 </p>
//               </div>
//               <div className="contact-item">
//                 <p>
//                   <span>
//                     <i className="fa fa-envelope-o"></i> Email
//                   </span>{" "}
//                   {this.props.data ? this.props.data.email : "loading"}
//                 </p>
//               </div>
//             </div>
//             {/* socila icons */}
//             <div className="col-md-12">
//               <div className="row">
//                 <div className="social">
//                   <ul>
//                     <li>
//                       <a
//                         href={this.props.data ? this.props.data.facebook : "/"}
//                       >
//                         <i className="fa fa-facebook"></i>
//                       </a>
//                     </li>
//                     <li>
//                       <a href={this.props.data ? this.props.data.twitter : "/"}>
//                         <i className="fa fa-twitter"></i>
//                       </a>
//                     </li>
//                     <li>
//                       <a href={this.props.data ? this.props.data.youtube : "/"}>
//                         <i className="fa fa-youtube"></i>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* footer */}
//         <div id="footer">
//           <div className="container text-center">
//             <p>
//               &copy; CSI-SB SVVV| Designed And Developed By Harsh Agrawal
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Contact;
