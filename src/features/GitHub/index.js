import LoadingPage from "./LoadingPage";
import GitHubHeader from "./GitHubHeader";
import ErrorPage from "./ErrorPage";
import useGetRepositories from "./useGetRepo";
import RepositoryCards from "./RepositoryCards";

const GitHubApi = () => {
    const { status, data } = useGetRepositories();
    switch (status) {
        case "ok":
            return (
                <>
                    <GitHubHeader />
                    <RepositoryCards data={data} />
                </>
            );
        case "init":
            return (
                <>
                    <GitHubHeader />
                    <LoadingPage />
                </>
            );
        case "error":
            return (
                <>
                    <GitHubHeader />
                    <ErrorPage />
                </>
            );
        default:
            return (
                <>
                    <GitHubHeader />
                    <ErrorPage />
                </>
            );
    };
};

export default GitHubApi;