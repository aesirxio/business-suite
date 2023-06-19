declare module '*.module.scss' {
  const styles: { [className: string]: string };
  export default styles;
}

declare module '*.png';
declare module '*.svg';
declare module 'aesirx-dam-app';
declare module 'aesirx-dma-app';
declare module 'aesirx-pim-app';
declare module 'aesirx-crm-app';
declare module 'aesirx-content-app';
declare module 'aesirx-bi-app';
declare module 'aesirx-uikit';
declare module 'aesirx-lib';

declare const VERSION: string;
