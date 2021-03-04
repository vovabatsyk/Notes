import React from 'react'
import './App.css'
import { NotesTable } from './components/NotesTable'
import { NewNoteModal } from './components/NoteModal'

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>My Notes</h1>
      <div style={{ maxWidth: '95%', margin: '0 auto' }}>
        <div style={{ textAlign: 'right', margin: '5px 0 ' }}>
          <NewNoteModal />
        </div>
        <NotesTable />
      </div>
    </div>
  )
}

export default App
