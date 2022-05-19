import {renderFunc} from './units/render';

const link='<link rel="stylesheet" type="text/css" href="./css/index.css" class="updatableLink">';

export const renderServices=()=>{
  renderFunc('<div class="service bronze">\n' +
    '            <h1 class="name">Эконом</h1>\n' +
    '            <img src="./img/low.png" alt="oh, no..." class="picture">\n' +
    '            <h1 class="name price">100 ₽</h1>\n' +
    '            <div class="about">\n' +
    '                <p>Дешевый пакет, дающий доступ к внешней функциональнсти карты.</p>\n' +
    '                <div class="accordion" id="f-acc">\n' +
    '                    <span>Доступно:</span>\n' +
    '                    <ul>\n' +
    '                        <li><span class="dot">•</span><p class="about">Геоинтерфейс, позволяющий выбрать точку для бизнеса, основываясь на транспортном потоке.</p></li>\n' +
    '                        <li><span class="dot">•</span><p class="about">Ещё какая-нибудь штука...</p></li>\n' +
    '                    </ul>\n' +
    '                    <a class="buy">Приобрести</a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <a class="btn-about f-s-btn"><i class="fa-solid fa-caret-down"></i></a>\n' +
    '        </div>\n' +
    '        <div class="service silver">\n' +
    '            <h1 class="name">Стандарт</h1>\n' +
    '            <img src="./img/medium.png" alt="oh, no..." class="picture">\n' +
    '            <h1 class="name price">10 €</h1>\n' +
    '            <div class="about">\n' +
    '                <p>Стандартный пакет, имеет доступ ко всей основной функциональности карты.</p>\n' +
    '                <div class="accordion" id="s-acc">\n' +
    '                    <span>Доступно:</span>\n' +
    '                    <ul>\n' +
    '                        <li><span class="dot">•</span><p class="about">Геоинтерфейс, позволяющий выбрать точку для бизнеса, основываясь на транспортном потоке.</p></li>\n' +
    '                        <li><span class="dot">•</span><p class="about">Подробный мониторниг транспорта и общественных марсшрутов.</p></li>\n' +
    '                        <li><span class="dot">•</span><p class="about">Ещё какая-нибудь штука...</p></li>\n' +
    '                    </ul>\n' +
    '                    <a class="buy">Приобрести</a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <a class="btn-about s-s-btn"><i class="fa-solid fa-caret-down"></i></a>\n' +
    '        </div>\n' +
    '        <div class="service gold">\n' +
    '            <h1 class="name">Полный</h1>\n' +
    '            <img src="./img/full.png" alt="oh, no..." class="picture">\n' +
    '            <h1 class="name price">20 $</h1>\n' +
    '            <div class="about">\n' +
    '                <p>Полный пакет, содержащий все продвинутые функции.</p>\n' +
    '                <div class="accordion" id="t-acc">\n' +
    '                    <span>Доступно:</span>\n' +
    '                    <ul>\n' +
    '                        <li><span class="dot">•</span><p class="about">Геоинтерфейс, позволяющий выбрать точку для бизнеса, основываясь на транспортном потоке.</p></li>\n' +
    '                        <li><span class="dot">•</span><p class="about">Подробный мониторниг транспорта и общественных марсшрутов.</p></li>\n' +
    '                        <li><span class="dot">•</span><p class="about">Более подробная информация о трафике.</p></li>\n' +
    '                        <li><span class="dot">•</span><p class="about">Ещё какая-нибудь штука...</p></li>\n' +
    '                    </ul>\n' +
    '                    <a class="buy">Приобрести</a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <a class="btn-about t-s-btn"><i class="fa-solid fa-caret-down"></i></a>\n' +
    '        </div>\n' +
    '        <div class="service business">\n' +
    '            <h1 class="name"></h1>\n' +
    '            <img src="./img/business.png" alt="oh, no..." class="picture">\n' +
    '            <h1 class="name price">1000 $</h1>\n' +
    '            <div class="about">\n' +
    '                <p>Особый тариф для вашего бизнеса, имеющий функцию аналитики конкруретнов.</p>\n' +
    '            </div>\n' +
    '            <a class="btn-about"><i class="fa-solid fa-cart-shopping" id="shop"></i></a>\n' +
    '            <a class="buy">Приобрести</a>\n' +
    '        </div>', link);
};

