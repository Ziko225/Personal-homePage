import useGetRepo from "./useGetRepo";
import { Block, Element, Title, SubTitle, Link } from "./styled";

const GitHubApi = () => {
    const { result, status } = useGetRepo();

    switch (status) {
        case "ok":
            const elements = result.map(element => (
                <Element key={element.id}>
                    <Title>{element.name}</Title>
                    <SubTitle>{element.description}</SubTitle>
                    <Link>Demo: {element.homepage}</Link>
                    <Link>Code: {element.html_url}</Link>
                </Element>
            ))
            return (
                <Block>{elements}</Block>
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