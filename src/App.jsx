import './App.css'
import Description from './components/Description/Description.jsx'
import Options from './components/Options/Options.jsx'
import Feedback from './components/Feedback/Feedback.jsx'
import { useState } from 'react'



const App = () => {
  
  const [feedbackTypes, setFeedbackType] = useState({
	good: 0,
	neutral: 0,
	bad: 0
}
  );

  const updateFeedback = feedbackType => { 
    setFeedbackType(prevState => (
      {
        ...prevState,
        [feedbackType]: prevState[feedbackType] + 1
      }
    ));
  };

  
  const resetBtn = () => {
    setFeedbackType({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;
  const positive = Math.round((feedbackTypes.good / totalFeedback) * 100);


  return <>
    <Description />
    <Options updateFeedback={updateFeedback} onReset={resetBtn} />
    <Feedback feedbackTypes={feedbackTypes} totalFeedback={totalFeedback} positive={positive} />
  </>;
  
}

export default App
