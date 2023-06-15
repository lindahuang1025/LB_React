import PageContainer from "../client/container/PageContainer";
import App from "../client/container/App";
import ErrorHandler from "../client/component/ErrorHandler";

const Index =() => {
  return (
    <PageContainer>
      <ErrorHandler>
        <App />
      </ErrorHandler>
    </PageContainer>
  )
}

export default Index;