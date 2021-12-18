import { useState } from "react";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import "./index.css";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";

function App() {
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedBack = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedBack} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        <FeedbackStats feedback={feedback} />
      </div>
    </>
  );
}

export default App;
