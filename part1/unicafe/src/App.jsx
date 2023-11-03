import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  const total = good + bad + neutral;
  const average = total / 3;
  const positivePercent = total > 0? (good / total) * 100: 0;
  return (
    <>
    <table>
      <tbody>
      <StatisticsLine text={'good'} value={good}/>
      <StatisticsLine text={'neutral'} value={neutral}/>
      <StatisticsLine text={'bad'} value={bad}/>
      <StatisticsLine text={'all'} value={total}/>
      <StatisticsLine text={'average'} value={average}/>
      <StatisticsLine text={'positive'} value={positivePercent}/>
      </tbody>
    </table>
    </>
  );
};

const StatisticsLine = ({text, value}) =>{
  return (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
  )
}
export default App;
