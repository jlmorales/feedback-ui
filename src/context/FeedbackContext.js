import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: "This item is from context", rating: 10 },
  ]);

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  const addFeedBack = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  const editFeedback = (item) => {
    setFeedbackEdit({ item: item, edit: true });
  };

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedBack,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
