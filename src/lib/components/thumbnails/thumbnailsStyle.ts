import { color } from '../../styles';

export const thumbnailsStyle = {
  error: {
    iconWidth: '34px',
    iconHeight: '34px',
    iconTop: '24px',
    iconRight: '34px',
    background: 'rgba(40, 40, 40)',
  },
  delete: {
    imageBorder: `1px solid ${color.borderLine200}`,
    iconWidth: '24px',
    iconHeight: '24px',
    iconTop: '-8px',
    iconRight: '-8px',
  },
  normal: {
    imageBorder: `1px solid ${color.borderLine200}`,
  },
  play: {
    iconWidth: '34px',
    iconHeight: '34px',
    iconTop: '34px',
    iconRight: '34px',
    background: 'rgba(40, 40, 40)',
  },
  select: {
    iconWidth: '34px',
    iconHeight: '34px',
    iconTop: '34px',
    iconRight: '34px',
    background: `${color.primary500}`,
  },
};
