import "./App.css";
import { useState, useEffect } from "react";
import Description from "./Description";
import Options from "./Options";
import Feedback from "./Feedback";


const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    if (savedFeedback) {
      setFeedback(savedFeedback);
    }
  }, []);


  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1
    }));
  };

  const handleReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100);

  return (
    <div className="container">
      <Description />
      <Options onFeedback={handleFeedback} onReset={handleReset} hasFeedback={totalFeedback > 0} />
      {totalFeedback > 0 && (
      <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      )}
    </div>
  );
};

export default App;
