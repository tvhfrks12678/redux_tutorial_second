import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { quizAdded } from './quizzesSlice'

export const AddQuizForm = () => {
  const [rhyme, setRhyme] = useState('')
  const [choice, setChoice] = useState('')

  const dispatch = useDispatch()

  const onRhymeChanged = (e) => setRhyme(e.target.value)
  const onChoiceChanged = (e) => setChoice(e.target.value)

  const onSaveQuizzClicked = () => {
    if (rhyme && choice) {
      dispatch(
        quizAdded({
          id: nanoid(),
          rhyme,
          choice,
        })
      )
    }
  }

  return (
    <section>
      <h2>クイズの追加</h2>
      <label htmlFor="wordRhyme">Rhyme:</label>
      <input
        type="text"
        name="wordRhyme"
        id="wordRhyme"
        value={rhyme}
        onChange={onRhymeChanged}
      />
      <label htmlFor="quizChoice">選択肢:</label>
      <input
        type="text"
        name="quizChoice"
        id="quizChoice"
        value={choice}
        onChange={onChoiceChanged}
      />
      <button type="button" onClick={onSaveQuizzClicked}>
        Save Quiz
      </button>
    </section>
  )
}
