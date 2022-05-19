import {deleteFunction} from './delete-content';

export const updatePage=(tag, render) => {
  tag.addEventListener('click', (evt) => {
    evt.preventDefault();
    deleteFunction();
    render();
  });
};
