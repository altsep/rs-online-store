import './index.scss';
import { defaults } from './constants';
import type { State } from './constants';
import init from './init';

const state: State = { ...defaults.state };

init(state);
