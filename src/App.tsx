import React from 'react'
import './App.css'
import Text from '@shared/Text'
import Button from '@shared/Button'
import Input from '@shared/Input'
import TextField from '@shared/TextField'

function App() {
  return (
    <div>
      <Text typography="t1" display="block" color="red">
        t1
      </Text>
      <Text typography="t2">t2</Text>
      <Text typography="t3">t3</Text>
      <Text typography="t4">t3</Text>

      <div style={{ width: '100%', background: '#efefef' }}>
        <Button color="success">클릭해주세요</Button>
        <Button color="error">클릭해주세요</Button>
        <Button color="error">클릭해주세요</Button>
        <Button full={true} weak={true}>
          클릭해주세요
        </Button>
        <Button>클릭해주세요</Button>
      </div>

      <Input placeholder="로그인" aria-invalid={false} />
      <Input aria-invalid={true} />

      <TextField label="아이디" />
    </div>
  )
}

export default App
