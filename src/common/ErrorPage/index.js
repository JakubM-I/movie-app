import { PageTitle } from "../PageHeader";
import { PageContainer } from "../styled/page-container";
import warning from "../assets/warning.png"

const ErrorPage = () => {
    return (
        <PageContainer>
            <div>
                <img src={warning} alt="warning" />
                <PageTitle title="Ooops! Something went wrong... " />
            </div>

        </PageContainer>
    )
}
export default ErrorPage;
