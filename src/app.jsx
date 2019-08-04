import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  config = {
    pages: ['pages/index/index', 'pages/user/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      selectedColor: '#1296db',
      list: [
        {
          pagePath: 'pages/index/index',
          iconPath: './assets/icon/icon-home.png',
          selectedIconPath: './assets/icon/icon-home-act.png',
          text: '首页'
        },
        {
          pagePath: 'pages/user/index',
          iconPath: './assets/icon/icon-user.png',
          selectedIconPath: './assets/icon/icon-user-act.png',
          text: '个人中心'
        }
      ]
    }
  }

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById('app'))
