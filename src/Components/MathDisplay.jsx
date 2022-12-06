import MathJax from 'react-mathjax2'
import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/display-name
export default function MathDisplay ({ text, inline = false }) {
  return (
    <MathJax.Context
      input='tex'
      onLoad={ () => console.log('Loaded MathJax script!') }
      onError={ (MathJax, error) => {
        console.warn(error)
        console.log('Encountered a MathJax error, re-attempting a typeset!')
        MathJax.Hub.Queue(
          MathJax.Hub.Typeset()
        )
      } }
      script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=AM_HTMLorMML"
    >
      <MathJax.Text text={inline ? text : '$$' + text + '$$'}/>
    </MathJax.Context>
  )
}

MathDisplay.propTypes = {
  text: PropTypes.string.isRequired,
  inline: PropTypes.bool
}
