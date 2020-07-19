import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"
const RadioNavButton = ({ title, handleSetSection }) => {
  const handleClick = e => {
    handleSetSection(e.target.name)
  }
  return (
    <label
      htmlFor={title}
      className="hue-rotate"
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
        margin: "20px",
        cursor: "pointer",
        position: "relative",
      }}
    >
      <input
        onClick={handleClick}
        onFocus={handleClick}
        name={title}
        value={title}
        type="radio"
        sx={{
          opacity: "0",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
          ":focus + .design::after": {
            content: `"${title}"`,

          }
        }}
      />
      <span
        className="design"
        sx={{
          // values referencing scales defined in a theme
          width: "16px",
          height: "16px",
          border: "1px solid var(--other)",
          borderRadius: "100%",
          marginRight: "20px",
          position: "relative",
          opacity: "0.6",
          margin: ["0px 5px", null, "0px 10px", "0px 20px"],

          "::before": {
            display: "block",
            width: "inherit",
            fontSize: ["13px", null, null, "32px"],
            height: "inherit",
            borderRadius: "inherit",
            position: "absolute",
            transformOrigin: "center center",
            transition: ".3s",
          },
          "::after": {
            content: `" "`,
            display: "block",
            width: "inherit",
            color: "#FFF",
            fontSize: ["13px", null, null, "26px"],
            height: "inherit",
            borderRadius: "inherit",
            position: "absolute",
            opacity: ".9",
            transform: "scale(.5)",
            transformOrigin: "center center",
            transition: "0.6s",
            background: "#BB99FF",
          },
          ":hover::after":     {
            content: `"${title}"`,
          },

        }}
      ></span>
      <span className="text"></span>
    </label>
  )
}

export default RadioNavButton
