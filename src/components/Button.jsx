const Button = ({ buttonText, buttonColor, action }) => {
  return (
    <button
      onClick={action}
      className={`px-8 py-3 mx-3 text-white rounded-md ${buttonColor}`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
