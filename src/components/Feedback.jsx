const Feedback = ({ rate, totalFeedback, percentRate }) => {
  if (rate.good !== 0 || rate.neutral !== 0 || rate.bad !== 0)
    return (
      <>
        <p>Good: {rate.good}</p>
        <p>Neutral: {rate.neutral}</p>
        <p>Bad: {rate.bad}</p>
        <p style={{ color: "#9aa7e3" }}>Total: {totalFeedback}</p>
        <p style={{ fontWeight: "bold" }}>Positive: {percentRate}% </p>
      </>
    );
};

export default Feedback;
