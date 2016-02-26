import AppDispatcher from '../dispatchers/AppDispatcher';
import FilterableListConstants from '../constants/FilterableListConstants';

class FilterableListActions{

    loadListData(list){
        AppDispatcher.handleAction({
            actionType:FilterableListConstants.LOAD_LIST_DATA,
            list:list
        });
    }
    
    filterList(searchString){
        AppDispatcher.handleAction({
            actionType:FilterableListConstants.FILTER_LIST,
            searchString:searchString
        });
    }
    
    toggleItemSelection(id){
        AppDispatcher.handleAction({
            actionType:FilterableListConstants.TOGGLE_ITEM_SELECTION,
            id:id
        });
    }

}

export default new FilterableListActions();