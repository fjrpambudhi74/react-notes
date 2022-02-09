import {MdDeleteForever} from "react-icons/md"

const Note = ({text, date}) => {
  return(
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
      <small>{date}</small>
      <MdDeleteForever className="delete-icon" size="1.1em"/>
      </div>
    </div>
  )
}

export default Note