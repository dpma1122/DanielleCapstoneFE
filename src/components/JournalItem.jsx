import { useState } from "react";

export default function JournalItem(props) {
    
  return (
    <div>
      <p>{props.journal.title}</p>
      <p>{props.journal.content}</p>
    </div>
  );
}
