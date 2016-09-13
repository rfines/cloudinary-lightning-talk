import React from 'react';

export default class Services extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <section id="features" style={{height:"300px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Favorite Features</h2>
                        <hr className="primary"></hr>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="service-box">
                            <i className="fa fa-4x fa-diamond text-primary sr-icons"></i>
                            <h3>Fast CDN</h3>
                            <p className="text-muted">Uploads are delivered via a fast, reliable CDN in any format.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="service-box">
                            <i className="fa fa-4x fa-paper-plane text-primary sr-icons"></i>
                            <h3>Easy to Integrate</h3>
                            <p className="text-muted">This project took less than 10 minutes to integrate Cloudinary!</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="service-box">
                            <i className="fa fa-4x fa-newspaper-o text-primary sr-icons"></i>
                            <h3>Well Documented</h3>
                            <p className="text-muted">Their documentation is clear and complete.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="service-box">
                            <i className="fa fa-4x fa-usd text-primary sr-icons"></i>
                            <h3>Awesome Free Plan</h3>
                            <p className="text-muted">So much space you may never need to pay!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
