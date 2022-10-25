import useGetRepo from "./useGetRepo";
import { Block, Element, Title, SubTitle, Link, LinkBlock } from "./styled";
import LoadingPage from "./LoadingPage";
import GitHubHeader from "./GitHubHeader";

const GitHubApi = () => {
    const { result, status } = useGetRepo();

    switch (status) {
        case "ok":
            const gitHubBlocks = result.map(GitHubBlock => {
                const homepageUrl = GitHubBlock.homepage;
                const htmlUrl = GitHubBlock.html_url;

                return (
                    <Element key={GitHubBlock.id}>
                        <Title>{GitHubBlock.name[0].toUpperCase() + GitHubBlock.name.slice(1)}</Title>
                        {GitHubBlock.description ?
                            <SubTitle>{GitHubBlock.description}</SubTitle>
                            :
                            <SubTitle>This project doesn't have any description yet</SubTitle>}
                        <LinkBlock>Demo:
                            <Link target={"_blank"} href={homepageUrl}>{homepageUrl ? ` https://${homepageUrl.slice(23, -1).toLowerCase()}` : null}</Link>
                        </LinkBlock>
                        <LinkBlock>Code:
                            <Link target={"_blank"} href={htmlUrl}>{htmlUrl ? ` https://${htmlUrl.slice(27).toLowerCase()}` : null}</Link>
                        </LinkBlock>
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
                <Block><Element><h1>Something wrong</h1></Element></Block>
            )
        default: return (
            <Block><Element><h1>Something wrong</h1></Element></Block>
        )
    }
};

export default GitHubApi;