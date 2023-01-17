import { App } from '../src/components/init';

const createApp = (): { root: HTMLBodyElement; render: () => void } => {
  document.body.id = 'root';
  const root = document.body as HTMLBodyElement;
  const app = new App(root);
  const render = app.render.bind(app);

  render();

  return { root, render };
};

export { createApp };
