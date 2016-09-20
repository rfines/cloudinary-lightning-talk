import React, { Component } from 'react';

// Upload Image component - represents an uploaded image item
export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
  }
  url(){
    // the urls look like this: http://res.cloudinary.com/dkb13tu0p/image/upload/v1473782637/uzux8wbajkje0m7zcisz.jpg
    // http://res.cloudinary.com/dkb13tu0p/image/upload/r_100/a_30/v1473782637/uzux8wbajkje0m7zcisz.jpg is a woking image
    // to transform them they need to look like this: http://res.cloudinary.com/dkb13tu0p/image/upload/w_200,g_faces,h_200,.../uzux8wbajkje0m7zcisz.jpg
    let url = this.props.upload.url;
    if (this.props.transform && this.props.transform.length > 0 ) {
        let indexStart = this.props.upload.url.indexOf("ad/"); //shortest match for the url segment /upload/
        let indexEnd = indexStart + 3;
        let base = this.props.upload.url.substr(0,indexEnd);
        let end = this.props.upload.public_id+"."+this.props.upload.format
        url = base+this.props.transform+end;
    }
    return url;
  }
  render() {

    return(
       <div className="col-lg-4">
           <a href={this.url()} className="portfolio-box">
               <img src={this.url()} className="img-responsive" alt={this.props.upload.originalFileName}></img>
               <div className="portfolio-box-caption">
                   <div className="portfolio-box-caption-content">
                       <div className="project-category text-faded">
                           {this.props.label}
                       </div>
                       <div className="project-name">
                           {this.props.transform}
                       </div>
                   </div>
               </div>
           </a>
       </div>
    );
  }
}
