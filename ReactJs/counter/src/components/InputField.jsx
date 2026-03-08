import "../styles/inputField.css";

const InputField = ({ type, value, placeholder, required, onChange }) => {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
