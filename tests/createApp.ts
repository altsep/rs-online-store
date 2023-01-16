import { App } from '../src/components/init';

export const createRoot = (): HTMLDivElement => {
  const root = document.createElement('div');
  root.id = 'root';

  return root;
};

const createApp = (): { root: HTMLDivElement; render: () => void } => {
  const root = createRoot();
  const app = new App(root);
  const render = app.render.bind(app);

  document.body.append(root);
  render();

  return { root, render };
};

export { createApp };
