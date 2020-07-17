import React from "react"
import { Flex } from "theme-ui"

const Display = ({ children }) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: ["40px 80px", null, null, "40px 380px"],
      }}
    >
      {children}
    </Flex>
  )
}

export default Display
