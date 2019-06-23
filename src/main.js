import { SideMenu } from './libs/sidemenu';
import { SideMenuElement } from './libs/element';

/**
 * サイドメニューのシングルトン
 */
const sidemenu = new SideMenu();

export { sidemenu, SideMenuElement };