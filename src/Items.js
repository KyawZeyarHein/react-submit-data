import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export function Items() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const nameRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();

  async function loadItems() {
    const res = await fetch(
      `http://localhost:3000/api/item?page=${page}`
    );
    const data = await res.json();
    setItems(data);
  }

  async function addItem() {
    await fetch("http://localhost:3000/api/item", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nameRef.current.value,
        category: categoryRef.current.value,
        price: priceRef.current.value
      })
    });

    loadItems();
  }

  async function deleteItem(id) {
    await fetch(
      `http://localhost:3000/api/item/${id}`,
      {
        method: "DELETE"
      }
    );

    loadItems();
  }

  useEffect(() => {
    loadItems();
  }, [page]);

  return (
    <div>
      <h2>Items</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.itemName}</td>
              <td>{item.itemCategory}</td>
              <td>{item.itemPrice}</td>
              <td>
                <Link to={`/edit/${item._id}`}>
                  Edit
                </Link>
                {" "}
                <button onClick={() => deleteItem(item._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}

          <tr>
            <td>-</td>
            <td><input ref={nameRef} /></td>
            <td>
              <select ref={categoryRef}>
                <option>Stationary</option>
                <option>Kitchenware</option>
                <option>Appliance</option>
              </select>
            </td>
            <td><input ref={priceRef} /></td>
            <td>
              <button onClick={addItem}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>
      {" Page "}{page}{" "}
      <button onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}
