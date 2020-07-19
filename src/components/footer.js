import React from "react"
import GithubButtons from "./GithubButtons/GithubButtons"
import { FooterWrap } from "./Primitives"

const Footer = () => {
  return (
    <FooterWrap>
      <p>
        © {new Date().getFullYear()} - Template developed by{" "}
        <a
          href="https://github.com/turq84"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kayla Gordon
        </a>
      </p>
      <GithubButtons />
    </FooterWrap>
  )
}

export default Footer
