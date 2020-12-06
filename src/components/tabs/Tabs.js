import React, { useState } from "react"

// LOAD COMPONENTS
import Tab from "./Tab"

// LOAD STYLING
import "../../styles/Tabs.css"

const Tabs = () => {
  // HOOKS
  const [tab, setTab] = useState({ index: 1, content: "Content of tab 1" })

  // HANDLE FUNCTIONS
  const handleTabSelect = n => setTab({ index: n, content: `Content of tab ${n}` })

  // RENDERS
  const TabNav = [...Array(3).keys()].map(n => <span onClick={() => handleTabSelect(n + 1)}>{`Tab${n + 1}`}</span>)
  return (
    <div className="tabs-container">
      <div className="tabs-nav">{TabNav}</div>
      <div className="content">
        <Tab content={tab.content} />
      </div>
    </div>
  )
}

export default Tabs
