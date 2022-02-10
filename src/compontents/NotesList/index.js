import Note from "../Note"
import AddNote from "../AddNote"
import { useState } from "react"
import { nanoid } from "nanoid"

const NotesList = () => {
  const [notes, setNotes] = useState([
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

  const addNote = (text) => {
    // console.log(text)
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }

  return (
    <div className="notes-list">
      {notes.map((note) => {
        return <Note id={note.id} text={note.text} date={note.date}/>
      })}
      <AddNote handleAddNote={addNote}/>
    </div>
  )
}

export default NotesList