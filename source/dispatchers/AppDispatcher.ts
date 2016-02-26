/// <reference path="../../typings/tsd.d.ts" />

import {Dispatcher} from 'flux'

class AppDispatcher extends Dispatcher<any>{
    handleAction(action){
        this.dispatch({
            source:'VIEW_ACTION',
            action:action
        });
    } 
}

export default new AppDispatcher();