const RenderPosition = {
  BEFOREBEGIN : 'beforebegin',
  AFTERBEGIN : 'afterbegin',
  BEFOREEND : 'beforeend',
  AFTEREND : 'afterend',
};

const linkConteiner = document.querySelector('head');
const contentConteiner = document.querySelector('content');



const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

export const renderFunc = (content,link) => {
  renderTemplate(contentConteiner, content, RenderPosition.AFTERBEGIN);
  renderTemplate(linkConteiner,link,RenderPosition.AFTERBEGIN);
};

