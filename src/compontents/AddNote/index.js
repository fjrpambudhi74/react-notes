import { useState } from "react";

const AddNote = ({handleAddNote}) => {
  const [noteText, setNoteText] = useState('');
  const charLimit = 200;

  const handleChange = (event) => {
    // console.log(event.target.value)
    if(charLimit - event.target.value.length >= 0){
      setNoteText(event.target.value)
    }
  }

  const handleSave = () => {
    if(noteText.trim().length > 0){
      handleAddNote(noteText)
      setNoteText('')
    }
  }

  return(
    <div className="notes-new">
      <textarea rows="8" placeholder="Type to add note" onChange={handleChange} value={noteText}></textarea>
      <div className="note-footer">
        <small>{charLimit - noteText.length} remaining</small>
        <button className="save" onClick={handleSave}>Save</button>
      </div>
    </div>
  )
}

export default AddNote;