import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  
  // Hook to manage the state of the component (State Hook)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [name, setName] = useState("");

  // <> means a React Fragment, which is a way to group a list of children without adding extra nodes to the DOM.
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No items</p>}
        {items.map((item, index) => (
          <li
            className={
              "list-group-item " + (selectedIndex == index ? "active" : "")
            }
            key={item}
            onClick={ () => { setSelectedIndex(index); onSelectItem(item); } }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

// SyntheticBaseEvent is a wrapper over the native event, which is a cross-browser wrapper for the native event.
// We are not calling the function, we are passing the reference to the function. React will call the function when the event occurs.
