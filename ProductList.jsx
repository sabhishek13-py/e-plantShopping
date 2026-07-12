import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartCount } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=500",
    category: "Air Purifying",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=500",
    category: "Air Purifying",
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 300,
    image:
      "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=500",
    category: "Air Purifying",
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=500",
    category: "Succulents",
  },
  {
    id: 5,
    name: "Jade Plant",
    price: 400,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500",
    category: "Succulents",
  },
  {
    id: 6,
    name: "Cactus",
    price: 280,
    image:
      "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=500",
    category: "Succulents",
  },
  {
    id: 7,
    name: "Monstera",
    price: 650,
    image:
      "https://images.unsplash.com/photo-1524593166156-312f362cada0?w=500",
    category: "Decorative",
  },
  {
    id: 8,
    name: "Fiddle Leaf Fig",
    price: 800,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500",
    category: "Decorative",
  },
  {
    id: 9,
    name: "Rubber Plant",
    price: 550,
    image:
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=500",
    category: "Decorative",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);

  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(plants.map((plant) => plant.category))];

  const isPlantAdded = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <>
      <nav className="navbar">
        <h2>🌿 Paradise Nursery</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/plants">Plants</Link>

          <Link to="/cart">
            🛒 <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </nav>

      <div className="container">
        {categories.map((category) => (
          <div className="category" key={category}>
            <h2>{category}</h2>

            <div className="products-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <div className="card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                    />

                    <h3>{plant.name}</h3>

                    <p className="price">
                      ₹{plant.price}
                    </p>

                    <button
                      onClick={() =>
                        handleAddToCart(plant)
                      }
                      disabled={isPlantAdded(plant.id)}
                    >
                      {isPlantAdded(plant.id)
                        ? "Added"
                        : "Add to Cart"}
                    </button>
                  </div>
                ))}
          </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
