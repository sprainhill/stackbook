import React, { Component } from "react"

const { Provider, Consumer } = React.createContext()


class UserContextProvider extends Component {
  state = {
    userData: null
  }

  passUserData = () => {
    this.setState(prevState => {
      return {
        userData: prevState.theme ? 'setUserData' : 'setUserData'
      }
    })
  }


  render() {
  return <Provider value={{userData: this.state.userData, passUserData: this.passUserData}}>{this.props.children}</Provider>
  }
}

export { UserContextProvider, Consumer as UserContextConsumer }
