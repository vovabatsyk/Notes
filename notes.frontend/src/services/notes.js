import { ActionCreators } from '../redux/notesReducer'
import * as axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://localhost:5001/notes'
})

export const GetNotes = async (dispatch) => {
  try {
    const { data } = await axiosInstance.get()

    dispatch(ActionCreators.setNotes(data))
  } catch (error) {
    console.error(error)
  }
}

export const DeleteNote = async (dispatch, note) => {
  try {
    await axiosInstance.delete(`/${note.id}`)

    dispatch(ActionCreators.deleteNote(note))
  } catch (error) {
    console.error(error)
  }
}

export const NewNote = async (dispatch, note) => {
  try {
    const { data } = await axiosInstance.post('', note)

    dispatch(ActionCreators.newNote(data))
  } catch (error) {
    console.error(error)
  }
}
export const EditNote = async (dispatch, note) => {
  try {
    await axiosInstance.put('', note)

    dispatch(ActionCreators.editNote(note))
  } catch (error) {
    console.error(error)
  }
}
