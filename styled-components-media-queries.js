const size = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
}

export const screen = {
  maxXs: `(max-width: ${size.xs})`,
  minXs: `(min-width: ${size.xs})`,
  minSm: `(min-width: ${size.sm})`,
  maxSm: `(max-width: ${size.sm})`,
  minMd: `(min-width: ${size.md})`,
  minLg: `(min-width: ${size.lg})`,
  minXl: `(min-width: ${size.xl})`
};

// Usage:
// const MainPageImage = styled.div`
//   @media ${screen.maxXs} {
//     height: 18.4rem;
//   }
//   @media ${screen.mixXs} {
//     height: 25rem;
//   }
//   @media ${screen.minSm} {
//     height: 32.8rem;
//   }
//   @media ${screen.minMd} {
//     height: 26rem;
//   }
//   @media ${screen.minLg} {
//     height: 30rem;
//   }
//   @media ${screen.minXl} {
//     height: 50rem;
//   }
// `;