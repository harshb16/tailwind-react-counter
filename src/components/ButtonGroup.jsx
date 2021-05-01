import Button from './Button';

const ButtonGroup = ({ firstButtonAction, secondButtonAction }) => {
  return (
    <div className='flex'>
      <Button
        action={firstButtonAction}
        buttonText='increase'
        buttonColor='bg-blue-900'
      />
      <Button
        action={secondButtonAction}
        buttonText='decrease'
        buttonColor='bg-gray-900'
      />
    </div>
  );
};

export default ButtonGroup;
