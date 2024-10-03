import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description";
import Feedback from "./components/Feedback";
import Options from "./components/Options";
import Notification from "./components/Notification";

const initialValue = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [rate, setRate] = useState(() => {
    const savedRates = localStorage.getItem("Feedback rates");
    if (savedRates !== null) {
      return JSON.parse(savedRates);
    } else {
      return initialValue;
    }
  });

  const updateFeedback = (x) => {
    setRate({ ...rate, [x]: rate[x] + 1 });
  };

  const totalFeedback = rate.good + rate.neutral + rate.bad;
  const percentRate = Math.round(
    ((rate.good + rate.neutral) / totalFeedback) * 100
  );

  const resetRate = () => {
    setRate(initialValue);
    localStorage.clear();
  };

  useEffect(() => {
    localStorage.setItem("Feedback rates", JSON.stringify(rate));
  }, [rate]);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} resetRate={resetRate} />
      <Feedback
        rate={rate}
        totalFeedback={totalFeedback}
        percentRate={percentRate}
      />
      <Notification rate={rate} />
    </>
  );
}

export default App;
