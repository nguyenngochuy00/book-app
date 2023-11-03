import React from 'react';
import styled from '@mui/system/styled';
import customTheme from '../../../theme';

interface IconSidebarProps {
    svg: React.ReactElement;
}

const StyledIcon = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    width: '60px',
    height: '46px',
    cursor: 'pointer',

    '& svg': {
        width: '24px',
        height: '24px',
        borderRadius: '10px',
        fill: customTheme.palette.grey[400],
        transition: 'all 0.3s ease-in-out',

        '&: hover': {
            width: '44px',
            height: '44px',
            padding: '10px',
            fill: 'white',
            background: customTheme.palette.primary.main,
        }
    },
});

const IconSidebar: React.FC<IconSidebarProps> = ({ svg }) => {
    return (
        <StyledIcon>
            {svg}
        </StyledIcon>
    );
};

export default IconSidebar;
