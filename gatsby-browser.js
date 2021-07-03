import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps } from "prism-react-renderer"
import vsLight from "prism-react-renderer/themes/vsLight"
import ayuLight from "./src/styles/ayu-highlight-scheme"

/* eslint-disable */
export const Components = {
  pre: props => {
    const className = props.children.props.className || ""
    const matches = className.match(/language-(?<lang>.*)/)

    return (
      // for some reason, I couldn't style this comp.
      // using styled-components....I just resorted to using
      // the global-styles file.
      <Highlight
        {...defaultProps}
        code={props.children.props.children}
        theme={ayuLight}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ""
        }
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  },
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={Components}>{element}</MDXProvider>
}
