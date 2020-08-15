import React from "react";
import "./Card.scss";

export default function Card(props) {
  return <div className={props.styles}>{props.children}</div>;
}

export function CardHeader(props) {
  return <div className={props.styles}>{props.children}</div>;
}

export function CardBody(props) {
  return <div className={props.styles}>{props.children}</div>;
}

export function CardFooter(props) {
  return <div className={props.styles}>{props.children}</div>;
}
