import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'



export default function App() {
  const [countArray, setCountArray] = useState([5,6,7])

  return (
    <View>
      <Button
        title="CountArray ++"
        onPress={() => {
          setCountArray((prev)=> (prev.map(x=>x+1)))
        }}
      />
      
        <Text style={{ fontSize: 24 }} >
          {countArray.map((item,index)=>(
            <Text key ={index}>{item} {"\n"}</Text>
          ))}
        </Text>
     
    </View>
  )
}