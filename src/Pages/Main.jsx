import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { useNavigate } from "react-router-dom";

function Main() {
  const [genres, setgenre] = useState({
    genre1: "Default",
    genre2: "Default"
});
const handleChange = (e) => {
  setgenre((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};
  // const navigate = useNavigate();
  // var a =
  //   "https://th.bing.com/th/id/OIP.1umjRUVLTbPQCPVU_q1HPgHaK-?pid=ImgDet&rs=1";
  // var b =
  //   "https://th.bing.com/th/id/OIP.1umjRUVLTbPQCPVU_q1HPgHaK-?pid=ImgDet&rs=1";

  // function handleClick() {
  //   navigate("/searchresult");
  // }
  // function handleChange() {}

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            
            <img src={"./GenreIMG/" + genres.genre1 + ".jpg"} alt="myimg" />
          </Col>
          <Col>
            {/* <img src={b} alt="" /> */}
            <img src={"./GenreIMG/" + genres.genre2 + ".jpg"} alt="myimg" />
            <br />
          </Col>
          <Col></Col>
        </Row>
        <br />
        <Row>
          <Col></Col>
          <Col>
            <select className="drop" name="genre1" onChange={handleChange}>
              <option>Select Movies..</option>
              <option value="comedy">Comedy</option>
              <option value="romance">Romance</option>
              <option value="Horror">Horror</option>
              <option value="Thriller">Thriller</option>
              <option value="Drama">Drama</option>
              <option value="Acrtion">Action</option>
              <option value="Fantasy">Fantasy</option>
              <option value="scifi">Sci-fi</option>
              <option value="Crime">crime</option>
              <option value="mystry">Mystery</option>
            </select>
          </Col>
          <Col></Col>
          <Col>
            <select className="drop" name="genre2" onChange={handleChange}>
              <option>Select Movies..</option>

              <option value="comedy">Comedy</option>
              <option value="romance">Romance</option>
              <option value="Horror">Horror</option>
              <option value="Thriller">Thriller</option>
              <option value="Drama">Drama</option>
              <option value="Acrtion">Action</option>
              <option value="Fantasy">Fantasy</option>
              <option value="scifi">Sci-fi</option>
              <option value="Crime">crime</option>
              <option value="mystry">Mystery</option>
            </select>
          </Col>
          <Col></Col>
        </Row>
        <br />
        <Row>
          <Col></Col>
          <Col></Col>
          <Col>
            <button className="custom-btn btn-1" onClick={handleChange}>
              Submit
            </button>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default Main;
