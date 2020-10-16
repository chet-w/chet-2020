export interface IGlobalStyles {
  theme: ITheme
}

export interface ITheme {
  screens: {
    sm: number,
    md: number,
    lg: number,
    xl: number,
  },
  colors: {
    light: {
      primary: IColorSet,
      secondary: IColorSet,
      neutrals: INeutralColorSet
    },
    dark: {
      primary: IColorSet,
      secondary: IColorSet,
      neutrals: INeutralColorSet
    }
  },
}

interface IColorSet {
  tint: string,
  base: string,
  shade: string,
  gradientY?: string,
  gradientX?: string
};

interface INeutralColorSet {
  darker: string,
  dark: string,
  base: string,
  light: string,
  lighter: string,
}