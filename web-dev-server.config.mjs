import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  open: true,
  nodeResolve: true,
  rootDir: './',
  plugins: [esbuildPlugin({ ts: true, target: 'esnext' })]
};