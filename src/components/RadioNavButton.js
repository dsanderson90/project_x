import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"
const RadioNavButton = ({ title }) => {
  return (
    <label
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
        margin: "24px",
        cursor: "pointer",
        position: "relative",
      }}
    >
      <input
        type="radio"
        name="dark"
        sx={{
          opacity: "0",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
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
          margin: ["0px 5px", null, null, "0px 20px"],
          "::before": {
            content: title,
            display: "block",
            width: "inherit",
            color: "#E5FFF0",
            fontSize: "32px",
            height: "inherit",
            borderRadius: "inherit",
            position: "absolute",
            transform: "scale(0)",
            transformOrigin: "center center",
            background: "#53B3CB",
            opacity: "0.3",
            transition: "0.3s",
          },
          "::after": {
            content: title,
            display: "block",
            width: "inherit",
            color: "#F0F5FA",
            fontSize: ["8px", null, null, "32px"],
            height: "inherit",
            borderRadius: "inherit",
            position: "absolute",
            transform: "scale(0)",
            transformOrigin: "center center",
            transition: "0.6s",
            background: "#BB99FF",
          },
        }}
      ></span>
      <span
        className="text"
      ></span>
    </label>
  )
}

export default RadioNavButton
