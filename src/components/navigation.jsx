import React, { Component } from "react";
import './App.css';
import csilogo from './csi-logo.png';
export class Navigation extends Component {
  
  render() {
    return (
      <div > 
      
      <nav id="menu" className="navbar navbar-default navbar-fixed-top aryan">
       
      
          {/* <nav id="menu" className="navbar navbar-default navbar-fixed-top"></nav> */}
        <div className="container">     
          <div
            className="collapse navbar-collapse "
            id="bs-example-navbar-collapse-1">
          
            <ul className="nav navbar-nav navbar-left">  
            <img  href="#page-top" className="navbar-brand page-scroll" src={csilogo} alt="logo" style={{height: '70px' , width: '70px', marginright: '5em' }}/>
              <li>
                <a href="#header" className="page-scroll">
                  HOME
                </a>
              </li>
              <li>
                <a href="#About_SVVV" className="page-scroll">
                  ABOUT
                </a>
              </li>
                <li>
                <a href="#features" className="page-scroll">
                  FEATURES
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  GALLERY
                </a>
              </li>
              <li>
                <a href="#About_Us" className="page-scroll">
                  ABOUT CSI
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  TEAM
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  CONTACT
                </a>
              </li>
            </ul>
          </div> 
        </div>
        
      </nav>
      </div>
    );
  }
}

export default Navigation;

// import React, { Component } from "react";
// import { Navbar, NavbarBrand, Nav , NavbarToggler,Collapse,NavItem} from "reactstrap";
// export class Navigation extends Component {
//   render() {
//     return (
//       <nav id="menu" className="navbar navbar-default">
//           {/* <nav id="menu" className="navbar navbar-default navbar-fixed-top"></nav> */}
//         <div className="container">
//           <div className="navbar-header">
//             <button
//               type="button"
//               className="navbar-toggle collapsed"
//               data-toggle="collapse"
//               data-target="#bs-example-navbar-collapse-1"
//             >
//               {" "}
//               <span className="sr-only">Toggle navigation</span>{" "}
//               <span className="icon-bar"></span>{" "}
//               <span className="icon-bar"></span>{" "}
//               <span className="icon-bar"></span>{" "}
//             </button>
            
//             <img  href="#page-top" className="navbar-brand page-scroll" src="../img/logo.png" alt="logo" />
          
//           </div>

//           <div
//             className="collapse navbar-collapse"
//             id="bs-example-navbar-collapse-1"
//           >
//             <ul className="nav navbar-nav navbar-right">
//               <li>
//                 <a href="#features" className="page-scroll">
//                   Features
//                 </a>
//               </li>
//               <li>
//                 <a href="#about" className="page-scroll">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#services" className="page-scroll">
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a href="#portfolio" className="page-scroll">
//                   Gallery
//                 </a>
//               </li>
//               <li>
//                 <a href="#testimonials" className="page-scroll">
//                   Testimonials
//                 </a>
//               </li>
//               <li>
//                 <a href="#team" className="page-scroll">
//                   Team
//                 </a>
//               </li>
//               <li>
//                 <a href="#contact" className="page-scroll">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }

// export default Navigation;
