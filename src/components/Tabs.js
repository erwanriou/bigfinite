import React, { Component } from "react"
import "../styles/Tabs.css"

export class Tab extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let containerClass = "tab-wrapper"
    let titleClass = "title"
    if (this.props.active) {
      containerClass += " active"
      titleClass += " active"
    }
    return (
      <div className={containerClass} onClick={this.props.onClick}>
        <div className={titleClass}>{this.props.title}</div>
      </div>
    )
  }
}

export class Tabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: this.props.defaultTab || 0
    }
    this.onClickTabHandler = this.onClickTabHandler.bind(this)
  }

  onClickTabHandler(index) {
    this.setState({ activeTab: index })
    if (this.props.onClick) this.props.onClick(index)
  }

  render() {
    const tabsNav = []
    for (var i = 0; i < this.props.children.length; i++) {
      const index = i
      let child = this.props.children[i]
      const props = { ...child.props }
      props.onClick = () => {
        this.onClickTabHandler(index)
      }
      if (this.state.activeTab === i) props.active = true
      else props.active = false
      tabsNav.push(React.cloneElement(child, props))
    }
    const content = tabsNav[this.state.activeTab].props.children

    return (
      <div className="tabs-container">
        <div className="tabs-nav">{tabsNav}</div>
        <div className="content">{content}</div>
      </div>
    )
  }
}

export default Tabs
