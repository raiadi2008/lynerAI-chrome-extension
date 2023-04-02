import React from "react"
import { createRoot } from "react-dom/client"

const domNode = document.createElement("div")
const root = createRoot(domNode)
document.body.appendChild(domNode)
root.render(<div>Popup</div>)
