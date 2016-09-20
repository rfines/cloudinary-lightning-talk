import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Uploader component - represents the file upload control
const styles = {
  dropTarget:{
    height: '300px',
    width: '100%',
    paddingTop: '8%',
    paddingLeft: '10%',
  },
};
export default class Uploader extends Component {
  upload(){
    const files = ReactDOM.findDOMNode(this.refs.cloudinaryFileInput).files;
    if (files && files.length > 0) {
      _.each(files, function(file) {
        console.log(file);
        if (file.size <= 10485760) {
          Cloudinary.upload(file,{}, function(err, res){
            if (err) {
              console.error(err);
              alert(err.message);
            } else {
              Meteor.call("insertUpload", res, file.name);
            }
          });
        }else{
          alert('File Size too large!! Try something shorter than a full length motion picture...');
        }
      });
      return ReactDOM.findDOMNode(this.refs.cloudinaryFileInput).value = "";
    }
  }
  uploadFromUrl(){
    const url = ReactDOM.findDOMNode(this.refs.cloudinaryUrlInput).value;
    console.log(url);
    if (url && url.length > 0) {
      Meteor.call("uploadFromUrl", url);
      return ReactDOM.findDOMNode(this.refs.cloudinaryUrlInput).value = "";
    }
  }
  render(){
    return(
      <div className="col-md-12 text-center" style={styles.dropTarget} >
        <div className="text-center drop-target" >
          <div className="col-md-4 col-md-offset-2">
              <input type="file" ref="cloudinaryFileInput" multiple onChange={this.upload.bind(this)} placeholder="Choose your file..." style={{color: "#F05F40"}} className="form-control" />
          </div>
          <div className="col-md-4">
              <input type="text" ref="cloudinaryUrlInput" multiple placeholder="Enter the url to your image..." className="form-control" style={{color: "#F05F40"}} />
              <br />
              <button className="btn btn-success" style={{backgroundColor:"#F05F40", color:"white"}} onClick={this.uploadFromUrl.bind(this)}>Upload From Url</button>
          </div>

        </div>
      </div>
    );
  }
}
