import PageContainer from "../client/container/PageContainer";
import App from "../client/container/App";
import ErrorHandler from "../client/component/ErrorHandler";
import { getWholelists, getArticle, getPositionSummary } from "../client/services/lbService";
import { NextPageContext } from 'next';

const Index =(props) => {
  return (
    <PageContainer>
      <ErrorHandler>
        <App {...props}/>
      </ErrorHandler>
    </PageContainer>
  )
}

Index.getInitialProps = async (ctx: NextPageContext) => {
  const resWholelists = await getWholelists();
  const resArticle = await getArticle();
  const resPositionSummary = await getPositionSummary();
  return { 
    wholelists: resWholelists.data,
    article: resArticle.data,
    positionSummary: resPositionSummary.data
  }
}

export default Index;