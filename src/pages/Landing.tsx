import { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  padding: 10%;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Button = styled.button`
  display: flex;
  flex: 0 0 40px;
  width: 120px;
  justify-content: center;
  align-items: center;
  margin: 16px;
  cursor: pointer;
`

export const Landing = () => {
  const [wondering, setWondering] = useState<boolean>()

  if (wondering === false) {
    return (
      <Wrapper>
        <h1>Ok cool</h1>
      </Wrapper>
    )
  }

  if (wondering === true) {
    return (
      <Wrapper>
        <h1>Stress nöd ok!?</h1>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <h1>Heyhey, du wunderisch dich also wenn die Hochziit genau isch?</h1>
      <Button onClick={() => setWondering(true)}>Ja voll</Button>
      <Button onClick={() => setWondering(false)}>Nope</Button>
    </Wrapper>
  )
}
