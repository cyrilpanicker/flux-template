/// <reference path="../typings/tsd.d.ts" />
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as $ from 'jquery';

import FilterableListStore from './stores/FilterableListStore';
import FilterableListActions from './actions/FilterableListActions';
import FilterableList from './components/FilterableList';

var _react = React;

var listData = [
    {
        id:1,
        name:'apple',
        selected:false
    },
    {
        id:2,
        name:'orange',
        selected:false
    },
    {
        id:3,
        name:'mango',
        selected:false
    },
    {
        id:4,
        name:'guava',
        selected:false
    },
    {
        id:5,
        name:'pear',
        selected:false
    },
    {
        id:6,
        name:'kiwi',
        selected:false
    },
    {
        id:7,
        name:'banana',
        selected:false
    },
];

$(() => {
    FilterableListActions.loadListData(listData);
    $(document.body).append('<div id="mount"></div>');
    ReactDOM.render(
        <FilterableList/>,
        $('#mount')[0]
    )
});