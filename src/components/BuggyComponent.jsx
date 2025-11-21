function BuggyComponent({ age }) {
  if (age > 99) {
    return <div>{null.property}</div>;
  }

  return <p>Age is valid. No Bug</p>;
}

export default BuggyComponent;
