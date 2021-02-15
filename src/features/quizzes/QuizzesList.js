import React from 'react'
import { useSelector } from 'react-redux'

export const QuizzesList = () => {
  const quizzes = useSelector((state) => state.quizzes)
  const question = '韻を踏んでいるワードを選択して下さい。'

  const renderedQuizzes = quizzes.map((quiz) => (
    <question className="quiz-excerpt" key={quiz.id}>
      <h3>{question}</h3>
      <p className="quiz-rhyme">{quiz.rhyme}</p>
    </question>
  ))

  return (
    <section className="quizzes-list">
      <h2>Quiz</h2>
      {renderedQuizzes}
    </section>
  )
}
