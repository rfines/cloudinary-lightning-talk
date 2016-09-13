import React, { Component } from 'react';
import Uploader from './Uploader.jsx';
import Upload from './Upload.jsx';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
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

            console.log("else")
            return (
                <section className="no-padding" id="portfolio">
                    <div className="container-fluid">
                    <Uploader />
                        <div className={multiClassName} style={{"minHeight":"400px"}}>
                        {
                            this.props.uploads.map(function(up){
                                return(
                                <div key={up._id}>
                                    <Upload upload={up} label="Original Image" transform="" />
                                    <Upload upload={up} label="Gravity:faces Radius:100 Rotated:30" transform="f_auto,g_faces/r_100/a_30/" />
                                    <Upload upload={up} label="Gravity:auto:70 Radius:10 Height:150px Width:170px" transform="f_auto,g_auto:70,c_thumb,h_150,w_170/r_10/" />
                                </div>)

                            })

                        }
                        </div>
                    </div>
                </section>
            );
        }
    }
}
