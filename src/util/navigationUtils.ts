export const getPath = (target: string): string | undefined => {
  const { pathname } = new URL(window.location.href);
  console.log(pathname);
  const currentpath = pathname.split('/');
  console.log(currentpath);
  return currentpath[1] ? currentpath[1] : 'home';
};
