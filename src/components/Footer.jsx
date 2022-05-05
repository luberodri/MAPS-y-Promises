import React from "react"


export default class Footer extends React.Component {

  render() {
    console.log(this.props)
    return (
      <footer>
        <div ClassName= "Saludo">
          <p>Tarjeta: 3 Cuotas sin interés 🌻 15% OFF transferencia o depósito 🌻 20% OFF Efectivo{this.props.greeting}</p>
        </div>
        
      </footer>
    )
  }
}