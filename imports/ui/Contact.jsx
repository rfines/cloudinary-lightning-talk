import React from 'react';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <section id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 text-center">
                        <h2 className="section-heading">Let's Get In Touch!</h2>
                        <hr className="primary"></hr>
                        <p>Have questions or want to discuss your next project? Get in touch with me!</p>
                    </div>
                    <div className="col-lg-4 col-lg-offset-2 text-center">
                        <i className="fa fa-phone fa-3x sr-contact"></i>
                        <p>816-547-4271</p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <i className="fa fa-envelope-o fa-3x sr-contact"></i>
                        <p><a href="mailto:fines.robert@gmail.com">fines.robert@gmail.com</a></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 text-center">

                        <hr className="primary"></hr>
                        <p>Looking for side work or want to see the code?</p>
                    </div>
                    <div className="col-lg-4 col-lg-offset-2 text-center">
                        <i className="fa fa-github fa-3x sr-github"></i>
                        <p><a href="https://github.com/rfines/cloudinary-lightning-talk.git" target="_blank">https://github.com/rfines/cloudinary-lightning-talk.git</a></p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <i className="fa fa-envelope-o fa-3x sr-contact"></i>
                        <p><a href="mailto:fines@eventr.io">fines@eventr.io</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

Contact.propTypes = {};

Contact.defaultProps = {};
