import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import "../styles/index.scss"
//dependencis
import CodeMirror from "codemirror"
import "codemirror/addon/runmode/runmode"
import "codemirror/mode/meta"
import "codemirror/mode/javascript/javascript"
import Highlighter from "react-codemirror-runmode"
import Simulator from "../components/Simulator.jsx"

//assets
import Play from "../images/icons/btn-play.png"
import Feature1 from "../images/icons/responsive-64.png"
import Feature2 from "../images/icons/desktop-chart-64.png"
import Feature3 from "../images/icons/browser-64.png"
import Feature4 from "../images/icons/desktop-windows-64.png"
import Feature5 from "../images/icons/customizer-64.png"
import Feature6 from "../images/icons/users-64.png"
import Help from "../images/icons/support-64.png"
import Media from "../images/icons/globe-64.png"
import Sales from "../images/icons/wallet-64.png"
import Client1 from "../images/icons/clients/clients-logo1.png"
import Client2 from "../images/icons/clients/clients-logo2.png"
import Client3 from "../images/icons/clients/clients-logo3.png"
import Client4 from "../images/icons/clients/clients-logo4.png"
import Client5 from "../images/icons/clients/clients-logo5.png"
import Twitter from "../images/icons/twitter.png"
import Facebook from "../images/icons/facebook.png"
import Linkedin from "../images/icons/linkedin.png"
import Avatar1 from "../images/avatar-1.jpg"
import Avatar2 from "../images/avatar-2.jpg"
import Avatar3 from "../images/avatar-3.jpg"
import Avatar4 from "../images/avatar-4.jpg"
import Avatar5 from "../images/avatar-5.jpg"
import Avatar6 from "../images/avatar-6.jpg"

export default function index() {
  return (
    <>
      <Layout>
        <SEO title="Inicio" />
        <section id="intro">
          <Header />
          <div className="container">
            <div className="text">
              <h1>
                Build applications <span>faster</span>
              </h1>
              <h2>
                Hire experts get your job done. The right IT security solutions.
                Protect your clients and computer systems from hackers and fight
                against malware.
              </h2>
              <h3>
                For as low as <span>$0.95</span> per user account
              </h3>
              <div className="contentButtons">
                <button className="btnPrimary">
                  Watch Demo <img src={Play} alt="Icon" />
                </button>
                <button className="btnPrimary">Start now</button>
              </div>
            </div>
            <Simulator />
          </div>
          <section id="features">
            <div className="title">
              <h1>Features designed for you</h1>
              <p>
                We belive we created the most efficient SaaS landing page for
                your users. Landing page with features that will convince you to
                use it for your SaaS business.
              </p>
            </div>
            <div className="content">
              <div>
                <img src={Feature1} alt="icon" />
                <h3>
                  Responsive <b>Layout Template</b>
                </h3>
                <p>
                  Responsive code that makes your landing page look good an all
                  devices (desktop, tablets and phones). Created with mobile
                  specialists.
                </p>
              </div>
              <div>
                <img src={Feature2} alt="icon" />
                <h3>
                  <b>SaaS Landing Page</b> Analysis
                </h3>
                <p>
                  A perfect structure created after we analized trends in SaaS
                  landing page designs. Analysis made to the most popular SaaS
                  business.
                </p>
              </div>
              <div>
                <img src={Feature3} alt="icon" />
                <h3>
                  <b>Smart</b> BEM <b>Grid</b>
                </h3>
                <p>
                  Blocks, Elements and Modifiers. A smart HTML/CSS structure
                  that can easely be reused. Layout driven by the purpose of
                  modularity.
                </p>
              </div>
              <div>
                <img src={Feature4} alt="icon" />
                <h3>
                  <b>Multiple</b> Unique <b>Designs</b>
                </h3>
                <p>
                  Choose between multiple unique designs and easy integrate
                  elements from one design to another. Following the latest
                  design trends.
                </p>
              </div>
              <div>
                <img src={Feature5} alt="icon" />
                <h3>
                  Flexible <b>HTML Sections</b>
                </h3>
                <p>
                  Simple and Smart HTML code that works reintegrated in any part
                  of the layout. Reuse the elements from one design to another.
                </p>
              </div>
              <div>
                <img src={Feature6} alt="icon" />
                <h3>
                  <b>User</b> Friendly
                </h3>
                <p>
                  Easy to navigate. Made with user experience in mind, in order
                  to provide the perfect landing page experience for your
                  client.
                </p>
              </div>
            </div>
          </section>
        </section>
        <section id="api">
          <div className="title">
            <h1>Easy to use API</h1>
            <p>
              Guide to setup and configuration. You can present below a guide
              and a description of how your system configuration works and add
              some animated screens.
            </p>
          </div>
          <Highlighter
            codeMirror={CodeMirror}
            value="$('modal.toggle').on('click', function(e){
              e. preventDefault();
                var modalopen = $(this).data('openpopup');
                $(.modal--'+modalopen').toogleClass('modal--visible');
                var modaltype = $(this).data('popup');
                $('.modal__content--'+modaltype).toggleClass('modal__content--visible');
                var modaltypeb = $(this).data('popup');
                $('.modal__content--'+modaltypeb).toggleClass('modal__content--visible'); 
            }));
          }));"
            language="javascript"
          />
          <div className="buttonContainer">
            <button>Get The Code</button>
            <button>Run Example</button>
          </div>
        </section>
        <section id="pricing">
          <div className="title">
            <h1>Flexible Pricing</h1>
            <p>
              We belive we have created the most efficient SaaS landing page for
              your users. Landing page with features that will convince you to
              use it for your SaaS business.
            </p>
          </div>
          <div className="content">
            <div className="time">
              <ul>
                <li className="active">Monthly</li>
                <li>Yearly</li>
              </ul>
            </div>
            <div className="pricingList">
              <div>
                <h3>FREE</h3>
                <p>
                  $ <span>0</span> / month
                </p>
                <ul>
                  <li className="check">
                    <b>1</b> User Account
                  </li>
                  <li className="check">
                    <b>10</b> Team Members
                  </li>
                  <li className="check">
                    <b>Unlimited</b> Emails Accounts
                  </li>
                  <li className="check">Set And Manage Permissions</li>
                  <li>
                    <del>API extencion support</del>
                  </li>
                  <li>
                    <del>Developer support</del>
                  </li>
                  <li>
                    <del>A/B Testing</del>
                  </li>
                </ul>
                <button>Sing up</button>
              </div>
              <div>
                <h3>STARTUP</h3>
                <p>
                  $ <span>29</span> / month
                </p>
                <ul>
                  <li className="check">
                    <b>10</b> User Account
                  </li>
                  <li className="check">
                    <b>100</b> Team Members
                  </li>
                  <li className="check">
                    <b>Unlimited</b> Emails Accounts
                  </li>
                  <li className="check">Set And Manage Permissions</li>
                  <li className="check">API extencion support</li>
                  <li>
                    <del>Developer support</del>
                  </li>
                  <li>
                    <del>A/B Testing</del>
                  </li>
                </ul>
                <button>Sing up</button>
              </div>
              <div className="pro">
                <div className="clip-path">
                  <p>Popular</p>
                </div>
                <h3>PRO</h3>
                <p>
                  $ <span>49</span> / month
                </p>
                <ul>
                  <li className="checkWhite">
                    <b>50</b> User Account
                  </li>
                  <li className="checkWhite">
                    <b>500</b> Team Members
                  </li>
                  <li className="checkWhite">
                    <b>Unlimited</b> Emails Accounts
                  </li>
                  <li className="checkWhite">Set And Manage Permissions</li>
                  <li className="checkWhite">API extencion support</li>
                  <li className="checkWhite">Developer support</li>
                  <li>
                    <del>A/B Testing</del>
                  </li>
                </ul>
                <button>Sing up</button>
              </div>
              <div>
                <h3>ULTRA</h3>
                <p>
                  $ <span>99</span> / month
                </p>
                <ul>
                  <li className="check">
                    <b>Unlimited</b> User Account
                  </li>
                  <li className="check">
                    <b>Unlimited</b> Team Members
                  </li>
                  <li className="check">
                    <b>Unlimited</b> Emails Accounts
                  </li>
                  <li className="check">Set And Manage Permissions</li>
                  <li className="check">API extencion support</li>
                  <li className="check">Developer support</li>
                  <li className="check">A/B Testing</li>
                </ul>
                <button>Sing up</button>
              </div>
            </div>
          </div>
        </section>
        <section id="map">
          <div className="title">
            <h1>Trusted by world experts</h1>
          </div>
          <img src={Avatar1} alt="avatar" />
          <img src={Avatar2} alt="avatar" />
          <img src={Avatar3} alt="avatar" />
          <img src={Avatar4} alt="avatar" />
          <img src={Avatar5} alt="avatar" />
          <img src={Avatar6} alt="avatar" />
          <img src={Avatar2} alt="avatar" />
        </section>
        <section id="faq">
          <div className="text">
            <h1>Frequently asked questions</h1>
            <p>
              Have a presale question about our products and features? Or
              looking for a refund? We would love to hear what you concern is.
            </p>
            <ul>
              <li>Simple and Smart HTML code</li>
              <li>Works reintegrated in any part of the layout</li>
              <li>Reuse the elements from on design to another</li>
            </ul>
          </div>
          <div className="collapseContainer">
            <div className="cardCollapse">
              <input id="faq1" className="toggle" type="checkbox" />
              <label htmlFor="faq1" className="cardHeader">
                <p>Installing the app on all devices</p>
              </label>
              <div className="cardContent">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ratione fugit veritatis.
                </p>
              </div>
            </div>
            <div className="cardCollapse">
              <input id="faq2" className="toggle" type="checkbox" />
              <label htmlFor="faq2" className="cardHeader">
                <p>How to implement and manahe API key</p>
              </label>
              <div className="cardContent">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ratione fugit veritatis.
                </p>
              </div>
            </div>
            <div className="cardCollapse">
              <input id="faq3" className="toggle" type="checkbox" />
              <label htmlFor="faq3" className="cardHeader">
                <p>How to set up and optimize your account</p>
              </label>
              <div className="cardContent">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ratione fugit veritatis.
                </p>
              </div>
            </div>
            <div className="cardCollapse">
              <input id="faq4" className="toggle" type="checkbox" />
              <label htmlFor="faq4" className="cardHeader">
                <p>Manage your account access and security settings</p>
              </label>
              <div className="cardContent">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ratione fugit veritatis.
                </p>
              </div>
            </div>
            <div className="cardCollapse">
              <input id="faq5" className="toggle" type="checkbox" />
              <label htmlFor="faq5" className="cardHeader">
                <p>API integration basic overview</p>
              </label>
              <div className="cardContent">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ratione fugit veritatis.
                </p>
              </div>
            </div>
            <div className="cardCollapse">
              <input id="faq6" className="toggle" type="checkbox" />
              <label htmlFor="faq6" className="cardHeader">
                <p>Deactivating or deleting your account</p>
              </label>
              <div className="cardContent">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ratione fugit veritatis.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="support">
          <div className="content">
            <article className="card">
              <img src={Help} alt="icon" />
              <h3>Help Support</h3>
              <p>
                Our 24/7 support team is here to help you and make sure our
                product is up date.
              </p>
              <button>support@supportemail.com</button>
              <div className="hoverCard">
                <h3>Help Support</h3>
                <p>
                  Our 24/7 support team is here to help you and make sure our
                  product is up date.
                </p>
                <button>support@supportemail.com</button>
              </div>
            </article>
            <article className="card">
              <img src={Media} alt="icon" />
              <h3>MediaPress</h3>
              <p>
                OOnline awards and publications. Get our media resources and
                learn about our company.
              </p>
              <button>support@supportemail.com</button>
              <div className="hoverCard">
                <h3>MediaPress</h3>
                <p>
                  OOnline awards and publications. Get our media resources and
                  learn about our company.
                </p>
                <button>support@supportemail.com</button>
              </div>
            </article>
            <article className="card">
              <img src={Sales} alt="icon" />
              <h3>Sales</h3>
              <p>
                Have a presale question about our products and features? Or
                looking for refund?
              </p>
              <button>support@supportemail.com</button>
              <div className="hoverCard">
                <h3>Sales</h3>
                <p>
                  Have a presale question about our products and features? Or
                  looking for refund?
                </p>
                <button>support@supportemail.com</button>
              </div>
            </article>
          </div>
        </section>
        <section id="clients">
          <div className="content">
            <img src={Client1} alt="logo" />
            <img src={Client2} alt="logo" />
            <img src={Client3} alt="logo" />
            <img src={Client4} alt="logo" />
            <img src={Client5} alt="logo" />
          </div>
        </section>
        <footer>
          <div className="content">
            <div className="text">
              <div>
                <h1>
                  Start <span>growing</span> your business.
                </h1>
                <p>
                  Your issue ir our main priority. Our 24/7 support team is here
                  to help you and make sure our product is up to date. Have a
                  presale question about our products and feature? Or looking
                  for a refund? We would love to hear whats your concern is.
                  Online awards and publications.
                </p>
              </div>
              <div>
                <button>Get start now!</button>
              </div>
            </div>
          </div>
          <div className="contentFooter">
            <div className="infoPage">
              <b>LATERAL</b>
              <p>
                Copyright@2018 LATERAL. All Rights Reserved. Prodly made in EU.
              </p>
              <ul className="socialMedia">
                <li>
                  <img src={Twitter} alt="twitter" />
                  <img src={Facebook} alt="facebook" />
                  <img src={Linkedin} alt="linkedin" />
                </li>
              </ul>
            </div>
            <div className="listItems">
              <ul>
                <p>
                  <b>Company</b>
                </p>
                <li>About</li>
                <li>Carrers</li>
                <li>Awards</li>
                <li>Users Program</li>
                <li>Locations</li>
              </ul>
            </div>
            <div className="listItems">
              <ul>
                <p>
                  <b>Products</b>
                </p>
                <li>Integrations</li>
                <li>API</li>
                <li>Pricing</li>
                <li>Documentation</li>
                <li>Release Notes</li>
              </ul>
            </div>
            <div className="listItems">
              <ul>
                <p>
                  <b>Support</b>
                </p>
                <li>Contact</li>
                <li>FAQ</li>
                <li>Press</li>
              </ul>
            </div>
          </div>
        </footer>
      </Layout>
    </>
  )
}
