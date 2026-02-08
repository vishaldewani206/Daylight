export const Navbar = () => {
  return (
    <nav className="flex bg-white p-2 mt-4 rounded-sm space-x-4 justify-between">
      <img className='w-28' src='/images/logo.svg' alt='logo' />
      <div className='flex flex-row items-center justify-end gap-x-12'>
        <a
          href='https://estimate.godaylight.com/'
          className='relative z-1 flex  w-1/2 min-w-22 h-12  origin-center items-center justify-center overflow-clip whitespace-nowrap rounded-sm px-15  font-medium text-12 text-white'
          style={{
            WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
            touchAction: 'manipulation',
          }}
        >
          <video
            src='/videos/daylight-button.mp4'
            autoPlay={true}
            loop={true}
            playsInline={true}
            preload='none'
            muted
            className='pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-100'
          ></video>
          <div className='pointer-events-none absolute inset-0 z-1 backdrop-blur-sm'></div>
          <span className='relative z-2 text-sm font-bold'>Get Started</span>
        </a>
      </div>
    </nav>
  );
};
