import React from "react";
import "./Classes.scss";

import Container from "../../components/container/Container";
import Card, {
  CardHeader,
  CardBody,
  CardFooter,
} from "../../components/card/Card";

export default function Classes() {
  const setClasses = [
    {
      name: "Cra",
      avatar:
        "https://c4.wallpaperflare.com/wallpaper/993/724/927/movie-dofus-wallpaper-preview.jpg",
    },
    {
      name: "Cra",
      avatar:
        "https://c4.wallpaperflare.com/wallpaper/993/724/927/movie-dofus-wallpaper-preview.jpg",
    },
    {
      name: "Cra",
      avatar:
        "https://c4.wallpaperflare.com/wallpaper/993/724/927/movie-dofus-wallpaper-preview.jpg",
    },
    {
      name: "Cra",
      avatar:
        "https://c4.wallpaperflare.com/wallpaper/993/724/927/movie-dofus-wallpaper-preview.jpg",
    },
    {
      name: "Cra",
      avatar:
        "https://c4.wallpaperflare.com/wallpaper/993/724/927/movie-dofus-wallpaper-preview.jpg",
    },
    {
      name: "Cra",
      avatar:
        "https://c4.wallpaperflare.com/wallpaper/993/724/927/movie-dofus-wallpaper-preview.jpg",
    },
    {
      name: "Cra",
      avatar:
        "https://c4.wallpaperflare.com/wallpaper/993/724/927/movie-dofus-wallpaper-preview.jpg",
    },
    {
      name: "Cra",
      avatar:
        "https://c4.wallpaperflare.com/wallpaper/993/724/927/movie-dofus-wallpaper-preview.jpg",
    },
    {
      name: "Cra",
      avatar:
        "https://c4.wallpaperflare.com/wallpaper/993/724/927/movie-dofus-wallpaper-preview.jpg",
    },
    {
      name: "Cra",
      avatar:
        "https://c4.wallpaperflare.com/wallpaper/993/724/927/movie-dofus-wallpaper-preview.jpg",
    },
    {
      name: "Cra",
      avatar:
        "https://c4.wallpaperflare.com/wallpaper/993/724/927/movie-dofus-wallpaper-preview.jpg",
    },
    {
      name: "Cra",
      avatar:
        "https://c4.wallpaperflare.com/wallpaper/993/724/927/movie-dofus-wallpaper-preview.jpg",
    },
    {
      name: "Cra",
      avatar:
        "https://c4.wallpaperflare.com/wallpaper/993/724/927/movie-dofus-wallpaper-preview.jpg",
    },
    {
      name: "Cra",
      avatar:
        "https://c4.wallpaperflare.com/wallpaper/993/724/927/movie-dofus-wallpaper-preview.jpg",
    },
    {
      name: "Cra",
      avatar:
        "https://c4.wallpaperflare.com/wallpaper/993/724/927/movie-dofus-wallpaper-preview.jpg",
    },
    {
      name: "Cra",
      avatar:
        "https://c4.wallpaperflare.com/wallpaper/993/724/927/movie-dofus-wallpaper-preview.jpg",
    },
    {
      name: "Cra",
      avatar:
        "https://c4.wallpaperflare.com/wallpaper/993/724/927/movie-dofus-wallpaper-preview.jpg",
    },
    {
      name: "Cra",
      avatar:
        "https://c4.wallpaperflare.com/wallpaper/993/724/927/movie-dofus-wallpaper-preview.jpg",
    },
  ];

  const getClasses = setClasses.map((element, key) => {
    return (
      <img
        className="avatar"
        src={element.avatar}
        alt={element.name}
        key={key}
      ></img>
    );
  });

  return (
    <Container styles="container">
      <Card styles="card_fluid">
        <CardHeader>
          <h3 className="title_home">Select a Class</h3>
        </CardHeader>
        <CardBody>
          <Container styles="container_avatar">{getClasses}</Container>
        </CardBody>
        <CardFooter>
          <button>Save</button>
        </CardFooter>
      </Card>
    </Container>
  );
}
