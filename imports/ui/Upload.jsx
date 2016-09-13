import React, { Component } from 'react';

// Upload component - represents an uploaded item
export default class Upload extends Component {
    constructor(props) {
        console.log(props)
        super(props);

    }

    render(){
        console.log(this.props);
        //the urls look like this: http://res.cloudinary.com/dkb13tu0p/image/upload/v1473782637/uzux8wbajkje0m7zcisz.jpg
        //http://res.cloudinary.com/dkb13tu0p/image/upload/r_100/a_30/v1473782637/uzux8wbajkje0m7zcisz.jpg is a woking image
        //to transform them they need to look like this: http://res.cloudinary.com/dkb13tu0p/image/upload/w_200,g_faces,h_200,.../uzux8wbajkje0m7zcisz.jpg
        let url = this.props.upload.url;

        if(this.props.transform && this.props.transform.length >0){
            let indexStart = this.props.upload.url.indexOf("ad/"); //shortest match for the url segment /upload/
            let indexEnd = indexStart + 3;
            let base = this.props.upload.url.substr(0,indexEnd);
            let end = this.props.upload.public_id+"."+this.props.upload.format
            url = base+this.props.transform+end;

        }

        console.log(url);

       return(
           <div className="col-lg-4">
               <a href={url} className="portfolio-box">
                   <img src={url} className="img-responsive" alt={this.props.upload.originalFileName}></img>
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
// Upload.propTypes = {
//   upload: React.PropTypes.object,
//   transform:React.PropTypes.string,
//   label:React.PropTypes.string
// };

// let facesTransform =  base+ 'g_faces/r_100/a_30/'+end;
// let autoGravitySetHeightWidthCropTransform = base + 'g_auto:70,c_thumb,h_150,w_170/r_10/'+end;
// <a href="#" className="thumbnail">
//     <img src={this.props.upload.url} alt={this.props.upload.originalFileName} className="img-200"></img>
//     <small className="help-block" title={this.props.upload.url}>Original Image</small>
//     <img src={facesTransform} alt={this.props.upload.originalFileName} className="img-200"></img>
//     <small className="help-block" title={facesTransform}>Rotated 30 degrees, Gravity:faces, Corner Radius:100</small>
//     <img src={autoGravitySetHeightWidthCropTransform} alt={this.props.upload.originalFileName} className="img-200"></img>
//     <small className="help-block" title={autoGravitySetHeightWidthCropTransform}>Gravity:auto:70, Crop:thumbnail, height:150px, width:170px, radius:10</small>
// </a>
