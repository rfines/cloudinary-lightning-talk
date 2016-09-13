import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Uploads } from '../../lib/uploads.js';

import NavBar from './Navbar.jsx';
import Header from './Header.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';



// App component - represents the whole app
class App extends Component {


    renderNavBar(){
        return (<NavBar />);
    }
    renderHeader(){
        return (<Header />);
    }
    renderAbout(){
        return (<About />);
    }
    renderServices(){
        return (<Services />);
    }
    renderPortfolio(){
        if(this.props.uploads && this.props.uploads.length > 0){
            return (<Portfolio uploads={this.props.uploads}/>);
        }
    }
    renderContact(){
        return (<Contact />);
    }
    render() {
        let navClass=`navbar navbar-default navbar-fixed-top`;

        return (
            <div>
                <nav id="mainNav" className={navClass}>
                    {this.renderNavBar()}
                </nav>
                {this.renderHeader()}
                {this.renderAbout()}
                {this.renderServices()}
                {this.renderPortfolio()}
                {this.renderContact()}
            </div>
        );

    }
}
export default App = createContainer(({ }) => {
    SubsManagerUploads.subscribe('uploads');
    const uploads = Uploads.find().fetch();
    console.log(uploads);
    return {uploads:uploads};
}, App);
