const Options = ({ updateFeedback, resetRate }) => {
  return (
    <>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      <button
        onClick={() => resetRate("reset")}
        style={{ backgroundColor: "#cdd6ff" }}
      >
        Reset
      </button>
    </>
  );
};

export default Options;
