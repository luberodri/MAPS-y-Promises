import React from "react"


export default class Footer extends React.Component {

  render() {
    console.log(this.props)
    return (
      <footer>
        <div class="alert alert-info" role="alert">
        Tarjeta: 3 Cuotas sin interés 🌻 15% OFF transferencia o depósito 🌻 20% OFF Efectivo{this.props.greeting}
</div>
      </footer>
    )
  }
}
