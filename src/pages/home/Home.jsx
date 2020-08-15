import React from "react";
import "./Home.scss";

import Card, { CardHeader, CardBody } from "../../components/card/Card";
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";

export default function Home() {
  const images = {
    imgCreate:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fbdcfe05-042f-492c-bd9f-97978d865bb0/d3ev2wr-1572b1ec-bc14-4c97-a10a-500e1edf9847.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZmJkY2ZlMDUtMDQyZi00OTJjLWJkOWYtOTc5NzhkODY1YmIwXC9kM2V2MndyLTE1NzJiMWVjLWJjMTQtNGM5Ny1hMTBhLTUwMGUxZWRmOTg0Ny5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ywNjDZgP4_jW69xIz7EkZ5CB8Rjyu94-rgUy6PnrR-k",
    imgShow:
      "https://vignette.wikia.nocookie.net/dofus/images/a/a8/Pathogerm.png/revision/latest/scale-to-width-down/340?cb=20160701145743",
    imgDescription: "Images from create and show",
  };

  return (
    <Container styles="container_home">
      <Card styles="card">
        <CardHeader styles="card_header">
          <h3 className="title_home">Create New Stuff</h3>
        </CardHeader>
        <CardBody styles="card_body">
          <Link to="/classes">
            <img
              className="img_home"
              src={images.imgCreate}
              alt={images.imgDescription}
            ></img>
          </Link>
        </CardBody>
      </Card>
      <Card styles="card">
        <CardHeader styles="card_header">
          <h3 className="title_home">Show Community Stuff</h3>
        </CardHeader>
        <CardBody styles="card_body">
          <Link to="/community">
            <img
              className="img_home"
              src={images.imgShow}
              alt={images.imgDescription}
            ></img>
          </Link>
        </CardBody>
      </Card>
    </Container>
  );
}
