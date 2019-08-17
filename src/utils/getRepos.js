const GetRepos = (queryParams = "?since=daily") => {
  return fetch('https://github-trending-api.now.sh/repositories' + queryParams)
    .then(res => res.json());
}

export default GetRepos;