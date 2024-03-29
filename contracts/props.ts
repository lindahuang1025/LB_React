import { Settings } from "@/contracts"
import { MarketIndicesContract } from "@/contracts"
import { ArticleContract } from "@/contracts"
import { WholelistsContract } from "@/contracts"
import { PositionSummaryContract } from "@/contracts"

export interface PageProps {
  wholelists: WholelistsContract[],
  article: ArticleContract,
  positionSummary: PositionSummaryContract[],
  marketIndices: MarketIndicesContract,
  title: string,
  titleMessage: string,
  settings: Settings
};

export interface RouterProps extends PageProps {
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

  marketIndices: MarketIndicesContract, // TODO
}

export interface HeaderProps {
  marketIndices: MarketIndicesContract,
}

export interface IndexProps extends RouterProps, HeaderProps {}
