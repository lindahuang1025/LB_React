import React from "react"
import { useSearchParams } from 'next/navigation'

import { RouterProps, Routes } from "@/contracts"
import Index from "@/client/routes/Index"
import MyAlert from "@/client/routes/MyAlert"
import MyStockLists from "@/client/routes/MyStockLists"
import Recentaction from "@/client/routes/Recentaction"
import TheBigPicture from "../component/TheBigPicture"

const Router: React.FC<RouterProps> = (props: RouterProps) => {

  const searchParams = useSearchParams()

  switch (searchParams.get("p") as Routes) {
    case Routes.Myalert:
      return <MyAlert />
    case Routes.MyStockLists:
      return (
        <MyStockLists
          wholelists={props.wholelists}
          article={props.article}
          positionSummary={props.positionSummary}
          title={props.title}
          titleMessage={props.titleMessage}
          settings={props.settings}
        />
      )
    case Routes.Recentaction:
      return <Recentaction />
    case Routes.SectorLeaders:
      return (
        <Index
          wholelists={props.wholelists}
          article={props.intradayArticle}
          positionSummary={props.positionSummary}
          title={props.sectorLeadersTitle}
          titleMessage={props.sectorLeadersTitleMessage}
          settings={props.sectorLeadersSetting}
        />
      )
    case Routes.Stockspotlight:
      return (
        <Index
          wholelists={props.wholelists}
          article={props.top10Article}
          positionSummary={props.positionSummary}
          title={props.spotlightTitle}
          titleMessage={props.spotlightTitleMessage}
          settings={props.spotlightSetting}
          type ={"spotlight"}
        />
      )
    case Routes.Top10:
      return (
        <Index
          wholelists={props.wholelists}
          article={props.top10Article}
          positionSummary={props.positionSummary}
          title={props.top10Title}
          titleMessage={props.top10TitleMessage}
          settings={props.top10Setting}
          type ={"top10"}
        />
      )
    case Routes.TheBigPicture:
      return (
      <TheBigPicture   {...props} />
      )
    default:
      return (
        <Index
          wholelists={props.wholelists}
          article={props.article}
          positionSummary={props.positionSummary}
          title={props.title}
          titleMessage={props.titleMessage}
          settings={props.settings}
        />
      )
  }
}

export default Router