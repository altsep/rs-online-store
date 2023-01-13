import { App } from '../src/components/init';

const createApp = (): { root: HTMLDivElement; render: () => void } => {
  const root = document.createElement('div');
  root.id = 'root';

  document.body.append(root);

  const app = new App(root);
  const render = app.render.bind(app);

  render();

  return { root, render };
};

export { createApp };
