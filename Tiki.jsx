import React, { useState } from 'react'
import { View, Text, Button,Image, Pressable,TouchableOpacity ,StyleSheet} from 'react-native'



export default function App() {
 const [count, setCount] = useState(1)
  return (
    <View style={{
      padding:20
    }}>
      <View style={{display:"flex",flexDirection:"row",gap:20}}>
      <View>
      <Image source={require('./images/book.png')}  />
      </View>
     <View style={{
       display:"flex",
       justifyContent:"space-between"
     }}>
        <Text style={styles.title}>Nguyên hàm tích phân và ứng dụng</Text>
        <Text style={{...styles.title}}>Cung cấp bởi Tiki Trading</Text>
        <Text style={{fontSize:18,fontWeight:700,color:"#EE0D0D"}}>144.800 đ</Text>
        <Text style={{fontSize:12,fontWeight:700,color:"#808080",textDecorationLine:"line-through"}}>999.000 đ</Text>
        <View style={{display:"flex", flexDirection:"row"}}>
              <View style={{display:"flex", flexDirection:"row",gap:10}}><Pressable onPress={() => {
          setCount((prev)=> (prev - 1))
        }}><Text style={styles.buttonCount}>-</Text></Pressable>
              <Text>{count}</Text>
              <Pressable onPress={() => {
          setCount((prev)=> (prev + 1))
        }}><Text style={styles.buttonCount}>+</Text></Pressable></View>
              <Pressable style={{flex:1}}><Text style={{textAlign:"right",...styles.textBlue}}>Mua sau</Text></Pressable>
        </View>
     </View></View>
     <View style={{display:"flex",flexDirection:"row",gap:10,marginVertical:30}}>
      <Text style={styles.title}>Mã giảm giá đã lưu</Text>
      <Text style={styles.textBlue}>Xem tại đây</Text>
     </View>
     <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
      <View style={{display:"flex",flexDirection:"row", alignItems:"center",padding:10,borderColor:"#808080",borderWidth:1,borderStyle:"solid",gap:10}}><View style={{backgroundColor:"#F2DD1B",width:30,height:15}}></View>
      <Text style={{...styles.title,fontSize:20}}>Mã giảm giá</Text></View>
      <Pressable >
        <Text style={{padding:10,color:"white",fontSize:20,fontWeight:700,backgroundColor:"#0A5EB7",borderRadius:4}}>Áp dụng</Text>
      </Pressable>
     </View>
     <View></View>
     <View>
      <Text>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
      <Text>Nhập tại đây?</Text>
     </View>
     <View>
      <Text>Tạm tính</Text>
      <Text>141.800 đ</Text>
     </View>
     <View></View>
     <View>
      <Text>Thành tiền</Text>
      <Text>141.800 đ</Text>
     </View>
     <TouchableOpacity >
      <Text>TIẾN HÀNH ĐẶT HÀNG</Text>
     </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
  title:{
    fontSize:12,
    fontWeight:700,
    
  },
  buttonCount:{
    color:"#011627",
    backgroundColor:"#C4C4C4",
    padding:"2",
    width:20,
    height:20,
    textAlign:"center"
  },
  textBlue:{
fontSize:12,fontWeight:700,color:"#134FEC"
  }
})