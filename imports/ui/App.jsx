import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Upload from './Upload.jsx';
import Uploader from './Uploader.jsx';
import { Uploads } from '../../lib/uploads.js';


// App component - represents the whole app
class App extends Component {

    renderUploader(){
        return (<Uploader />);
    }
    render() {
        let uploads = this.props.uploads;
        if(!uploads || uploads.length === 0){
            return(<div className="row">{this.renderUploader()}</div>);
        }else{


            return (
                <div className="row">
                    {this.renderUploader()}
                    {
                        uploads.map(function(up){
                            return <div className="col-xs-6 col-md-4" key={up._id}>

                                <Upload upload={up} />
                            </div>
                        })

                    }
                </div>
            );
        }
    }
}

export default App = createContainer(({ }) => {

    SubsManagerUploads.subscribe('uploads');
    return {uploads:Uploads.find().fetch()};
}, App);
