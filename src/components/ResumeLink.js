import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"
import useSound from "use-sound"
import levelUp from "../utils/sounds/level-up.mp3"
const ResumeLink = ({ link }) => {
  const [play, { stop }] = useSound(levelUp, { volume: .4})
  return (
    <a
      onMouseEnter={play}
      onMouseOut={stop}
      href={link}
      target="_blank"
      rel="noreferrer nooppener"
      sx={{
        boxShadow: "-5px 5px 0px 0px hsl(233, 9%, 19%)",
        color: "black",
        backgroundColor: "accent",
        padding: "1em 1.5em",
        margin: "40px 0px",
        position: "relative",
        textDecoration: "none",
        border: "solid 3px",
        textTransform: "uppercase",
        "&:hover": {
          border: "2px solid black",
        },
        "::before": {
          content: '""',
          position: "absolute",
          top: "-5px",
          width: "100%",
          left: "-60px",
          height: "100%",
        },
        ":hover::before": {
          content: '"📝"',
          fontSize: "60px",
          position: "absolute",
          textAlign: "center",
          transition: ".5s",
          top: "-70px",
          left: "10%",
          transform: "rotate(360deg)",
          opacity: "1",
        },
        ":focus::before": {
          content: '"📝"',
          fontSize: "60px",
          position: "absolute",
          textAlign: "center",
          transition: ".5s",
          top: "-70px",
          left: "10%",
          transform: "rotate(360deg)",
          opacity: "1",
        },
        "::active": {
          boxShadow: "none",
          top: "5px",
        },
      }}
    >
      Resume
    </a>
  )
}

export default ResumeLink
