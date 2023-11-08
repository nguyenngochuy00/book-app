import { Avatar, Box, styled, Typography } from '@mui/material'
import customTheme from '../../../theme'
import palette from '../../../theme/palette'
import typography from '../../../theme/typography'
import './header.scss'

const Input = styled('input')({
  width: '360px',
  height: '44px',
  padding: '10px 16px',
  borderRadius: '10px',
  border: '1px solid ' + palette.grey[200],
  background: palette.grey[200],
  fontSize: typography.base.fontSize,
  fontWeight: typography.base.fontWeight,
  lineHeight: typography.base.lineHeight,
  color: palette.grey[400],
  fontFamily: typography.base.fontFamily
})

function Header() {
  return (
    <>
      <Box component={'header'} padding={'18px 15px'}>
        <Box
          className='container'
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          flexDirection={'row'}
          width={'1300px'}
          height={'44px'}
        >
          <Input type='name' name='search' id='search' placeholder='Search...' />
          <Box
            className={'header-panel-right'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'row'}
            columnGap={'40px'}
          >
            <Box className={'header-notification'} sx={{ transform: 'translate(0%, 25%)' }}>
              <Avatar src='/assets/svg/header/bell.svg' alt='bell' sx={{ width: '25px', height: '25px' }} />
              <Box
                className={'header-number'}
                sx={{ position: 'relative', top: 0, left: 0, transform: 'translate(50%, -140%)' }}
              >
                <Typography
                  component={'span'}
                  position={'absolute'}
                  right={'12px'}
                  bottom={'7px'}
                  sx={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: palette.grey[100],
                    fontFamily: typography.base.fontFamily
                  }}
                >
                  3
                </Typography>
                <img src='/assets/svg/header/bell-bg-number.svg' alt='number' />
              </Box>
            </Box>
            <Box
              className={'header-account'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              flexDirection={'row'}
              columnGap={'8px'}
            >
              <Avatar src='/assets/images/header-avatar.png' alt='avatar' />
              <Box className={'header-nickname'}>
                <Typography
                  variant='h5'
                  component={'h5'}
                  sx={{
                    color: customTheme.palette.grey[400],
                    fontFamily: typography.base.fontFamily
                  }}
                >
                  Welcome,
                </Typography>
                <Typography
                  variant='h4'
                  component={'h4'}
                  sx={{ color: customTheme.palette.grey[900], fontFamily: typography.base.fontFamily }}
                >
                  Lavender
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Header
