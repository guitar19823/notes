import './index.css';

const Button = props => {
  const {
    value,
    type = 'button',
    disabled = false,
    color,
    onClick
  } = props;

  return (
    <input
      className={`Button ${color || ''}`}
      value={value}
      type={type}
      disabled={disabled}
      onClick={onClick}
    />
  );
};

export default Button;