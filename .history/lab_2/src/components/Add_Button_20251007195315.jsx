import "./Add_Button.css";

function Add_Button({ onClick }) {
  return (
    <button className="add_button" onClick={onClick}>
     New
    </button>
  );
}

export default Add_Button;
