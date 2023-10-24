import './header.scss';

function Header() {
  return (
    <>
      <header>
        <div className='container'>
          <input type='text' name='search' id='search' placeholder='Search...' />
          <div className='header-panel-right'>
            <div className='header-notification'>
              <img src='/assets/svg/header/bell.svg' alt='bell' />
              <div className='header-number'>
                <span>3</span>
                <img src='/assets/svg/header/bell-bg-number.svg' alt='number' />
              </div>
            </div>
            <div className="header-account">
              <img src="/assets/images/header-avatar.png" alt="avatar" />
              <div className="header-nickname">
                <span>Welcome,</span>
                <p>Lavender</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
