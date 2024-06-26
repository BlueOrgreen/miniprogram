import { View, Text } from "@tarojs/components"
import "./index.less"
import { useEffect } from "react"

export default function Index() {
  useEffect(() => {
    console.log("Index UseEffect===>")
  }, [])

  return (
    <View className="index">
      <Text>Hello world!111222333444</Text>
    </View>
  )
}
