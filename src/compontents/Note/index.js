import {MdDeleteForever} from "react-icons/md"

const Note = ({id, text, date,bgColor, handleDeleteNote}) => {
  return(
    <div className={`note mt-4 ${bgColor}`}>
      <span>{text}</span>
      <div className="note-footer">
      <small>{date}</small>
      <MdDeleteForever onClick={() => handleDeleteNote(id)} className="delete-icon" size="1.1em"/>
      </div>
    </div>
  )
}

export default Note;