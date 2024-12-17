import './App.css'
import Description from './components/Description/Description.jsx'
import Options from './components/Options/Options.jsx'
import Feedback from './components/Feedback/Feedback.jsx'
import Notification from './components/Notification/Notification.jsx'
import { useEffect, useState } from 'react'



const App = () => {
  
  const [feedbackTypes, setFeedbackType] = useState(
    () => {
    const savedFeedback = window.localStorage.getItem("feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
      return {
        good: 0,
        neutral: 0,
        bad: 0
      };
}
  );

  useEffect(() => { window.localStorage.setItem("feedback", JSON.stringify(feedbackTypes)) }, [feedbackTypes]);

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
  const positive = `${Math.round((feedbackTypes.good / totalFeedback) * 100)}%`;


  return <div className="wrapper">
    <Description />
    <Options updateFeedback={updateFeedback} onReset={resetBtn} totalFeedback={totalFeedback} />
    {totalFeedback > 0 ? (<Feedback feedbackTypes={feedbackTypes} totalFeedback={totalFeedback} positive={positive} />) : (<Notification /> ) }
  </div>;
  
}

export default App
