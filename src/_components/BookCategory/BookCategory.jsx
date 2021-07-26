import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { ErrorModal } from "../../_components/ErrorModal";
import { Loader } from "../../_components/Loader";
import { Container, Row, Col, Button } from "react-bootstrap";
import arrow from "../../assets/slider_arrow.png";
import close from "../../assets/close.png";
import "./BookCategory.scss";

function BookCategory() {
  const [bookDatas, setBookDatas] = useState([]);
  const [isApiFailed, setIsApiFailed] = useState(false);
  const [hidden, setHidden] = useState({});

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((response) => setBookDatas(response))
      .catch((error) => setIsApiFailed(true));
  }, []);

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <img src={arrow} className="rotate-arrow" />,
    prevArrow: <img src={arrow} />,
  };
  const toggleHide = (index) => {
    setHidden({ ...hidden, [index]: !hidden[index] });
  };

  console.log("data", bookDatas);
  return (
    <Container fluid>
      {Object.keys(bookDatas).length > 0 ? (
        (bookDatas && bookDatas.status === 404) ||
        bookDatas.status === 400 ||
        bookDatas.status === 500 ? (
          <ErrorModal
            message={
              bookDatas && bookDatas.message
                ? bookDatas.message
                : "Error while displaying data"
            }
          />
        ) : (
          <>
            <div className="pt-5 pb-3">
              <h3 className="category-title text-uppercase">
                Hardcover Fiction{" "}
              </h3>
              <div></div>
              <Slider className="slider-padding" {...settings}>
                {bookDatas.results.books.map((bookValue, index) => {
                  return (
                    <>
                      <Row>
                        <Col key={index} className="me-3 py-4">
                          <div
                            className="rounded book-card position-relative"
                            key={index}
                            style={{
                              minHeight: `300px`,
                              backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5))`,
                            }}
                            onClick={(e) => toggleHide(index)}
                          >
                            <img
                              src={bookValue.book_image}
                              className="img-fluid"
                            />
                            <div className="card-backdrop"></div>
                            <p className="rating text-white position-absolute">
                              {bookValue.rating} out of 5
                            </p>
                            <div className="position-absolute w-100 fixed-bottom px-3 py-3 card-text">
                              <h3 className="book-title">{bookValue.title}</h3>
                              <p className="book-author mb-1">
                                {bookValue.author}
                              </p>
                              <p className="book-author">
                                {bookValue.publisher}
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </>
                  );
                })}
              </Slider>
              {bookDatas.results.books.map((bookValue, index) => {
                return (
                  <>
                    {hidden[index] && (
                      <Row className="pl-50">
                        <Col lg={5}>
                          <div className="mb-5">
                            <h3 className="desc-book-name">
                              {bookValue.title}
                            </h3>
                            <img
                              src={bookValue.book_image}
                              className="desc-book-img position-relative"
                            />
                          </div>
                          <Button
                            variant="secondary"
                            size="lg"
                            className="position-relative mb-4"
                          >
                            Add to Favourites
                          </Button>
                        </Col>
                        <Col lg={7}>
                          <div
                            className="justify-content-end text-end me-5 cursor-pointer"
                            onClick={(e) => toggleHide(index)}
                          >
                            <img src={close} alt="close-btn" />
                          </div>
                          <h3 className="desc-book-author">
                            {bookValue.author}
                          </h3>
                          <h3 className="desc-book-publisher pb-3">
                            {bookValue.publisher}
                          </h3>
                          <p className="desc-book-description col-sm-6">
                            {bookValue.description}
                          </p>
                        </Col>
                      </Row>
                    )}
                  </>
                );
              })}
            </div>
          </>
        )
      ) : (
        <Loader />
      )}
    </Container>
  );
}

export { BookCategory };
