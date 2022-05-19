import {renderMain} from './view/index-main';
import {renderServices} from './view/index-services';
import {renderMap} from './view/index-map';
import {updatePage} from './view/units/update-page';
renderMain();

const servicesTag = document.querySelector('#services-button');
const mapTag = document.querySelector('#map-button');
const mainTag = document.querySelector('#main-button');

updatePage(mapTag,renderMap);
updatePage(mainTag,renderMain);
updatePage(servicesTag,renderServices);

