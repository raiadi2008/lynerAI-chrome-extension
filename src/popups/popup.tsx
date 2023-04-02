import React from "react"
import { createRoot } from "react-dom/client"
import { PopupPanel } from "./popup_panel"

const domNode = document.createElement("div")
domNode.classList.add("popup")
const root = createRoot(domNode)
document.body.appendChild(domNode)
root.render(<PopupPanel />)
