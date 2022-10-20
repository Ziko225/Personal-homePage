import useGetRepo from "./useGetRepo";
import { Block, Element, Title, SubTitle, Link, LinkBlock } from "./styled";

const GitHubApi = () => {
    const { result, status } = useGetRepo();

    switch (status) {
        case "ok":
            const gitHubBlocks = result.map(GitHubBlock => {
                const homepageUrl = GitHubBlock.homepage
                const htmlUrl = GitHubBlock.html_url

                return (
                    <Element key={GitHubBlock.id}>
                        <Title>{GitHubBlock.name[0].toUpperCase() + GitHubBlock.name.slice(1)}</Title>
                        {GitHubBlock.description ?
                            <SubTitle>{GitHubBlock.description}</SubTitle>
                            :
                            <SubTitle>This project doesn't have any description yet</SubTitle>}
                        <LinkBlock>Demo:
                            <Link target={"_blank"} href={GitHubBlock.html_url}>{homepageUrl ? ` https://${homepageUrl.slice(23, -1).toLowerCase()}` : null}</Link>
                        </LinkBlock>
                        <LinkBlock>Code:
                            <Link target={"_blank"} href={GitHubBlock.html_url}>{htmlUrl ? ` https://${htmlUrl.slice(27).toLowerCase()}` : null}</Link>
                        </LinkBlock>
                    </Element>
                )
            })

            return (
                <Block>{gitHubBlocks}</Block>
            )
        case "loading": return (
            <Block><Element><h1>Loading..</h1></Element></Block>
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

export default GitHubApi