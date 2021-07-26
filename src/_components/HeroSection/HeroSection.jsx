import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { BookCategory } from "../../_components/BookCategory";
import bgImg from "../../assets/bg.jpg";
import logo from "../../assets/bmuse_logo.png";
import searchImg from "../../assets/search.png";

import "./HeroSection.scss";

function HeroSection() {
  return (
    <Container fluid className="p-0">
      <div
        className="hero-image"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <Navbar bg="transparent">
          <Container fluid className="mx-3">
            <Navbar.Brand href="/">
              <img
                src={logo}
                className="d-inline-block align-top"
                alt="bmuse-logo"
              />
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <Button variant="dark" className="rounded-circle">
                  <img src={searchImg} alt="search" />{" "}
                </Button>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="pt-5 col-4">
          <h1 className="heading">Bookshelf & Book Racks</h1>
          <p className="sub-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>
        <BookCategory></BookCategory>
      </div>
    </Container>
  );
}

export { HeroSection };
