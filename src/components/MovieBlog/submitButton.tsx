import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'


export interface IButton1Props {
}

export  class Button1 extends React.Component<IButton1Props> {
 
state = { open: false, result: 'please make sure before submition.' }

  show = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ result: 'confirmed', open: false })
  handleCancel = () => this.setState({ result: 'cancelled', open: false })

  render() {
    const { open, result } = this.state

    return (
      <div>
        <p>
          Confirmed?: <em>{result}</em>
        </p>

        <Button color = 'green' onClick={this.show}>button</Button>
        <Confirm
          open={open}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </div>
    )
  }
}

export default Button1;