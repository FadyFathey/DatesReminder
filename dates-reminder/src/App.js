import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const person = [
    { id: 1, name: "fady", date: "5pm", img: "p1.jpg" },
    { id: 1, name: "ali", date: "2pm", img: "p1.jpg" },
    { id: 1, name: "mai", date: "9pm", img: "p1.jpg" },
    { id: 1, name: "omar", date: "5pm", img: "p1.jpg" },
  ];
  
  const [PersonDelete, setPerson] = useState(person);
  return (
    <div className="font color-body">
      <Container className="py-5">
        <Row className="justify-content-center my-2">
          <Col sm="8" className="">
            مواعيد {person.length}لديك
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="8" className="">
            <div className="rectangle p-2">
              {person.length
                ? person.map((item) => {
                    return (
                      <div className="d-flex border-bottom mx-3 my-2">
                        <img className="img-avatar" alt="man" src="p1.jpg" />
                        <div className="px-3">
                          <p className="d-inline fs-5">{item.name}</p>
                          <p className="fs-6">{item.date}</p>
                        </div>
                      </div>
                    );
                  })
                : "لايوجد مواعيد"}
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="8" className="d-flex justify-content-between">
            <button onClick={() => setPerson(null)} className="btn-style">
              مسح الكل
            </button>
            <button onClick={() => setPerson(person)} className="btn-style">
              {" "}
              عرض البيانات
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
