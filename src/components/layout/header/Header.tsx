import { alpha, Box, OutlinedInput, styled, TextField } from '@mui/material';
import customTheme from '../../../theme';
import palette from '../../../theme/palette';
import './header.scss';

const StyledSpan = styled('span')({
  fontSize: customTheme.typography.h5.fontSize,
  fontWeight: customTheme.typography.h5.fontWeight,
  lineHeight: 'normal',
  color: customTheme.palette.grey[400],
})

const StyledP = styled('p')({
  fontSize: customTheme.typography.h4.fontSize,
  fontWeight: customTheme.typography.h4.fontWeight,
  lineHeight: 'normal',
  color: customTheme.palette.grey[900],
})

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
                <StyledSpan>Welcome,</StyledSpan>
                <StyledP>Lavender</StyledP>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
