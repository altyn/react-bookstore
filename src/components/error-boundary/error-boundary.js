import React, {Component} from 'react';
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundary extends Component{

    state = {
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
    }

    render () {

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        return this.props.children;

    }
};