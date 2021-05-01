const Container = ({ children, className }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {children}
    </div>
  );
};

export default Container;
