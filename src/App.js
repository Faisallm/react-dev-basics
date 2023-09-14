import { useState } from "react";

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}

function ImageTile() {
  return <div className="tile"></div>;
}

function Imager(imagurl) {
  return <img src={imagurl} />;
}

function AdminPanel() {
  return <div>Admin Panel</div>;
}

function LoginForm() {
  return <div>LoginForm</div>;
}

export default function MyApp() {
  // we want this button component to
  // remember all the time it was
  // clicked.

  // current state: count
  // function that allows us to setCount

  const [count, setCount] = useState(0);

  function clickHandler() {
    setCount(count + 1);
  }

  const user = {
    name: "Faisal",
    wife: "Amina",
    imgUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  };

  // list of objects
  const fruits = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];

  const isLoggedIn = false;

  const fruitList = fruits.map((fruit) => {
    return (
      <li
        key={fruit.id}
        style={{
          // setting color based on a condition
          color: fruit.isFruit ? "magenta" : "darkgreen",
        }}
      >
        {fruit.title}
      </li>
    );
  });

  return (
    <div>
      <h1>Welcome to my App, {user.name}</h1>
      <MyButton count={count} onClick={clickHandler} />
      <MyButton count={count} onClick={clickHandler} />
      <ImageTile />
      {isLoggedIn && <AdminPanel />}
      <ul>{fruitList}</ul>
    </div>
  );
}
