import React, { Component } from 'react';

class LightPostScene extends Component {

    componentDidMount(){

        // // $('.btn').prepend('<div class="hover"><span></span><span></span><span></span><span></span><span></span></div>');
        // var theParent = document.getElementById("theParent");

        // var theKid = '<div class="hover"><span></span><span></span><span></span><span></span><span></span></div>'

        // // prepend theKid to the beginning of theParent
        // document.getElementsByClassName("btnClicker").insertBefore(theKid, document.getElementsByClassName("btnClicker").firstChild);
    }

    render() {
      return (
        <div className="presentation-content">
            <img src={require('../../assets/new_kyp_streetlight.png')} alt="logo" height="1366" />
        </div>
      )
    }  
  }

  export default LightPostScene;
  