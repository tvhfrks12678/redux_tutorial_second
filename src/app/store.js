import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice'
import quizzesReducer from '../features/quizzes/quizzesSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    quizzes: quizzesReducer,
  },
})
