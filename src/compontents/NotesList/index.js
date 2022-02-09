import Note from "../Note"
import { useState } from "react"
import { nanoid } from "nanoid"

const NotesList = () => {
  const [notes, useNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note!',
      date: '09/02/2022'
    },
    {
      id: nanoid(),
      text: 'This is my second note!',
      date: '09/02/2022'
    },
    {
      id: nanoid(),
      text: 'This is my third note!',
      date: '09/02/2022'
    },
  ])
  return (
    <div className="notes-list">
      {notes.map((note) => {
        return <Note id={note.id} text={note.text} date={note.date}/>
      })}
    </div>
  )
}

export default NotesList