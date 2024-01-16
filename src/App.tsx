import React from 'react'
import './App.css'
import Text from '@shared/Text'
import Button from '@shared/Button'

function App() {
  return (
    <div>
      <Text typography="t1" display="block" color="red">
        t1
      </Text>
      <Text typography="t2">t2</Text>
      <Text typography="t3">t3</Text>
      <Text typography="t4">t3</Text>

      <div style={{ height: 10, width: '100%', background: '#efefef' }}>
        <Button color="success">클릭해주세요</Button>
        <Button color="error">클릭해주세요</Button>
        <Button color="error">클릭해주세요</Button>
        <Button full={true} weak={true}>
          클릭해주세요
        </Button>
        <Button>클릭해주세요</Button>
      </div>
    </div>
  )
}

export default App
