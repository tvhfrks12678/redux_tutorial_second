import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { AddPostForm } from './features/posts/AddPostForm'

import { PostsList } from './features/posts/PostsList'
import { QuizzesList } from './features/quizzes/QuizzesList'
import { AddQuizForm } from './features/quizzes/AddQuizForm'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
                <AddQuizForm />
                <QuizzesList />
              </React.Fragment>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
