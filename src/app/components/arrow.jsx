export default function Arrow({ direction }) {
  const arrows = {
    right: (
      <svg
        width='30'
        height='20'
        viewBox='0 0 30 20'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M20 19.2L17.16 16.36L19.88 13.64L21.72 12.08L21.68 11.92L18.28 12.12H0.799988V7.87999H18.28L21.68 8.07999L21.72 7.91999L19.88 6.35999L17.16 3.63999L20 0.799988L29.2 9.99999L20 19.2Z' />
      </svg>
    ),
    left: (
      <svg
        width='30'
        height='20'
        viewBox='0 0 30 20'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M10 0.799998L12.84 3.64L10.12 6.36L8.28 7.92L8.32 8.08L11.72 7.88L29.2 7.88L29.2 12.12L11.72 12.12L8.32 11.92L8.28 12.08L10.12 13.64L12.84 16.36L10 19.2L0.8 10L10 0.799998Z' />
      </svg>
    ),
  };
  return (
    <button
      className={`rounded-lg bg-light-gray px-4 py-1 w-fit duration-300 group-hover:bg-transparent ${
        direction == "right" ? " ml-auto" : "mr-auto"
      } h-fit`}>
      <p
        className={`fill-almost-black group-hover:fill-hot-pink ${
          direction == "right"
            ? "group-hover:translate-x-4"
            : "group-hover:-translate-x-4"
        } duration-[200ms] font-IBMPlex ease-out`}>
        {arrows[direction]}
      </p>
    </button>
  );
}
