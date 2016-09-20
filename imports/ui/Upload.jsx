import React, { Component } from 'react';
import ImageUpload from './ImageUpload.jsx'; // get the image upload component
import VideoUpload from './VideoUpload.jsx'; // get the image upload component


// Upload component - represents an uploaded item
export default class Upload extends Component {
  constructor(props) {
    super(props);
  }
  renderImageUpload(){
    return ( <ImageUpload upload={this.props.upload} label={this.props.label} transform={this.props.transform} /> );
  }
  renderVideoUpload() {
    return ( <VideoUpload upload={this.props.upload} label={this.props.label} /> );
  }
  renderComponentByType(){

    if (this.props.upload && this.props.upload.resource_type === 'image') {
      return this.renderImageUpload();
    } else if (this.props.upload.type.indexOf('video') >= 0){
      return this.renderVideoUpload();
    }
  }
  render() {
    return this.renderComponentByType();
  }
}
