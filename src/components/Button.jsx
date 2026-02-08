export const Button = ({ title }) => {
  return (
    <a
      target='_blank'
      style={{ backgroundColor: '#F66F00' }}
      aria-label='Get your estimate'
      className='group relative appearance-none cursor-pointer disabled:pointer-events-none focus-visible:outline-2 outline-black outline-offset-4 inline-flex items-center justify-center text-center font-aeonik-pro font-medium h-50 px-24 rounded-sm duration-1000 hover:duration-100 ease-expo-out text-12 bg-beige group w-fit overflow-hidden text-white'
      href='https://estimate.godaylight.com/'
    >
      <span className='group-hover:-translate-y-1 relative z-2 transition-[transform,color] duration-300 ease-expo-out'>
        {title}
      </span>
      <div className='absolute inset-0 h-full w-full origin-center translate-y-[200%] rotate-[15deg] scale-[1.8] rounded-lg bg-black transition-transform duration-1000 ease-expo-out group-hover:translate-y-0 group-hover:rotate-8'></div>
    </a>
  );
};
