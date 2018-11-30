import React from 'react'
import styled from 'styled-components'

const Line = styled.p`
  font-weight: ${props => (props.showENG ? '500' : 'normal')};
  margin: 0.3rem 0;
`

const Trans = styled.span`
  display: ${props => (props.showENG ? 'block' : 'none')};
  font-weight: normal;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono,
    Courier New, monospace;

  background: ${props => props.theme.colors['transBg']};
  font-size: 0.9em;
  padding: 0.4rem 0;
  margin: 0;
`

const ItemContent = ({ lines, showENG }) => (
  <>
    {lines.map((line, index) => {
      return (
        <Line key={index} showENG={showENG}>
          {line.maori}
          <Trans showENG={showENG}>{line.eng}</Trans>
        </Line>
      )
    })}
  </>
)

export default ItemContent
