import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"
import { useColorMode } from 'theme-ui'

const RadioNavButton = ({ title, handleSetSection }) => {
  const [colorMode, setColorMode] = useColorMode()
const isColorModeToggle = title == "🌞" || title == "🌕"
  const handleClick = e => {
    if(!isColorModeToggle) {
      handleSetSection(e.target.name)
    }
    if(isColorModeToggle) {
        setColorMode(colorMode === 'default' ? 'dark' : 'default')
    }
  }
  return (
    <label
      className={!isColorModeToggle && "hue-rotate"}
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

        }}
      />
      <span
        className="design"
        sx={{
          // values referencing scales defined in a theme
          width: "16px",
          height: "16px",
          border: "1px solid #53B3CB",
          borderRadius: "100%",
          marginRight: "20px",
          position: "relative",
          opacity: "0.6",
          margin: ["0px 5px", null, "0px 10px", "0px 20px"],

          "::before": {
            display: "block",
            width: "inherit",
            height: "inherit",
            borderRadius: "inherit",
            position: "absolute",
            transformOrigin: "center center",
            transition: ".3s",
          },
          "::after": {
            content: `"${title}"`,
            display: "block",
            width: "inherit",
            color: "text",
            fontSize: ["20px", null, null, "28px"],
            height: "inherit",
            borderRadius: "inherit",
            position: "absolute",
            transform: "scale(.5)",
            transformOrigin: "center center",
            transition: "0.6s",
            background: "#BB99FF",
          },
        }}
      ></span>
      <span className="text"></span>
    </label>
  )
}

export default RadioNavButton
