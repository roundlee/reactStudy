import React from 'react'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data
    }
  }
  show = () => {
    const data = this.state.data
    const listItems = data.map((item) => <div key={item.toString()}>{item}</div>)
    return <div>{listItems}</div>
  }

  render () {
    return <div>{this.show()}</div>
  }
}

export default List
