import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import SupportIcon from '@mui/icons-material/Support';
import BuildIcon from '@mui/icons-material/Build';
import LogoutIcon from '@mui/icons-material/Logout';
import IconSidebar from './IconSidebar'
import './sidebar.scss'
import styled from 'styled-components';
import customTheme from '../../../theme';
import { Typography } from '@mui/material';
import palette from '../../../theme/palette';
import typography from '../../../theme/typography';

const StyledSvgIcon2 = styled.svg({
  background: customTheme.palette.primary.main,
  fill: 'white !important',
  padding: '10px',
  width: '44px !important',
  height: '44px !important',
})

const StyledSvgIconSignOut = styled.svg({
  marginTop: '80px',
})

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className='container'>
          <Typography
            component={'h2'}
            variant='h2'
            color={palette.grey[900]}
            fontFamily={typography.base.fontFamily}
            fontSize='18px'
            fontWeight={700}
            textTransform='uppercase'
            display={'flex'}
            justifyContent='center'
            padding={'10px 0'}
            marginBottom='20px'>Logo
          </Typography>
          {/* <img src="/assets/svg/sidebar/th-large.svg" alt="th-large" />
          <img src="/assets/svg/sidebar/book.svg" alt="book" />
          <img src="/assets/svg/sidebar/user.svg" alt="user" />
          <img src="/assets/svg/sidebar/life-ring.svg" alt="life-ring" />
          <img src="/assets/svg/sidebar/wrench.svg" alt="wrench" />
          <img src="/assets/svg/sidebar/sign-out-alt.svg" alt="sign-out-alt" /> */}
          <IconSidebar svg={<GridViewSharpIcon />} />
          <IconSidebar svg={<ArticleIcon component={StyledSvgIcon2} />} />
          <IconSidebar svg={<PersonIcon />} />
          <IconSidebar svg={<SupportIcon />} />
          <IconSidebar svg={<BuildIcon />} />
          <IconSidebar svg={<LogoutIcon component={StyledSvgIconSignOut} />} />
        </div>
      </div>
    </>
  )
}

export default Sidebar