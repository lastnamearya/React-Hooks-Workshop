import React, { Fragment } from 'react';
import Header from './Header';
import Filter from './components/Filter'; // we can create a directory strucure based on components as well
import Trending from './Trending';


function App(props) {
    const [loading, setLoading] = React.useState(false);
    const [trendingRepos, setTrendingRepos] = React.useState([]);

    const handleFilterChange = (data) => {
        setTrendingRepos(data);
        setLoading(false);
    }

    const showLoader = () => {
        setLoading(true);
    }

    return (
        <Fragment>
            <Header />
            <main>
                <Filter handleFilterChange={handleFilterChange} showLoader={showLoader} />
                <Trending trendingRepos={trendingRepos} loading={loading} />
            </main>
        </Fragment>
    );
}

export default App;