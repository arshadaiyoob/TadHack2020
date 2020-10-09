const color = {
    blue: '#1779ba',
    orange: '#ee6002',
    salmon: '#ba4343',
    black: '#3a3a3a',
    white: '#ffffff',
    veryLightPink: '#e0e0e0',
    veryLightPinkTwo: '#e5e5e5',
    brownGrey: '#999999',
    brownishGrey: '#666666',
    gray: 'gray',
    alpha80: 'rgba(0,0,0,0.8)',
    alpha50: 'rgba(0,0,0,0.5)',
    alphaSalmon: 'rgba(255, 102, 99, 0.8)',
    transparent: 'rgba(255,255,255, 0)',
    veryLightGray: '#cccccc',
    grapefruit: 'rgba(255,101,95,1)',
    niceBlue: 'rgba(20,99,185,1)',
  };
  
  export const modalBackground = color.alpha50;
  
 
  const primaryRed = color.salmon;
  
  const snackBarSuccess = color.blue;
  const snackBarFail = color.orange;
  
  const addAlpha = (hex: string, alpha: number): string =>
    `${hex}${Math.round(alpha * 2.55).toString(16)}`;
  
  export default {
    backgrounds: {
      disabled: color.veryLightPink,
      primaryRed,
      modalBackground,
      gray: color.brownGrey,
      darkGray: color.black,
      light: color.white,
    },
    borders: {
      gray: color.brownGrey,
      primaryRed,
      lightGray: color.veryLightPinkTwo,
      separatorGrey: color.veryLightPinkTwo,
    },
    icons: {
    
    },
    font: {
      snackBarSuccess,
      snackBarFail,
      descBlack: color.black,
      lightText: color.brownGrey,
      darkText: color.black,
      placeHolderText: color.veryLightPink,
      primaryRed,
      gray: color.brownGrey,
      invertedLightText: color.white,
      brownishGrey: color.brownishGrey,
      veryLightGray: color.veryLightGray,
    },
    ...color,
  };
  