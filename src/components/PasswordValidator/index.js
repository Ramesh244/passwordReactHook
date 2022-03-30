// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  PasswordContainer,
  Heading,
  Para,
  Input,
  InputContainer,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [userPassword, setUserPassword] = useState('')

  const Error = userPassword.length < 8

  const onChangePassword = event => {
    setUserPassword(event.target.value)
  }

  return (
    <MainContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <InputContainer>
          <Input
            type="password"
            onChange={onChangePassword}
            value={userPassword}
          />
        </InputContainer>
        {Error && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </PasswordContainer>
    </MainContainer>
  )
}

export default PasswordValidator
