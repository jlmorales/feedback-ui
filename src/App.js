import { useState } from "react";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import "./index.css";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        <FeedbackStats feedback={feedback} />
      </div>
    </>
  );
}

export default App;
