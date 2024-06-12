import { ActionTree } from 'vuex';
import { ExampleStateInterface } from './state';
import { StateInterface } from '../index';

/*eslint-disable */
const actions: ActionTree<ExampleStateInterface, StateInterface> = {
    someAction( /*{ commit }, payload  */ ) {
        // a line to prevent linter errors
    }
}



export default actions;