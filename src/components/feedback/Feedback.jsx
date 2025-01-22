import s from "./Feedback.module.css"

const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => (
  <div className={s.feedback}>
    <p className={s.feedbackText}>Good: {feedback.good}</p>
    <p className={s.feedbackText}>Neutral: {feedback.neutral}</p>
    <p className={s.feedbackText}>Bad: {feedback.bad}</p>
    <p className={s.feedbackText}>Total Feedback: {totalFeedback}</p>
    <p className={s.feedbackText}>Positive Feedback: {positiveFeedbackPercentage}%</p>
  </div>
);

export default Feedback;


