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

// update list of names with new name
const addNameToList = (newName, names) => {
    return(names.push({id: 4, name : newName.current.value, order: 4}))
}

export default function Index() {
    const names = useLoaderData();
    names.sort(sortNames)

    let newName = React.createRef();

    return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to the CRousel</h1>

        <div>
            <input ref={newName} placeholder="Insert a name" />
            <button onClick={() => addNameToList(newName, names)} />
        </div>
        <ul>
            {names.map((name, index) => {
                return <li key={index}>{name.name} <button onClick={() => markCRDone(names, name)}>CR done</button></li>
            })}
        </ul>
    </div>
  );
}


