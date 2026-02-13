import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function ItemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const nameRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();

  async function loadItem() {
    const res = await fetch(
      `http://localhost:3000/api/item/${id}`
    );
    const data = await res.json();

    nameRef.current.value = data.itemName;
    categoryRef.current.value = data.itemCategory;
    priceRef.current.value = data.itemPrice;
  }

  async function updateItem() {
    await fetch(
      `http://localhost:3000/api/item/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameRef.current.value,
          category: categoryRef.current.value,
          price: priceRef.current.value
        })
      }
    );

    navigate("/");
  }

  useEffect(() => {
    loadItem();
  }, []);

  return (
    <div>
      <h2>Edit Item</h2>

      <input ref={nameRef} />
      <br />
      <select ref={categoryRef}>
        <option>Stationary</option>
        <option>Kitchenware</option>
        <option>Appliance</option>
      </select>
      <br />
      <input ref={priceRef} />
      <br />
      <button onClick={updateItem}>Update</button>
    </div>
  );
}
