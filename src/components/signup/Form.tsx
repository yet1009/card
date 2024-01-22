import Flex from '@shared/Flex'
import TextField from '@shared/TextField'
import FixedBottomButton from '@shared/FixedBottomButton'
import { css } from '@emotion/react'
import Spacing from '@shared/Spacing'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { FormValues } from '@/models/signup'
import validator from 'validator'

//errors = { email: '이메일 형식을 확인해주세요', rePassword: '비밀번호를 확인해주세요'}

const Form = ({ onSubmit }: { onSubmit: (formValues: FormValues) => void }) => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
    rePassword: '',
    name: '',
  })

  const [dirty, setDirty] = useState<Partial<FormValues>>({})

  const errors = useMemo(() => validate(formValues), [formValues])

  const handleFormValues = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    let { name } = e.target
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }, [])

  const handleBlur = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setDirty((prev) => ({
      ...prev,
      [e.target.name]: 'true',
    }))
  }, [])

  const possible = Object.keys(errors).length === 0

  return (
    <Flex direction="column" css={formcontainerStyles}>
      <TextField
        label="이메일"
        name="email"
        placeholder="aa@gmail.com"
        value={formValues.email}
        onChange={handleFormValues}
        hasError={Boolean(dirty.email) && Boolean(errors.email)}
        helpMesssage={Boolean(dirty.email) ? errors.email : ''}
        onBlur={handleBlur}
      />
      <Spacing size={16} />
      <TextField
        label="패스워드"
        name="password"
        placeholder="password"
        value={formValues.password}
        onChange={handleFormValues}
        hasError={Boolean(dirty.password) && Boolean(errors.password)}
        helpMesssage={Boolean(dirty.password) ? errors.password : ''}
        type="password"
        onBlur={handleBlur}
      />
      <Spacing size={16} />
      <TextField
        label="패스워드 재확인"
        name="rePassword"
        placeholder="password"
        value={formValues.rePassword}
        onChange={handleFormValues}
        hasError={Boolean(dirty.rePassword) && Boolean(errors.rePassword)}
        helpMesssage={Boolean(dirty.password) ? errors.rePassword : ''}
        type="password"
        onBlur={handleBlur}
      />
      <Spacing size={16} />
      <TextField
        label="이름"
        placeholder="name"
        value={formValues.name}
        onChange={handleFormValues}
        name="name"
        hasError={Boolean(dirty.name) && Boolean(errors.name)}
        helpMesssage={Boolean(dirty.name) ? errors.name : ''}
        onBlur={handleBlur}
      />
      <FixedBottomButton
        label="회원가입"
        onClick={() => {
          onSubmit(formValues)
        }}
        disabled={!possible}
      />
    </Flex>
  )
}

function validate(formValues: FormValues) {
  let errors: Partial<FormValues> = {}

  if (!validator.isEmail(formValues.email)) {
    errors.email = '이메일 형식을 확인해주세요'
  }

  if (formValues.password.length < 8) {
    errors.password = '비밀번호를 8글자 이상 입력해주세요.'
  }

  if (formValues.rePassword.length < 8) {
    errors.rePassword = '비밀번호를 8글자 이상 입력해주세요.'
  } else if (!validator.equals(formValues.rePassword, formValues.password)) {
    errors.rePassword = '비밀번호를 확인해주세요'
  }

  if (formValues.name.length < 2) {
    errors.name = '이름은 2글자 이상 입력해주세요.'
  }

  return errors
}

const formcontainerStyles = css`
  padding: 24px;
`

export default Form
