import useGetRepo from "./useGetRepo";
import { Block, Element, Title, SubTitle, Link } from "./styled";

const GitHubApi = () => {
    const { result, status } = useGetRepo();

    switch (status) {
        case "ok":
            const elements = result.map(element => (
                <Element key={element.id}>
                    <Title>{element.name}</Title>
                    {element.description ?
                        <SubTitle>{element.description}</SubTitle>
                        :
                        <SubTitle>This project doesn't have any description yet</SubTitle>}
                    Demo: <Link target={"_blank"} href={element.html_url}>{element.homepage}</Link>
                    Code: <Link target={"_blank"} href={element.html_url}>{element.html_url}</Link>
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