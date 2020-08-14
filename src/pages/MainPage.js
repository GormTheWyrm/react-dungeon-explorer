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
            myHp: 1
        };
    }

    handleMove(){
       console.log("this should handle move.");
    }

    render() {
        return (
            <div className="row mainPage">
                <Grid />
                <StatBar />
                {/* header-stats */}
                {/* Grid */}
                {/* stats */}
                {/* <div className="col-6"></div> */}
            </div>
        );
    }

};

export default MainPage;