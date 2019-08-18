import React, { Component } from 'react';
import Loader from './Loader';
import List from './List';
import GetRepos from './utils/getRepos';


function Trending(props) {
    const [loading, setLoading] = React.useState(props.loading);
    const [trendingRepos, setTrendingRepos] = React.useState(props.trendingRepos);

    React.useEffect(() => {
        fetchTrendingRepos();
    }, []);

    React.useEffect(() => {
        setTrendingRepos(trendingRepos);
    }, [trendingRepos]);

    React.useEffect(() => {
        setLoading(props.loading);
    }, [loading]);

    const fetchTrendingRepos = () => {
        return GetRepos()
            .then(trendingRepos => {
                setTrendingRepos(trendingRepos);
                setLoading(false);
            })
            .catch(err => console.log(err))
    }

    return !loading && trendingRepos.length ? <List trendingRepos={trendingRepos} /> : <Loader />;
}

export default Trending;