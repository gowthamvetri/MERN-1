import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)


//React:
//->JavaScript library.
//->Component based structure -> Reusable piece of code.
//->functional components are been used in order to use hooks -> functional components are used to return JSX.
//->Uses VDOM(Virtual document object model) -> Compare the original dom with vdom and updated the UI/Original DOM.
//->SPA (Single page application) the contents get loaded without reloading the entire page.
//->props (Properties) -> passing the value from one function to another through paramater
//->Flow is one way from parents to child
//->Using Call back the data been passed from parents to child

