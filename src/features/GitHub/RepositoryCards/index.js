import { CardsList, Card, Title, SubTitle, Link, LinkBlock } from "./styled";

const RepositoryCards = ({ data }) => {
    if (data[0]) {
        return (
            <CardsList>
                {
                    data.map((repository) => {
                        const name = repository.name || "";
                        const homepageUrl = repository.homepage;
                        const htmlUrl = repository.html_url;
                        const description = repository.description;

                        const filter = (url) => {
                            if (!url) return;

                            url = url.slice(8).toLowerCase();

                            if (url?.length > 27) {
                                return url.slice(0, 27) + "...";
                            }

                            return `${url}`;
                        };

                        const titileWithFirstUpperLetter = name[0].toUpperCase() + name.slice(1);

                        return (
                            <Card key={repository.id}>
                                <Title>{titileWithFirstUpperLetter}</Title>
                                {description
                                    ? <SubTitle>{description}</SubTitle>
                                    : <SubTitle>This project doesn't have any description yet</SubTitle>}
                                {
                                    homepageUrl &&
                                    <LinkBlock>Demo: <Link target={"_blank"} href={homepageUrl}>{filter(homepageUrl)}</Link>
                                    </LinkBlock>
                                }
                                {
                                    htmlUrl &&
                                    <LinkBlock>Code: <Link target={"_blank"} href={htmlUrl}>{filter(htmlUrl)}</Link>
                                    </LinkBlock>
                                }
                            </Card>
                        );
                    })
                }
            </CardsList>);
    } else {
        return (
            <Title>{"Repositories not found"}</Title>
        );
    }
};

export default RepositoryCards;