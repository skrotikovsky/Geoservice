import {renderMain} from './view/index-main';
import {renderServices} from './view/index-services';
import {renderMap} from './view/index-map';
import {updatePage} from './view/units/update-page';
import {renderAuth} from './view/auth';
import {renderAuthe} from './view/units/renderAuthe';

const servicesTag = document.querySelector('.services-button');
const mapTag = document.querySelector('.map-button');
const mainTag = document.querySelector('.main-button');
const mainTagBottom = document.querySelector('li a.main-button');
const mapTagBottom = document.querySelector('li a.map-button');
const servicesTagBottom = document.querySelector('li a.services-button');


renderAuth();

updatePage(mapTag,renderMap);
updatePage(mainTag,renderMain);
updatePage(servicesTag,renderServices);
updatePage(servicesTagBottom,renderServices);
updatePage(mainTagBottom,renderMain);
updatePage(mapTagBottom,renderMap);

