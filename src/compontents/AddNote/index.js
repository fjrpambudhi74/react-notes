import { useState } from "react";
import {BsFillPlusCircleFill} from "react-icons/bs"


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
    <div className="note new-note">
      <textarea placeholder="Type to add note" onChange={handleChange} value={noteText}></textarea>
      <div className="note-footer">
        <small>{charLimit - noteText.length} remaining</small>
        <button onClick={handleSave}><BsFillPlusCircleFill size="1.5em" onClick={handleSave}/></button>
      </div>
    </div>
  )
}

export default AddNote;