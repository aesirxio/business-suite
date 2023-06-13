import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { integrationMenu as DMAMenus } from 'aesirx-dma-app';
import { integrationMenu as PIMMenus } from 'aesirx-pim-app';

const mainMenu = [
  {
    text: 'txt_left_menu_dashboard',
    link: `/pim`,
    icons: '/images/dashboard.svg',
    icons_color: '/images/dashboard.svg',
  },
  {
    text: 'txt_left_menu_invoices',
    link: `/erp`,
    icons: '/images/invoices.svg',
    icons_color: '/images/invoices.svg',
  },
  {
    text: 'txt_left_menu_customers',
    link: `/crm`,
    icons: '/images/customers.svg',
    icons_color: '/images/customers.svg',
  },
  {
    text: 'txt_left_menu_products',
    link: `/pim/products`,
    icons: '/images/products.svg',
    icons_color: '/images/products.svg',
    submenu: PIMMenus(),
  },
  {
    text: 'txt_left_menu_content',
    link: `/content`,
    icons: '/images/content.svg',
    icons_color: '/images/content.svg',
  },
  {
    text: 'txt_left_menu_marketing',
    link: `/dma`,
    icons: '/images/marketing.svg',
    icons_color: '/images/marketing.svg',

    submenu: DMAMenus(),
  },
  {
    text: 'txt_left_menu_assets',
    link: `/dam`,
    icons: '/images/assets.svg',
    icons_color: '/images/assets.svg',
  },
  {
    text: 'txt_left_menu_analytics',
    link: `/bi`,
    icons: '/images/analytics.svg',
    icons_color: '/images/analytics.svg',
  },
];

const settingMenu = [
  {
    name: 'profile',
    text: 'txt_profile',
    link: '/profile',
    icons_fa: faUser,
  },
];

const profileMenu = [
  {
    key: 1,
    text: 'txt_profile',
    link: '/profile',
  },
];

const menuSetup = [
  {
    text: 'txt_left_menu_members',
    link: '/settings',
    icons: '/images/setting.svg',
    icons_color: '/images/setting.svg',
  },
];

export { profileMenu, mainMenu, settingMenu, menuSetup };
