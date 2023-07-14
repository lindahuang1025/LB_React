import { Settings, ArticleContract, WholelistsContract, PositionSummaryContract } from "@/contracts"
import { MarketIndicesInterface } from "@/contracts/interfaces"

export interface HeaderPropsNullable {
  marketIndices: MarketIndicesInterface | null
}

export interface HeaderProps extends HeaderPropsNullable {
  marketIndices: MarketIndicesInterface,
}

export interface PageProps {
  wholelists: WholelistsContract[],
  article: ArticleContract,
  positionSummary: PositionSummaryContract[],
  title: string,
  titleMessage: string,
  settings: Settings,
  type?: string,
};

export interface RouterProps extends HeaderProps, PageProps {
  intradayArticle: ArticleContract,
  top10Article: ArticleContract,
  marketArticle: ArticleContract,

  sectorLeadersTitle: string,
  sectorLeadersTitleMessage: string,
  sectorLeadersSetting: Settings,
  spotlightTitle: string,
  spotlightTitleMessage: string,
  spotlightSetting: Settings,
  top10Title: string,
  top10TitleMessage: string,
  top10Setting: Settings,
  thebigpictureSetting: Settings,
}

export interface IndexProps extends RouterProps {}
