import React from 'react';
// import '../App'
import './index.css'
import Grid from '../components/Grid/Grid';
import StatBar from '../components/StatBar/StatBar';

class MainPage extends React.Component {
    // this components main purpose is to manage the state!
    //constructor...
    constructor(props) {
        super(props);
        this.state = {
            myHp: 1,
            xCoord: 50,
            yCoord: 50
            // this is percent of screen...
            // 97 seems good x max...
            // left-right needs to be percent because it changes...
            // top-bottom will be the same now

        };
    }

    //need to put a map in state?
    //need to put players location on the screen in state?
    //should map scroll? ...probably not at 1st..

    test() {
        console.log("test");
    }

    handleMove = (event) => {
        if (event.key === "w") {
            console.log("this should handle move.");
        }
    }

    handleMoveUp = () => {
         
         let newY = this.state.yCoord + 5; 
        // console.log("up");
        if ( newY < 100){
        this.setState({yCoord: newY})
        //add 5 to this.state.yCoord
        }
        else {console.log("cannot move up");}
    }
    handleMoveDown = () => {
        
        let newY = this.state.yCoord - 5; 
       // console.log("up");
       if ( newY > -5){//need to fix some css... 
       this.setState({yCoord: newY})
       //add 5 to this.state.yCoord
       }
       else {console.log("cannot move down");}
    }
    handleMoveLeft = () => {
        
        let newX = this.state.xCoord - 5; 
       // console.log("up");
       if ( newX > -5){//need to fix some css... 
       this.setState({xCoord: newX})
       //add 5 to this.state.yCoord
       }
       else {console.log("cannot move left");}
    }
    handleMoveRight = () => {
          
        let newX = this.state.xCoord + 5; 
       // console.log("up");
       if ( newX < 100){//need to fix some css... 
       this.setState({xCoord: newX})
       //add 5 to this.state.yCoord
       }
       else {console.log("cannot move right");}
    }
    // handleClickUp = (event) => {
    //     //   
    //     console.log("up");
    // }
    // handleClickDown = (event) => {
          
    //     console.log("up");
    // }
    // handleClickLeft = (event) => {
          
    //     console.log("up");
    // }
    // handleClickRight = (event) => {
          
    //     console.log("up");
    // }

    render() {
        return (
            <div className="container">
                <div className="row mainPage">
                    <Grid x={this.state.xCoord} y={this.state.yCoord}
                    // handleMoveUp={this.handleMoveUp}
                    // handleMoveDown={this.handleMoveDown}
                    // handleMoveLeft={this.handleMoveLeft}
                    // handleMoveRight={this.handleMoveRight}
                    />
                    {/* screen goes here */}
                    <div className="container">
                        <div className="row">

                        </div>
                        <div className="row">

                        </div>
                    </div>
                    {/* <div className="row"> */}
                    <button onClick={this.handleMoveLeft}>Left</button>
                    <button onClick={this.handleMoveRight}>Right</button>
                    <button onClick={this.handleMoveUp}>Up</button>
                    <button onClick={this.handleMoveDown}>Down</button>
                    {/* </div> */}
                    <StatBar



                    />
                    {/* header-stats */}
                    {/* Grid */}
                    {/* stats */}
                    {/* <div className="col-6"></div> */}
                </div>
            </div>
        );
    }

};

export default MainPage;