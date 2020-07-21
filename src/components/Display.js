import React from "react"
import { Flex } from "theme-ui"

const Display = ({ children }) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
        margin: ["20px 40px", null, null, "30px 390px"],
        padding: [null, null, null, "0 0 0 40px"]
      }}
    >
      {children}
    </Flex>
  )
}

export default Display
