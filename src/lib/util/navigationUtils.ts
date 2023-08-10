export const getPath = (): string | undefined => {
  const { pathname } = new URL(window.location.href);
  const currentpath = pathname.split('/');
  return currentpath[1] ? currentpath[1] : 'home';
};
