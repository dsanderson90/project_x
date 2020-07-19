import React from "react"
import { Flex } from "theme-ui"

const Display = ({ children }) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: ["20px 40px", null, null, "30px 390px"],
      }}
    >
      {children}
    </Flex>
  )
}

export default Display
