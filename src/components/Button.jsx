const Button = ({ buttonText, buttonColor, action }) => {
  return (
    <button
      onClick={action}
      className={`px-4 py-1 mx-2 sm:px-8 sm:py-3 sm:mx-4 text-white rounded-md ${buttonColor}`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
