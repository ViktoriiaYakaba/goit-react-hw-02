import "./App.css";
import { useState, useEffect } from "react";


const Feedback = ({ good, neutral, bad, total, positivePercentage }) => (
   <div>
    {total > 0 ? (
      <div>
        <h2>Feedback Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive Percentage: {positivePercentage}%</p>
      </div>
    ) : (
      <p>No feedback yet</p>
    )}
  </div>
);

const Options = ({ onFeedback, onReset, hasFeedback }) => {
  return (
    <div className="containerBtn">
      <button className="btn" onClick={() => onFeedback('good')}>Good</button>
      <button className="btn" onClick={() => onFeedback('neutral')}>Neutral</button>
          <button className="btn" onClick={() => onFeedback('bad')}>Bad</button>
      {hasFeedback && <button className="btn" onClick={onReset}>Reset</button>}
    </div>
  );
};


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

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

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
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
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