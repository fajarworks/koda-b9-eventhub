import Logo from '../../components/Logo';

function ForgotPassword() {
  return (
    <>
      <article className='max-w-md w-full mx-auto'>
        <Logo className='text-black' />
        <div className='font-bold text-2xl pt-8 '>
        <h1>Reset your password</h1>
        </div>
        <div className='text-color-text'>
        <p>Enter your email and we'll send a link.</p>
        </div>
        <div className='lg:hidden'>
        </div>
        <form action="">
          <div className="flex flex-col gap-1 sm:gap-2 pt-8">
            <label htmlFor="email" className="text-xs sm:text-sm font-medium">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="text-color-text border border-gray-300 w-full px-3 py-1.5 sm:py-2.5 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <div className='pt-4'>
          <button

            type="submit"
            className="w-full px-3 py-1.5 sm:py-2.5 bg-primary rounded-lg text-white cursor-pointer hover:opacity-90 transition text-sm sm:text-base"
          >
            Send reset link
          </button>
          </div>
        </form>


      </article>
    </>
  );
}

export default ForgotPassword;
