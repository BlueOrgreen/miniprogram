import { Component, PropsWithChildren } from "react"
import "./app.less"

class App extends Component<PropsWithChildren> {
  componentDidMount(): void {
    console.log("componentDidMount===>App")
  }

  onReady() {
    console.log("onReady===>App")
  }

  render() {
    const { children } = this.props
    return children
  }
}

// function App({ children }: PropsWithChildren<any>) {

//   useEffect(() => {
//     console.log('Test ===> App UseEffect.')
//   }, [])

//   // children 是将要会渲染的页面
//   return children
// }

export default App
