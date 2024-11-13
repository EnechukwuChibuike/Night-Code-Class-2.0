function Button({ setNum, ButtonText, num }) {
  return (
    <>
      <button
        className="px-3 py-1 shadow-lg rounded-md bg-[orangered] text-white"
        onClick={() => setNum(num + 1)}
      >
        {ButtonText}
      </button>
    </>
  );
}

export default Button;
