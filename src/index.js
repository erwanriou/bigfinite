import React from "react"
import { render } from "react-dom"

// LOAD COMPONENTS
import App from "./components/App"

// DEFINE ROOT AND RENDER ELEMENT
const rootElement = document.getElementById("root")
const appRender = <App />

// RENDER APP
render(appRender, rootElement)
