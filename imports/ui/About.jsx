import React from 'react';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

        <section className="bg-primary" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 text-center">
                        <h2 className="section-heading text-center">Cloudinary does anything you need!</h2>
                        <hr className="light"></hr>
                        <p className="text-faded">Images, files, videos, sprite generation, you name it, if you need to upload something and then mess the bytes up, you can do it with Cloudinary.<br></br></p>
                        <a href="#features" className="page-scroll btn btn-default btn-xl sr-button">See More!</a>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
