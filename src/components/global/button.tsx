import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { Children } from 'react'

interface Props {
  border?: string;
  color: string;
  children?: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string
  width?: string;
}

function Button(props:Props){
  return (
    <Pressable 
        className={` 
          bg-[#ebd9eb]
          rounded-3xl 
          py-2 
          px-4 
          m-4
          `}
    >
          <Text className="text-center text-black font-bold text-base">{props.children}</Text>
    </Pressable>
  )
}

export default Button;
