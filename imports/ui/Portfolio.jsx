import React, { Component } from 'react';
import Uploader from './Uploader.jsx';
import Upload from './Upload.jsx';


const transformArray = [
  'f_auto/',
  'f_auto,g_faces/r_100/a_30/',
  'f_auto,g_auto:70,c_thumb,h_150,w_170/r_10/',
  'f_auto/r_max/',
  'f_auto,w_200,h_300,c_fill,g_auto/',
  'w_200,h_200,c_thumb,g_faces,r_max,l_rs1bjivyxqvm2uye8feo/fl_layer_apply,g_north_east/'];

const labelArray = [
  'Original Image',
  'Format:Auto Gravity:faces Radius:100 Rotated:30',
  'Format:Auto Gravity:auto:70 Radius:10 Height:150px Width:170px',
  'Format:Auto Radius:Max',
  'Format:Auto Crop:Fill Gravity: Auto Width:200px Height: 200px',
  'Overlay transforms: Width: 200px Height: 200px Crop:Thumb Gravity:Faces Radius:Max Apply trasfomrs to overlay and attach it to the image in the top-right corner.'
];

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
  }
  // get a pseudo random label and transform for each image that has been uploaded.
  randomTransform() {
    const index = _.random(0,transformArray.length);
    return { transform: transformArray[index], label: labelArray[index] };
  }
  render() {
        let multiClassName = `row no-gutter popup-gallery`;
        console.log(this.props.uploads)
        if(!this.props.uploads || this.props.uploads.length === 0){
            return (
                <section className="no-padding" id="portfolio">
                    <div className="container-fluid">
                        <div className={multiClassName} style={{"minHeight":"400px"}}>
                            <Uploader />
                        </div>
                    </div>
                </section>
            )
        }else{

            return (

                <section className="no-padding" id="portfolio">
                    <div className="container-fluid">
                    <Uploader />
                        <div className={multiClassName} style={{"minHeight":"400px"}}>
                        {
                            this.props.uploads.map(function(up){
                              let index = _.random(0, transformArray.length);
                              let transformObject = { transform: transformArray[index], label: labelArray[index] };
                              return(
                                <div key={up._id}>
                                    <Upload upload={up} label={transformObject.label} transform={transformObject.transform}/>
                                </div>
                              )
                            })
                        }
                        </div>
                    </div>
                </section>
            );
        }
    }
}
