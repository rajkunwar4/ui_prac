const Children = ({age,children}) => {
  return (
    <div>
      <h2>Before children</h2>
      {children}
      {age}
      <h2>After Children</h2>
    </div>
  );
};

export default Children;
