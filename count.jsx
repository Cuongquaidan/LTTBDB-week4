import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'



export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View>
      <Button
        title="Count ++"
        onPress={() => {
          setCount((prev)=> (prev + 1))
        }}
      />
      
        <Text style={{ fontSize: 24 }} >
          {count}
        </Text>
     
    </View>
  )
}