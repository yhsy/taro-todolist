import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button } from '@tarojs/components'
// 全局样式文件
// import './index.scss'
// Toro-ui
// import { AtInput, AtForm, AtList, AtListItem } from 'taro-ui'

export default class User extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  render() {
    return (
      <View className='index'>
        <Text>个人中心</Text>
      </View>
    )
  }
}
