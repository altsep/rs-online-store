import './index.scss';
import { defaults } from '../src/constants';
import type { State } from '../src/constants';
import init from '../src';

const state: State = { ...defaults.state };

init(state);
