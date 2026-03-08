import "../styles/button.css";

const Button = ({ title, onClick }) => {
  return (
    <div className="btn-wrapper">
      <button onClick={onClick}>{title}</button>
    </div>
  );
};

export default Button;
