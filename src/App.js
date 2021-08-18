import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "kimchi",
    image:
      "https://img.koreatimes.co.kr/upload/newsV2/images/202106/33eeb68d6b124dc8aab0574ec30cb999.jpg/dims/resize/740/optimize",
  },
  {
    name: "pizza",
    image:
      "https://bigseventravel.com/wp-content/uploads/2019/11/paulie-1024x727.png",
  },
  {
    name: "samgyupsal",
    image:
      "https://images.squarespace-cdn.com/content/v1/5d3a4c1ae616af0001b2aa15/1588961718684-DIYJIW3RL7361B6VDM0X/pork+belly.jpg?format=1000w",
  },
  {
    name: "kimbap",
    image:
      "https://www.seriouseats.com/thmb/o94pqlhYlIMrT3KFLIPhs09chDo=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__01__20200122-gimbap-vicky-wasik-24-f5ed1075f35846a29e0812ee053a1bf8.jpg",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
