import { useState } from "react";
import { getRandomInt } from "../utils";

export default function RandomCode() {
  const [code, setCode] = useState(getRandomInt(100000, 999999));

  return (
    <div>
      <h2>Your random code is:</h2>
      <p>{code}</p>
    </div>
  );
}