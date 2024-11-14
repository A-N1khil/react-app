function ListGroup() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  items = [];

  // <> means a React Fragment, which is a way to group a list of children without adding extra nodes to the DOM.
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        { items.length === 0 && <p>No items</p> }
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
