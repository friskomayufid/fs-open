import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({func, value}) => {
  return <button onClick={func}>{value}</button>
}

const Statistic = ({text, value}) => {
  return <p>{text} : {value}</p>
}

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })
  let {good, neutral, bad} = feedback

  const handleGood = () => setFeedback({...feedback, good: good + 1})
  const handleNeutral = () => setFeedback({...feedback, neutral: neutral + 1})
  const handleBad = () => setFeedback({...feedback, bad: bad + 1})

  return (
    <div>
      <h1>give feedback</h1>
      <Button func={handleGood} value={'good'} />
      <Button func={handleNeutral} value={'neutral'} />
      <Button func={handleBad} value={'bad'} />
      <h1>statistics</h1>
      <Statistic text={'good'} value={good}/>
      <Statistic text={'neutral'} value={neutral}/>
      <Statistic text={'bad'} value={bad}/>
      <Statistic text={'all'} value={good + neutral + bad}/>
      <Statistic text={'average'} value={(good + neutral + bad) / 3}/>
      <Statistic text={'positive'} value={(good + neutral - bad) / 3}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)