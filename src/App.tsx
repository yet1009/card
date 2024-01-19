import React, { useContext } from 'react'
import './App.css'
import Text from '@shared/Text'
import Button from '@shared/Button'
import Input from '@shared/Input'
import TextField from '@shared/TextField'
import Alert from '@shared/Alert'
import { useAlertContext } from '@/contexts/AlertContext'

function App() {
  const { open } = useAlertContext()

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

      {/*<Alert*/}
      {/*  title="알럿이 있음"*/}
      {/*  description="안녕하세요"*/}
      {/*  open={true}*/}
      {/*  onButtonClick={() => {}}*/}
      {/*/>*/}

      <Button
        onClick={() => {
          open({
            title: '카드신청완료',
            onButtonClick: () => {},
          })
        }}
      >
        Alert 오픈
      </Button>
    </div>
  )
}

export default App
