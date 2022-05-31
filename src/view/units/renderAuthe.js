const RenderPosition = {
  BEFOREBEGIN : 'beforebegin',
  AFTERBEGIN : 'afterbegin',
  BEFOREEND : 'beforeend',
  AFTEREND : 'afterend',
};

const linkContainer = document.querySelector('head');
const contentContainer = document.querySelector('content');

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

export const renderAuthe = (content,link) => {
  renderTemplate(contentContainer, content, RenderPosition.AFTERBEGIN);
  renderTemplate(linkContainer,link,RenderPosition.BEFOREEND);
};
