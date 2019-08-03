import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button } from '@tarojs/components'
// 全局样式文件
import './index.scss'
// Toro-ui
import { AtInput, AtForm, AtList, AtListItem } from "taro-ui"

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor(props){
    super(props)
    this.state = {
      val: '',
      todos: [
        {title: '吃饭饭', done: true},
        {title: '睡觉觉', done: false},
        {title: '写代码', done: false}
      ],
      // 判断当前的环境(h5,小程序,支付宝……)
      env: Taro.getEnv()
    }
  }

  handleInput = (value) => {
    // console.log(e.detail.value)
    // console.log(e)
    this.setState({
      // val: e.detail.value
      val: value
    })
  }

  handleClick = () => {
    // const tlist = this.state.todos;
    const val = this.state.val;
    // tlist.push({title: val, done: false})
    this.setState({
      // todos: tlist,
      todos: [...this.state.todos,{title: val, done: false}],
      val: ''
    })
  }

  handleSwithChange = (e, index) => {
    console.log(e,index)
    const tlist = this.state.todos;
    // const tlist = [...this.state.todos]
    tlist[index].done = e.detail.value
    this.setState({
      todos: tlist
    })
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello Taro!当前环境:{this.state.env}</Text>
        <AtInput title="任务内容" value={this.state.val} onChange={this.handleInput.bind(this)}/>
        {/* <Input value={this.state.val} onInput={this.handleInput}></Input> */}
        <Button onClick={this.handleClick}>添加</Button>
        <AtList>
        {
          this.state.todos.map((item, index) => {
            // return <View>{item.title}</View>
            return (
              <AtListItem
                className={{'fdone': item.done}}
                title={item.title}
                isSwitch
                switchIsCheck={item.done}
                onSwitchChange={(e) => {this.handleSwithChange(e,index)}}
                // onSwitchChange={this.handleSwithChange.bind(this,index)}
                >
              </AtListItem>
            )
          })
        }
        </AtList>
      </View>
    )
  }
}
