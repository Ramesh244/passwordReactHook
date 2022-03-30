// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  height: 100vh;
  width: 100vw;
`

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #475569;
  height: 200px;
  width: 200px;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: Roboto;
  font-weight: bold;
`

export const Para = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-family: Roboto;
`

export const Input = styled.input`
  height: 20px;
  width: 150px;
`
export const InputContainer = styled.div`
  height: 50px;
  width: 200px;
`
export const ErrorMsg = styled.p`
  color: red;
  font-size: 10px;
  font-family: Roboto;
`
