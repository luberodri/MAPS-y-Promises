import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Container, Row, Col} from "react-bootstrap"
function App() {
  return (
    <div className="App">
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


