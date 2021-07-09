import React, { Component } from 'react';
import image from '../images/Contact.jpg';

class Contact extends Component {
  render(){
    return (
      <React.Fragment>
        <div class="pages rounded">
          <div class="pageContent">
            <h2>Contact</h2>
            <div><img src={image} alt="" /></div>
            <p>
              Please email me at <a href="mailto:lcplamond@gmail.com">lcplamond@gmail.com</a> if you would like to contact me.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
