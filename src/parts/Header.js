export default function Header() {
  return (
    <header>
      <nav className='nav-bar'>
        <img src='./images/misc/logo.svg' alt='Netflix logo' />
        <button>Sign In</button>
      </nav>
      <div className='call-to-action'>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <form>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className='get-started-wrapper'>
            <input type='email' placeholder='Email address' />
            <button>Get Started</button>
          </div>
        </form>
      </div>
    </header>
  )
}

/* 
<Header> 
</Header>
  logo, sign in button
  blurb
  get-started

*/
