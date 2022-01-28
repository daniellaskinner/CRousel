import { useLoaderData } from "remix";
import React from "react";

export const loader = () => {
    return [
        {
            id:1,
            name: "Nelly",
            order: 3
        },
        {
            id: 2,
            name: "Pat",
            order: 2
        },
        {
            id: 3,
            name: "Roy",
            order: 1
        }

    ];
};

const sortNames = (a, b) => {
    return (a.order - b.order)
}

const markCRDone = (names, name) => {
    const numberOfNames = names.length

    // make sure order is always more than number of people
    return name.order = name.order + numberOfNames;
}

const addName = (textInput) => {
    console.log(textInput.current.value)
}

export default function Index() {
    const names = useLoaderData();
    names.sort(sortNames)

    let textInput = React.createRef();

    return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to the CRousel</h1>

        <div>
            <input ref={textInput} placeholder="Insert a name" />
            <button onClick={() => addName(textInput)} />
        </div>
        <ul>
            {names.map((name, index) => {
                return <li key={index}>{name.name} <button onClick={() => markCRDone(names, name)}>Done</button></li>
            })}
        </ul>
    </div>
  );
}


