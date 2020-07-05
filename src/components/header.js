/** @jsx jsx */
import { jsx } from "theme-ui"
export default function Header({children}) {
  return (
    <header
      sx={{
        padding: 4,
        color: "primary",
        backgroundColor: "primary",
      }}
    >
      {children}
      hello
    </header>
  )
}