import { PageTitle } from "../PageHeader"
import { PageContainer } from "../styled/page-container";
import noresult from "../assets/no-results.png"
import { StyledImg } from "./styled";

const NoResults = () => {
    return (
        <PageContainer>
            <PageTitle title="Sorry, there are no results for “Muan”" />
            <StyledImg src={noresult} alt="No results" />
        </PageContainer>
    )
};

export default NoResults;