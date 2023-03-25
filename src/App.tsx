import React from 'react'

const App = () => {
  return (
    <div className="App">
      <form>
        <label>First Name: </label>
        <input type="text" />
        <label>Last Name: </label>
        <input type="text" />
        <label>Email: </label>
        <input type="email" />
        <label>Age: </label>
        <input type="number" />
        <label>Password: </label>
        <input type="password" />
        <label>Confirm Password: </label>
        <input type="password" />
      </form>
    </div>
  )
}

export default App
