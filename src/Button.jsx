function Button(props) {
  return (
    <button className="px-3 py-1 shadow-lg rounded-md bg-[orangered] text-white">
      {props.ButtonText}
    </button>
  );
}

export default Button;
