import React from "react"

class Clock extends React.Component{
  constructor(props){
    super(props)
    this.state = {date:new Date()}
  }
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  componentWillUnmount(){
    clearInterval(this.timerID)
  }
  
  //设置计时器

  render() {
    return (<div>
      <h2>NOW {this.state.date.toLocaleTimeString()}</h2>
    </div>)
  }
}

export default Clock