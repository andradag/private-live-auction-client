import { Carousel } from "antd";
import { Button } from "antd";
import "antd/dist/antd.css";
import "../Home/Home.css";

const items = [
  {
    key: "1",
    title: "Private Auction House",
    date: "26th March 2022",
    location: "Birmingham",
    content: "1 : dhdggeheEKWGMLKNERALGNWLRNGENRLJGBWLJENFGWENGFELGhdjjdrjrjrf",
  },
  {
    key: "2",
    title: "Private Auction House ",
    date: "28th March 2022",
    location: "London",
    content: "2 : dhdggehehdjjdrjrjrf",
  },
  {
    key: "3",
    title: "Private Auction House",
    date: "4th April 2022",
    location: "Berlin",
    content: "3 : dhdggehehdjjdrjrjrf",
  },
  {
    key: "4",
    title: "Private Auction House",
    date: "9th April 2022",
    location: "Las Vegas",
    content: "3 : dhdggehehdjjdrjrjrf",
  },
  {
    key: "5",
    title: "Private Auction House",
    date: "28th April 2022",
    location: "New York",
    content: "3 : dhdggehehdjjdrjrjrf",
  },
];

const contentStyle = {
  height: "340px",
  color: "#fff",
  marginTop: "30px",
  lineHeight: "40px",
  textAlign: "center",
  background: "#364d79",
};

function Hero() {
  return (
    <div className="heroBlack">
      <Carousel autoplay>
        {items.map((item) => {
          return (
            <div>
              <div style={contentStyle}>
                <h1>{item.title}</h1>
                <h3>{item.date}</h3>
                <h3>{item.location}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">
                    Primary Button
                  </Button>
                  <Button large type="primary">
                    Primary Button
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Hero;
