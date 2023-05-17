import { CardsList, Card, Title, SubTitle, Link, LinkBlock } from "./styled";

const RepositoryCards = ({ data }) => {
    if (data[0]) {
        return (
            <CardsList>
                {
                    data.map((repository) => {
                        const name = repository.name;
                        const homepageUrl = repository.homepage;
                        const htmlUrl = repository.html_url;
                        const description = repository.description;
                        const titileWithFirstUpperLetter = name[0].toUpperCase() + name.slice(1);
                        const shortHomePageUrl = homepageUrl.length > 30
                            ? `https://${homepageUrl.slice(23, -1).toLowerCase()}`
                            : homepageUrl.toLowerCase();
                        const shortHtmlUrl = `https://${htmlUrl.slice(27).toLowerCase()}`;

                        return (
                            <Card key={repository.id}>
                                <Title>{titileWithFirstUpperLetter}</Title>
                                {description
                                    ? <SubTitle>{description}</SubTitle>
                                    : <SubTitle>This project doesn't have any description yet</SubTitle>}
                                {
                                    homepageUrl &&
                                    <LinkBlock>Demo: <Link target={"_blank"} href={homepageUrl}>{shortHomePageUrl}</Link>
                                    </LinkBlock>
                                }
                                {
                                    htmlUrl &&
                                    <LinkBlock>Code: <Link target={"_blank"} href={htmlUrl}>{shortHtmlUrl}</Link>
                                    </LinkBlock>
                                }
                            </Card>
                        );
                    })
                }
            </CardsList>)
    } else {
        return (
            <Title>{"Repositories not found"}</Title>
        )
    }
};

export default RepositoryCards;