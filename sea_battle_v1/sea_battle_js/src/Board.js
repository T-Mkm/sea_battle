import React, { Component } from 'react';
class Board extends Component {
  render() {
    var props = this.props;
    var activeTab = props.activeTab;
    if(activeTab == 0){
      setTimeout(function(){
        $('#board h1').addClass("transition").removeClass("top25vh");
        $('#homeWelcomeButtonsContainer').addClass("transition");
      }, 1000);
      setTimeout(function(){
        $('#homeWelcomeButtonsContainer').removeClass("opacity0");
      },2000);
      setTimeout(function(){
        $('#board h1').removeClass("transition")
        $('#homeWelcomeButtonsContainer').removeClass("transition")
      },3000);
      return (
          <div id="board" className="hero">
            <h1 className="defaultH defaultH1 top25vh">Welcome to the Battle Sea</h1>
            <div id="homeWelcomeButtonsContainer" className="opacity0">
              <button>Play vs Computer</button>
              <button>Play vs Friend</button>
              <button>Play vs ?</button>
            </div>
          </div>
      );
    }
    else if(activeTab == 1){
      return (
          <div id="board" className="hero">
            <h1 className="defaultH defaultH1" style={{margin:"0 auto", textAlign: "center", marginTop: "25vh"}}>Battle Sea</h1>
            <h2 className="defaultH defaultH2" style={{margin:"0 auto", textAlign: "center", marginTop: "20px"}}> A test project to study react & python ahahah hah ahahha hbah ah ah ah ah ah hahahahha ah ahhahahha ahahha ah ahaaha ah</h2>
          </div>
      );
    }

  }
}

export default Board;
//https://codepen.io/trhino/pen/ujHan