import { useState } from "react/cjs/react.development";
import NotesList from "./compontents/NotesList";
import Search from "./compontents/Search";
import { nanoid } from "nanoid"

function App() {


  const colors = ['bg-slate-200', 'bg-gray-200', 'bg-zinc-200', 'bg-neutral-200', 'bg-stone-200', 'bg-red-200', 'bg-orange-200', 'bg-amber-200', 'bg-yellow-200', 'bg-lime-200', 'bg-green-200', 'bg-emerald-200', 'bg-teal-200', 'bg-cyan-200', 'bg-sky-200', 'bg-blue-200', 'bg-indigo-200', 'bg-violet-200', 'bg-purple-200', 'bg-fuchsia-200', 'bg-pink-200', 'bg-rose-200']

  const randomColors = () => {
    const len = colors.length;
    const randomNum = Math.floor(Math.random() * len);
    const color = colors[randomNum]
    return color
  }

  const [searchText, setSearchText] = useState('');

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note!',
      date: '09/02/2022',
      color: randomColors()
    },
    {
      id: nanoid(),
      text: 'This is my second note!',
      date: '09/02/2022',
      color: randomColors()
    },
    {
      id: nanoid(),
      text: 'This is my third note!',
      date: '09/02/2022',
      color: randomColors()
    },
  ])

  const addNote = (text) => {
    console.log(randomColors())
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      color: randomColors()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }
  return (
    <div className="container">
      <Search handleSearchNote={setSearchText}/>
      <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
    </div>
  );
}

export default App;
