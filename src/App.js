//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const startScore = 0;
  const [homeScore, setHomeScore] = useState(startScore);
  const [awayScore, setAwayScore] = useState(startScore);
  const [randNum, setRandNum] = useState(0);

  const [quarter, setQuarter] = useState(1);


  function randomAction() {

    // random run distance between 0 - (110-current)
    // if newRun < minToGo -> if down >= 3 -> fail, switch; else down++, ballOn+newRun, minToGo - newRun
    // 
    // 



  }




  // helper functions
  function addTouchdown(currentScore) {
    return currentScore + 7;
  }
  function addFieldgoal(currentScore) {
    return currentScore + 3;
  }

  // callback variables
  const doHomeTouchDown = () => {setHomeScore(addTouchdown(homeScore))}
  const doAwayTouchDown = () => {setAwayScore(addTouchdown(awayScore))}
  const doHomeFieldgoal = () => {setHomeScore(addFieldgoal(homeScore))}
  const doAwayFieldgoal = () => {setAwayScore(addFieldgoal(awayScore))}

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={doHomeTouchDown} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={doHomeFieldgoal} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={doAwayTouchDown} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={doAwayFieldgoal} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
      <section className="history">
        <button onClick={() => {setRandNum(Math.floor(Math.random()*100))}} className="awayButtons__touchdown">{randNum}</button>
      </section>
    </div>
  );
}

export default App;
