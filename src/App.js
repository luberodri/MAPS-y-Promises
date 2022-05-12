import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Container, Row, Col} from "react-bootstrap"
import Item from "./components/Item";
import {products} from "./components/Productos";


function App() {

  const task = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 3000)
    
  })

  task.then((result) => {
    console.log(result)
  }, err => {
    console.log(err)
  }).catch((err) => {
    console.log(err)
  })

  
  return (
    <div className="App">
      {products.map((product, index) => (
          <Item product={product} key={product.id}/>
        )
      )}
    </div>
  );
}

function front() {
  return (
    <div className="front">
      <Navbar category1={"Ropa"} category2={"Calzado"} category3={"Accesorios"}/>
      <main className="main-content">
        <Container>
          <Row className="my-5">
            <Col>
            <p class="text-center">
              <h1>Slums of beverly hills</h1>
              </p>
              <img src="./logo.png" class="rounded mx-auto d-block" alt="..."></img>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer greeting={":)"} greeting2={"Segundo saludo"}  greeting3={"Tercer saludo"}/>
    </div>
  );
}





export default App;


