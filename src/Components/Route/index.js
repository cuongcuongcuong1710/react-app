import React from 'react';
import { Redirect } from 'react-router-dom';
import { accessToken } from '../../Common/constants';

export const NormalRoute = ({ layout: Layout, component: Component, ...props }) => {
    if (!Layout) {
        return <Component {...props} />;
    }
    return (
        <Layout>
            <Component {...props} />
        </Layout>
    );
};


export const PrivateRoute = ({ layout: Layout, component: Component, ...props }) => {
    const token = localStorage.getItem('accessToken');
    console.log('acccccccccc', accessToken);
    if (token === null) {
        return <Redirect to='/login' />
    }
    if (!Layout) {
        return <Component {...props} />;
    }
    return (
        <Layout>
            <Component {...props} />
        </Layout>
    );

}


