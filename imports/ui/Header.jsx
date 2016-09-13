import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <header style={{height:"600px"}}>
            <div className="header-content">
                <div className="header-content-inner">
                    <h1 id="homeHeading">About Me &amp; Sample Project Setup</h1>
                    <hr></hr>
                    <p style={{paddingLeft:"20px", paddingRight:"20px"}}>Full-stack developer, startup enthusiast, Chief Technical Officer at <a href="http://eventr.io" target="_blank">Eventr.io - We make tradeshows easier -</a>.
                    I am in no way affiliated with Cloudinary, just wanted to pass along an extremely useful tool.</p><br></br>
                    <p>This sample site was created using Meteor.js, React.js, Bootstrap, MongoDb, and of course <a href="http://cloudinary.com" target="_blank">Cloudinary</a>.
                    I took this talk as an opportunity to try to improve my design skills as well as to get comfortable with React.</p>
                </div>
            </div>
        </header>

    );
  }
}
