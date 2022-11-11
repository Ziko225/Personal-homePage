import { Block, Element, Title, SubTitle, Link, LinkBlock } from "./styled";
import LoadingPage from "./LoadingPage";
import GitHubHeader from "./GitHubHeader";
import ErrorPage from "./ErrorPage";
import useGetRepositories from "./useGetRepo";

const GitHubApi = () => {
    const { result, status } = useGetRepositories();

    switch (status) {
        case "ok":
            const gitHubBlocks = result.map(GitHubBlock => {
                const homepageUrl = GitHubBlock.homepage;
                const htmlUrl = GitHubBlock.html_url;
                const name = GitHubBlock.name;
                const description = GitHubBlock.description;

                return (
                    <Element key={GitHubBlock.id}>
                        <Title>{name[0].toUpperCase() + name.slice(1)}</Title>
                        {description ?
                            <SubTitle>{description}</SubTitle>
                            :
                            <SubTitle>This project doesn't have any description yet</SubTitle>}
                        {
                            homepageUrl &&
                            <LinkBlock>Demo:
                                <Link target={"_blank"} href={homepageUrl}>{homepageUrl ? ` https://${homepageUrl.slice(23, -1).toLowerCase()}` : null}</Link>
                            </LinkBlock>
                        }

                        {
                            htmlUrl &&
                            <LinkBlock>Code:
                                <Link target={"_blank"} href={htmlUrl}>{htmlUrl ? ` https://${htmlUrl.slice(27).toLowerCase()}` : null}</Link>
                            </LinkBlock>
                        }

                    </Element>
                )
            })

            return (
                <>
                    <GitHubHeader />
                    <Block>{gitHubBlocks}</Block>
                </>
            )
        case "loading": return (
            <>
                <GitHubHeader />
                <LoadingPage />
            </>
        )
        case "error":
            return (
                <>
                    <GitHubHeader />
                    <ErrorPage />
                </>
            )
        default: return (
            <>
                <GitHubHeader />
                <ErrorPage />
            </>
        )
    }
};

export default GitHubApi;