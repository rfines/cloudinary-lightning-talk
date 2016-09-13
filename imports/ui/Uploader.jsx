import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Uploader component - represents the file upload control
const styles = {
    dropTarget:{
        height:'300px',
        width:'100%'
    }
}
export default class Uploader extends Component {

    upload(){
        const files = ReactDOM.findDOMNode(this.refs.cloudinaryFileInput).files;
        if(files && files.length > 0){
            _.each(files, function(file){
                console.log(file);
                Cloudinary.upload(file,{}, function(err, res){
                    if(err){
                        console.error(err);
                    }else{
                        Meteor.call("insertUpload", res, file.name);

                    }
                });
            });
            return ReactDOM.findDOMNode(this.refs.cloudinaryFileInput).value = "";
        }

    }
    render(){
        let dropTargetClasses = `text-center drop-target`;
        let containerClasses = `col-md-12 jumbotron text-center`;
       return(
           <div className={containerClasses} >
               <div className={dropTargetClasses} >
                   <input type="file" ref="cloudinaryFileInput" multiple onChange={this.upload.bind(this)} placeholder="Choose your file..." />

               </div>
           </div>
        );
    }
}
