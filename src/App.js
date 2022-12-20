import React, { createContext, useState } from "react"
import ReactSwitch from "react-switch"
import "./App.css"
import Form from "./components/Form"

export const ThemeContext = createContext(null)

const App = () => {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className="App"
        id={theme}
      >
        <Form />
        <div className="switch">
          <label>
            {theme === "light" ? "Lihgt Mode" : "Dark Mode"}
          </label>
          <ReactSwitch
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
        </div>
      </div>
    </ThemeContext.Provider >
  )
}

export default App