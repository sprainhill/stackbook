import React, { Component } from "react"

const { Provider, Consumer } = React.createContext()

// const passUpUserData = ud => {
//   console.log("user data : ", ud)
// }

// export const UserContext = React.createContext({
//   passUpUserData: "passUpUserData"
// })

class UserContextProvider extends Component {
  state = {
    userData: 'day'
  }

  passUserData = () => {
    this.setState(prevState => {
      return {
        userData: prevState.theme ? 'setUserData' : 'setUserData'
      }
    })
  }


  render() {
    console.log("this.state : ", this.state)
  return <Provider value={{userData: this.state.userData, passUserData: this.passUserData}}>{this.props.children}</Provider>
  }
}

export { UserContextProvider, Consumer as UserContextConsumer }
