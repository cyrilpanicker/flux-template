/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import FilterableListActions from '../actions/FilterableListActions';

export default class List extends React.Component<any,any>{
    
    render(){
        return(
            <ul className="list">
                {
                    this.props.items.map(item => {
                        return (
                            <li className={'item'+(item.selected?' selected':'')}
                                key={item.id}
                                onClick={FilterableListActions.toggleItemSelection.bind(null,item.id)}
                            >
                                {item.name}
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}