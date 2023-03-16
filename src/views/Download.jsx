import '../sub.css';

export default function Download() {
    return (
        <>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Download
                    </h1>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"></div>
                <div>
                {/* <ul className='hidden md:flex'>
          <li className='p-4'>
            <a href='/home#hero'>Home</a>
          </li>
          <li className='p-4'>
            <a href='#about'>About</a>
          </li>
          <li className='p-4'>
            <a href='#plans'>Plans</a>
          </li>
          <li className='p-4'>
            <Link to='/download-app'>Download</Link>
          </li>
          <li className='p-4'>
            <a href='#contact'>Contact</a>
          </li>
          <li>
            <button className='bg-amber-500 text-black rounded w-[120px] h-[50px] font-bold'>
              <Link to='/login'>Sign In</Link>
            </button>
          </li>
        </ul> */}
                <a className="glow" href="http://">hover me</a>
                    </div>
                    <button className="glow w-[200px] rounded-md my-6 mx-auto md:mx-0 py-3 font-bold">
                            Get Started
                        </button>
                        <button className="glow w-[200px] rounded-md font-medium my-6 ml-4 px-6 py-3 flex">
                                    Subscribe!
                                </button>
                                <button className="glow w-[200px] rounded-md font-medium my-6 ml-4 px-6 mx-auto py-3 text-center mt-20">
                                    Get Started
                                </button>
                                <button className="glow w-[200px] rounded-md font-medium my-6 ml-4 px-6 mx-auto py-3 text-center">
                                    Get Started
                                </button>
                                <button className="glow w-[200px] rounded-md font-medium my-6 ml-4 px-6 mx-auto py-3 mt-20 text-center">
                                    Get Started
                                </button>
                                <button className="glow w-[200px] rounded-md font-medium my-6 ml-4 px-6 mx-auto py-3 text-center">
                                    Get Started
                                </button>
                                <button className="glow mt-4 w-full p-4 rounded">
                                Send Message
                            </button>
                            <button className="glow mt-4 w-full p-4 rounded">
                                Send Message
                            </button>
                            {/* <div class="flex justify-center
                            items-center h-screen">
                                <div class="box relative w-
                                [200px] h-[200px] bg-[#020223]
                                overflow-hidden">
                                    
                                </div>

                            </div> */}
            </main>
        </>
    );
}
