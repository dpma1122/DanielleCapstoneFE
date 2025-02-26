import React, { useState } from "react";
import axios from "axios";
 
const EditJournalForm = ({ journal, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    title: journal.title,
    content: journal.content,
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/journals/${journal._id}`,
        formData
      );
      onUpdate(response.data);
    } catch (error) {
      console.error("Error updating journal:", error);
    }
  };
 
  return (
    <form onSubmit={handleUpdate}>
      <h2>Edit Journal Entry</h2>
      <input
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />
      <textarea
        name="content"
        placeholder="Content"
        value={formData.content}
        onChange={handleChange}
      />
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};
 
export default EditJournalForm;