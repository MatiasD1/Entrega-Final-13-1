import { useState } from "react";
import "./CheckoutForm.css";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };
    onConfirm(userData);
  };

  return (
    <div className="formulario">
      <div className="formulario2">
        <h1>Ingrese sus datos</h1>
        <form onSubmit={handleConfirm} method="post">
          <div className="userName">
            <label>Nombre</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => handleInputChange(e, setName)}
            />
          </div>
          <div className="userName">
            <label>Teléfono</label>
            <input
              type="text"
              required
              value={phone}
              onChange={(e) => handleInputChange(e, setPhone)}
            />
          </div>
          <div className="userName">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => handleInputChange(e, setEmail)}
            />
          </div>
          <input type="submit" value="Crear compra" />
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
