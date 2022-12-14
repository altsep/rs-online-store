import './index.scss';
import { defaultState } from '../src/constants';
import init from '../src/init';

export interface State {}

const state: State = { ...defaultState };

init(state);
