import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"
const RadioNavButton = ({ title }) => {
  return (
    <label>
      <input type="radio" name="dark" />
      <span
        className="design"
        sx={{
          // values referencing scales defined in a theme
          "::before": {
            content: { title },
            display: "block",
            width: "inherit",
            color: "violet",
            fontSize: "32px",
            height: "inherit",
            borderRadius: "inherit",
            position: "absolute",
            transform: "scale(0)",
            transformOrigin: "center center",
          },
          "::after": {
            content: { title },
            display: "block",
            width: "inherit",
            color: "violet",
            fontSize: "32px",
            height: "inherit",
            borderRadius: "inherit",
            position: "absolute",
            transform: "scale(0)",
            transformOrigin: "center center",
          },
        }}
      ></span>
      <span className="text"></span>
    </label>
  )
}

export default RadioNavButton
