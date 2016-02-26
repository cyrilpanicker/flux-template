/// <reference path="../../typings/tsd.d.ts" />

import {EventEmitter} from 'events';
import AppDispatcher from '../dispatchers/AppDispatcher';
import FilterableListConstants from '../constants/FilterableListConstants';

var _fullList =[];
var _filteredList = [];

function toggleSelection (list:any[],id){
    for (var index = 0; index < list.length; index++) {
        if (list[index].id === id) {
            list[index].selected = !(list[index].selected);
            break;
        }
    }
}

function copyList(list1,list2:any[]){
    list2.forEach(item => {
        list1.push({
            id:item.id,
            name:item.name,
            selected:item.selected
        });
    });
}

function filterList(list:any[],searchString:string) {
    return _fullList.filter(item => {
        return item.name.search(searchString) > -1;
    });
}

class FilterableListStore extends EventEmitter{
    
    dispatcherIndex = AppDispatcher.register(payload => {
        var action = payload.action;
        switch(action.actionType){
            case FilterableListConstants.LOAD_LIST_DATA:
                copyList(_fullList,action.list);
                copyList(_filteredList,action.list);
                break;
            case FilterableListConstants.FILTER_LIST:
                _filteredList=[];
                copyList(_filteredList,filterList(_fullList,action.searchString));
                break;
            case FilterableListConstants.TOGGLE_ITEM_SELECTION:
                toggleSelection(_fullList,action.id);
                toggleSelection(_filteredList,action.id);
                break;
            default:
                return true;
        }
        this.emitChange();
        return true;
    });
    
    getFullList(){
        return _fullList;
    }
    
    getFilteredList(){
        return _filteredList;
    }
    
    emitChange(){
        this.emit('CHANGE');
    }
    
    addChangeListener(callback){
        this.addListener('CHANGE',callback);
    }
    
    removeChangeListener(callback){
        this.removeListener('CHANGE',callback);
    }
    
}

export default new FilterableListStore();