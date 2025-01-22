
import { useState, useEffect } from "react";
import s from "./App.module.css"
import Description from "./components/description/Description.jsx";
import Feedback from "./components/feedback/Feedback.jsx";
import Options from "./components/options/Options.jsx";
import Notification from "./components/notification/Notification.jsx";



const App = () => {
  const [feedback, setFeedback] = useState({ 
    good: 0, 
    neutral: 0, 
    bad: 0 });

  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    if (savedFeedback) {
      setFeedback(savedFeedback);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1
    }));
  };

  const resetFeedback = () => {
    setFeedback({ 
      good: 0, 
      neutral: 0, 
      bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = Math.round((feedback.good / totalFeedback) * 100) || 0;

  return (
    <div className={s.app}>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedbackPercentage={positiveFeedbackPercentage} />
      ) : (
        <Notification message="No feedback given yet" />
      )}
    </div>
  );
};

export default App;