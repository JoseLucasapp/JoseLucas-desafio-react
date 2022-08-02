import { SetStateAction } from 'react';

export enum ThemeEnum {
    light = 'ligth',
    dark = 'dark'
}

export interface themeContextInterface {
    theme: ThemeEnum;
    setTheme: (value: SetStateAction<ThemeEnum>) => void;
}