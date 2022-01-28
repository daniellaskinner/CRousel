import { useLoaderData } from "remix";

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

const markCRDone = (names, name) => {
    // make sure order is always more than number of people
    const numberOfNames = names.length

    return name.order = name.order + numberOfNames;
}

const sortNames = (a, b) => {
    return (a.order - b.order)
}

export default function Index() {
    const names = useLoaderData();
    names.sort(sortNames)

    return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to the CRousel</h1>
        <ul>
            {names.map((name, index) => {
                return <li key={index}>{name.name} <button onClick={() => markCRDone(names, name)}>Done</button></li>
            })}
        </ul>
    </div>
  );
}


