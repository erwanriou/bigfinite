import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
  tabContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  tabNav: {
    display: "flex",
    "& h3": {
      color: "#8a959e",
      fontSize: "13px",
      fontWeight: "600",
      textAlign: "center"
    }
  },
  tabWrapper: {
    flex: "auto",
    cursor: "pointer",
    padding: "8px",
    borderBottom: "2px solid #8a959e"
  },
  content: {
    padding: "16px 8px",
    fontSize: "14px",
    color: "#4c5769"
  }
})
