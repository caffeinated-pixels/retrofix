import styled from 'styled-components'

const HeaderContainer = styled.header``

export default function Header() {
  return (
    <HeaderContainer>
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
    </HeaderContainer>
  )
}

/* 
<Header> 
</Header>
  logo, sign in button
  blurb
  get-started

*/
