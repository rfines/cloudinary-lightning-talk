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
  render(){
    return(
      <div className="col-md-12 text-center" style={styles.dropTarget} >
        <div className="text-center drop-target" >
          <input type="file" ref="cloudinaryFileInput" multiple onChange={this.upload.bind(this)} placeholder="Choose your file..." style={{color: "#F05F40"}} />
        </div>
      </div>
    );
  }
}
