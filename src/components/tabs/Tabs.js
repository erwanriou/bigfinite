import React, { useState } from "react"

// LOAD COMPONENTS && STYLING
import Tab from "./Tab"
import { useStyles } from "../../styles/tabs.styles.js"

const Tabs = () => {
  // HOOKS
  const classes = useStyles()
  const [tab, setTab] = useState({ index: 1, content: "Content of tab 1" })

  // HANDLE FUNCTIONS
  const handleTabSelect = n => setTab({ index: n + 1, content: `Content of tab ${n + 1}` })
  const handleStyles = n => {
    const isSelect = tab.index === n + 1 && "#0095f2"
    return { color: isSelect, borderColor: isSelect }
  }

  // RENDERS
  const TabNav = [...Array(3).keys()].map(n => (
    <h3 className={classes.tabWrapper} style={handleStyles(n)} onClick={() => handleTabSelect(n)}>{`Tab${n + 1}`}</h3>
  ))
  return (
    <div className={classes.tabContainer}>
      <div className={classes.tabNav}>{TabNav}</div>
      <Tab content={tab.content} classes={classes} />
    </div>
  )
}

export default Tabs
