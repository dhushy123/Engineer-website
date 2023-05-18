import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        {/* Navbar */}
        <nav className="pa3 pa4-ns">
          <a className="link dim black b f6 f5-ns dib mr3" href="/" title="Home">Home</a>
          <a className="link dim black b f6 f5-ns dib mr3" href="/about" title="About">About</a>
          <a className="link dim black b f6 f5-ns dib mr3" href="/contact" title="Contact">Contact</a>
        </nav>

        {/* Background */}
        <div className="bg-lightest-blue pa4">
          <h1 className="f1 lh-title">Hiring Engineers</h1>
          <p className="f3 lh-copy">
            Looking for talented engineers to join your team? We connect you with highly skilled professionals in various engineering fields. Find the right candidates for your projects and drive innovation with our expert engineering services.
          </p>
          <button className="f6 link dim br-pill ba bw1 ph3 pv2 mb2 dib mid-gray">Get Started</button>
        </div>

        {/* Logo */}
        <div className="tc">
          <img src="path/to/your/logo.png" alt="Logo" className="w5" />
          {/* Add any additional logo content here */}
        </div>
      </div>
    );
  }
}

export default Home;
