export const enableScroll = (scrollPosY: number) => {
  document.body.style.removeProperty('overflow');
  document.body.style.removeProperty('position');
  document.body.style.removeProperty('top');
  document.body.style.removeProperty('width');
  window.scrollTo(0, scrollPosY);
};

export const disableScroll = (scrollPosY: number) => {
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosY}px`;
  document.body.style.width = '100%';
};
