import React from "react"

const Tab = ({ content, classes }) => {
  return (
    <div id="content" className={classes.content}>
      {content}
    </div>
  )
}

export default Tab
