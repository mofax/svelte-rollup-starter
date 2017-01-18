import App from './components/App.html';

window.app = new App({
  target: document.querySelector('main'),
  data: {
    answer: 42
  }
});