import UserProfileForm from "./UserProfileForm";
import ThemeToggler from "./ThemeToggler";
import { useNavigate } from "react-router-dom";

function LandPage(){
const navigate=useNavigate();
    return(
        <>
        <div style={{ display: "flex", justifyContent: "center",gap:"3rem", alignItems: "center" }}>
  <h2>Landing Page Task 3</h2>
  <ThemeToggler />
</div>


<div style={{ display: "flex", justifyContent: "center",gap:"3rem", alignItems: "center" }}>
  <button onClick={()=> navigate("/userform")}  style={ {backgroundColor:"green"}}>
    UserProfileForm
    </button>
</div>


        </>
    )
}

export default  LandPage;