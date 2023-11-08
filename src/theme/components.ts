import { Components, Theme } from '@mui/material'
import palette from './palette'
import typography from './typography'

const components: Components<Theme> = {
  MuiButton: {
    defaultProps: {
      size: 'medium',
      variant: 'contained',
      color: 'primary'
    },
    variants: [
      {
        props: { variant: 'contained' },
        style: {
          height: '42px',
          fontSize: '16px',
          fontWeight: 500,
          fontFamily: typography.base.fontFamily,
          backgroundColor: palette.primary.main,
          color: palette.grey[100],
          textTransform: 'capitalize'
        }
      },
      {
        props: { variant: 'text' },
        style: {
          width: '116px',
          height: '42px',
          fontSize: '16px',
          fontWeight: 500,
          fontFamily: typography.base.fontFamily,
          backgroundColor: palette.grey[200],
          color: palette.grey[900],
          textTransform: 'capitalize'
        }
      },
      {
        props: { size: 'medium' },
        style: {
          padding: '12px 30px',
          borderRadius: '10px',
          border: '0 solid transparent',
          cursor: 'pointer',
          transition: 'all 0.3s ease-in-out',

          '&:hover': {
            opacity: 0.8
          }
        }
      }
    ]
  },

  MuiTable: {
    defaultProps: {
      size: 'medium'
    },
    styleOverrides: {
      root: {
        width: '100%',
        borderCollapse: 'collapse',

        '& thead': {
          textAlign: 'left',

          '& tr': {
            '& th': {
              borderBottom: '2px solid #e4dcdc',
              fontFamily: typography.base.fontFamily,
              fontSize: typography.base.fontSize,
              fontWeight: typography.base.fontWeight,
              lineHeight: typography.base.lineHeight,
              color: palette.grey[400]
            }
          }
        },

        '& thead, & tbody': {
          '& tr': {
            '& th, &td': {
              padding: '15px'
            },

            '& th:first-child, & td:first-child': {
              width: '150px'
            },

            '& th:nth-child(2), & td:nth-child(2)': {
              width: '550px'
            },

            '& th:nth-child(3), & td:nth-child(3)': {
              width: '220px'
            },

            '& th:nth-child(4), & td:nth-child(4)': {
              width: '180px'
            },

            '& th:last-child, & td:last-child': {
              width: '95px'
            }
          }
        },

        '& tbody': {
          '& tr': {
            '& td': {
              fontFamily: typography.base.fontFamily,
              fontSize: typography.base.fontSize,
              fontWeight: typography.base.fontWeight,
              lineHeight: 'normal',
              color: palette.grey[800],

              '&:nth-child(2)': {
                fontWeight: typography.h4.fontWeight,
                color: palette.grey[900]
              }
            }
          }
        }
      }
    }
  }
}

export default components
