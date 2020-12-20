import routes from '../constants/routes';

const rootElement = document.getElementById('main');

function getRouteInfo() {
  const hash = window.location.hash ? window.location.hash : '#';
  return { hash };
}

function handleHashChange() {
  const { hash } = getRouteInfo();
  // render appropriate view
  const viewname = routes[hash];
  if (viewname) {
    rootElement.innerHTML = viewname;
  }
}

export default {
  init() {
  window.addEventListener('hashchange', handleHashChange);
  handleHashChange();
  } 
}