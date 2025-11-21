// hooks/useFormValidation.js
import { useState } from "react";

export default function useFormValidation() {
  const [errors, setErrors] = useState({});

  const validate = (formData) => {
  let newErrors = {};

  // Check empty fields first
  if (!formData.fullname.trim() || 
      !formData.email.trim() || 
      !formData.age.trim()) {

    alert("Please fill all required fields");
    return false;
  }

  // Rest of your normal validation
  if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    newErrors.email = "Invalid email format";
  }

  if (isNaN(formData.age)) {
    newErrors.age = "Age must be a number";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  return { errors, validate };
}
