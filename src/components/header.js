/** @jsx jsx */
import { jsx } from "theme-ui"
import Helmet from "react-helmet"
export default function Header({ children, siteTitle, description }) {
  return (
    <header>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>{siteTitle}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {children}
    </header>
  )
}
