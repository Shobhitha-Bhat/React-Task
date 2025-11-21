
import { useTheme } from "../context/ThemeProvider";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={{ padding: "10px", margin: "10px" }}>
      Current: {theme.toUpperCase()} — Click to Toggle
    </button>
  );
};

export default ThemeToggler;
