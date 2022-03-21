import { Carousel } from "antd";
import { Button } from "antd";

const items = [
  {
    key: "1",
    title: "1 : dbfehjawbyfhaerf",
    content: "1 : dhdggehehdjjdrjrjrf",
  },
  {
    key: "2",
    title: "2 : dbfehjawbyfhaerf",
    content: "2 : dhdggehehdjjdrjrjrf",
  },
  {
    key: "3",
    title: "3 : dbfehjawbyfhaerf",
    content: "3 : dhdggehehdjjdrjrjrf",
  },
];

function Hero() {
  return (
    <div className="heroBlack">
      <Carousel>
        {items.map((item) => {
          return (
            <div className="container-fluid">
              <div classNAME="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">
                    Primary Button
                  </Button>
                  <Button type="primary">Primary Button</Button>
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
