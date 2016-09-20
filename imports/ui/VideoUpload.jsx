import React, { Component } from 'react';

// Upload Image component - represents an uploaded image item
export default class ImageUpload extends Component {
    constructor(props) {
        console.log(props)
        super(props);

  }
  url(){
    // the urls look like this: http://res.cloudinary.com/dkb13tu0p/image/upload/v1473782637/uzux8wbajkje0m7zcisz.jpg
    // http://res.cloudinary.com/dkb13tu0p/image/upload/r_100/a_30/v1473782637/uzux8wbajkje0m7zcisz.jpg is a woking image
    // to transform them they need to look like this: http://res.cloudinary.com/dkb13tu0p/image/upload/w_200,g_faces,h_200,.../uzux8wbajkje0m7zcisz.jpg
    return this.props.upload.url;
  }
  render() {

    return(
       <div className="col-lg-4">
          <a href={this.url.bind(this)} className="portfolio-box">
          <video width="320" height="240" controls>
            <source src={this.url()} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src={this.url()}></iframe>
          </div>
          <div class="embed-responsive embed-responsive-4by3">
            <iframe class="embed-responsive-item" src={this.url()}></iframe>
          </div>
         </a>
       </div>
    );
  }
}
