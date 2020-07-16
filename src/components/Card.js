/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import Fade from 'react-reveal/Fade';
function Card() {
  return (
    <Box
      sx={{
        color: "text",
        padding: 2,
        marginTop: 4,
        backgroundColor: "background",
        fontFamily: "body",
        display: "grid",
        placeItems: "center",
        letterSpacing: "0.03em",
        fontSize: "1.3rem",
        margin: ["40px", '0px', '80px'],
      }}
    >
      <Fade top delay={1250}>
      <p sx={{fontFamily: "heading", fontWeight: "700", color: "text"}}>Hi, I am David Sanderson</p>
      </Fade>
      <Fade bottom delay={2000}>

      <p sx={{fontFamily: "body", fontWeight: "400"}}>I am a software developer based in Albuquerque, New Mexico.</p>
      </Fade>
    </Box>
  )
}

export default Card
