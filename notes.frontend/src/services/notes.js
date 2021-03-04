import { ActionCreators } from '../redux/notesReducer'

export const GetNotes = async (dispatch) => {
  try {
    const res = [
      { value: 'Hello React', id: 1 },
      { value: 'Hello Vue', id: 2 },
      { value: 'Hello Angular', id: 3 }
    ]

    dispatch(ActionCreators.setNotes(res))
  } catch (error) {
    console.error(error)
  }
}

export const DeleteNote = async (dispatch, note) => {
  try {
    dispatch(ActionCreators.deleteNote(note))
  } catch (error) {
    console.error(error)
  }
}

export const NewNote = async (dispatch, note) => {
  try {
    const res = { value: note, id: 1 }

    dispatch(ActionCreators.newNote(res))
  } catch (error) {
    console.error(error)
  }
}
export const EditNote = async (dispatch, note) => {
  try {
    const res = { value: note, id: 1 }

    dispatch(ActionCreators.editNote(res))
  } catch (error) {
    console.error(error)
  }
}
