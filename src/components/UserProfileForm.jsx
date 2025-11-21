
import { useState } from "react";
import ThemeToggler from "./ThemeToggler";
import InputField from "./Input"; 
import useFormValidation from "../hooks/useFormValidation";
import BuggyComponent from "./BuggyComponent";


function UserProfileForm() {
  const { errors, validate } = useFormValidation();
  
  const [form, setForm] = useState({
      fullname: "",
      email: "",
      age: ""
    });
    
    // throw new Error("Testing ErrorBoundary component");
  function handleChange(e) {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        
        if (validate(form)) {
            alert(
                `Form Submitted Successfully!\n\nName: ${form.fullname}\nEmail: ${form.email}\nAge: ${form.age}`
            );
            setForm({
      fullname: "",
      email: "",
      age: ""
    });
        } 
    //     else {
    // //   alert("Please fill all required fields correctly!");
    // }
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ThemeToggler />
      </div>

      <h2 style={{ textAlign: "center" }}>UserProfileForm</h2>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit} style={{ width: "300px", textAlign: "left" }}>
          
          <InputField
            label="Full Name"
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
          />

          <InputField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />

          <InputField
            label="Age"
            name="age"
            type="number"
            value={form.age}
            onChange={handleChange}
          />
           <BuggyComponent age={Number(form.age)} />

          <button
            type="submit"
            style={{ width: "100%", padding: "8px", backgroundColor: "green", color: "white" }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default UserProfileForm;
