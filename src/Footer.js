import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className="FooterContainer">
      <div className="FooterWrap">
          <div className="FooterLinksContainer">
              <div className="FooterLinksWrapper">
                  <div className="FooterLinkItems">
                    <h1 className="FooterLinkTtitle">About Us</h1>
                      <div className="FooterLink" to="/login">Home</div>
                      <div className="FooterLink" to="/login">Products</div>
                      <div className="FooterLink" to="/login">How it Works</div>
                      <div className="FooterLink" to="/login">Contact</div>
                  </div>
                  <div className="FooterLinkItems">
                    <h1 className="FooterLinkTtitle">About Us</h1>
                      <div className="FooterLink" to="/login">Home</div>
                      <div className="FooterLink" to="/login">Products</div>
                      <div className="FooterLink" to="/login">How it Works</div>
                      <div className="FooterLink" to="/login">Contact</div>
                  </div>
              </div>
              <div className="FooterLinksWrapper">
                  <div className="FooterLinkItems">
                    <h1 className="FooterLinkTtitle">About Us</h1>
                      <a className="FooterLink" to="/login">Home</a>
                      <div className="FooterLink" to="/login">Products</div>
                      <div className="FooterLink" to="/login">How it Works</div>
                      <div className="FooterLink" to="/login">Contact</div>
                  </div>
                  <div className="FooterLinkItems">
                    <h1 className="FooterLinkTtitle">About Us</h1>
                      <div className="FooterLink" to="/login">Home</div>
                      <div className="FooterLink" to="/login">Products</div>
                      <div className="FooterLink" to="/login">How it Works</div>
                      <div className="FooterLink" to="/login">Contact</div>
                  </div>
              </div>
            </div>
      </div>
    </div>

  )
}

export default Footer
