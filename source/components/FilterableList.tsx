/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import List from '../components/List';
import FilterableListStore from '../stores/FilterableListStore';
import FilterableListActions from '../actions/FilterableListActions'

export default class FilterableList extends React.Component<any,any>{
    
    state = {
        items:FilterableListStore.getFilteredList()
    };
    
    updateState(){
        this.setState({
            items:FilterableListStore.getFilteredList()
        });
    }
    
    componentDidMount(){
        FilterableListStore.addChangeListener(this.updateState.bind(this));
    }
    
    componentWillUnmount(){
        FilterableListStore.removeChangeListener(this.updateState);
    }
    
    onFilter(event){
        FilterableListActions.filterList(event.target.value);
    }
    
    render(){
        return (
            <div className="filterable-list">
                <input className="filter-input" onChange={this.onFilter.bind(this)} />
                <List items={this.state.items}/>
            </div>
        );
    }
    
}