function Input({ label, name, type = "text", value, onChange }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label style={{ display: "block", marginBottom: "5px" }}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          padding: "6px",
          borderRadius: "4px",
          border: "1px solid gray",
        }}
      />
    </div>
  );
}

export default Input;
