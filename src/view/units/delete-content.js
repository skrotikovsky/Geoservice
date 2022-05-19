
export const deleteFunction=()=>{
  const content = document.querySelector('content');
  content.innerHTML='';
  const links = document.querySelectorAll('.updatableLink');
  links.forEach((e) => {
    e.remove();
  });
};
