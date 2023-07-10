import { UnorderedListOutlined, EllipsisOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import WholeList from "@/client/component/WholeList";
import Article from "@/client/component/Article";
import PositionSummaryTable from "@/client/component/PositionSummaryTable";
import SymbolDetail from "@/client/component/SymbolDetail";
import { WholelistsContract, ArticleContract, PositionSummaryContract, WholelistsGroupContract, SelectLeader } from "@/contracts";
import { Settings } from "@/contracts/marketContract";

const selectLeader = {
  article: "Article",
  positionSummary: "Position Summary",
  wholeList: "WholsList"
}

interface dataType {
  wholelists: WholelistsContract[],
  article: ArticleContract,
  positionSummary: PositionSummaryContract[],
  title: string,
  titleMessage: string,
  settings: Settings
};

interface CustomEvent {
  groupIdx: number,
  itemIdx: number
}

const IndexLayout = (props: dataType) => {
  const { wholelists, article, positionSummary, settings, titleMessage, title } = props;
  let [wholeGoups, setWholeGoups] = useState<WholelistsGroupContract[]>([]);
  let [openNav, setOpenNav] = useState<string>(selectLeader.wholeList);
  let [wholeItem, setWholItem] = useState<WholelistsContract>(Object);
  let positionSummaryClass = openNav == selectLeader.positionSummary ? "rounded text-primary border-t-8 border-t-primary" : "",
    articleActiveClass = openNav == selectLeader.article ? "bg-primary" : "bg-drakGreen",
    articleUnActiveClass = openNav == selectLeader.article ? "bg-drakGreen" : "bg-primary",
    isActiveWholeList = openNav == selectLeader.wholeList;

  useEffect(() => {
    let groups = wholelists.map(x => x.Header)
      .reduce((prev: string[], cur: string) => prev.includes(cur) ? prev : [...prev, cur], []);
    let wholeGoupList: WholelistsGroupContract[] = [];
    groups.forEach((header: string) => {
      let groupItems = (wholelists || []).filter(x => x.Header == header);
      wholeGoupList.push({
        header: header,
        items: groupItems
      });
    });
    setWholeGoups(wholeGoupList);
    if (wholeGoupList[0] && wholeGoupList[0].items) {
      setWholItem(wholeGoupList[0].items[0]);
    }
  }, [wholelists]);

  const MainComponent = () => {
    switch (openNav) {
      case selectLeader.article:
        return <Article article={article} />;
      case selectLeader.positionSummary:
        return <PositionSummaryTable positionSummary={positionSummary} />;
      case selectLeader.wholeList:
        return <SymbolDetail wholeItem={wholeItem} settings={settings} />;
      default:
        return <SymbolDetail wholeItem={wholeItem} settings={settings} />;
    }
  }

  const onClickWholeList = (props: CustomEvent) => {
    const { groupIdx, itemIdx } = props;
    setOpenNav(selectLeader.wholeList);
    let wholeItem = wholeGoups[groupIdx].items[itemIdx];
    setWholItem(wholeItem);
  }

  console.log(wholeGoups)


  return (
    <div className="desktop:w-[1339px] laptop:w-[970px] tablet:w-[760px] mx-auto my-2">
      <h3 className="text-2xl py-4 hidden tablet:block">{title}</h3>
      <div className="flex ">
        <div className="w-full desktop:w-[450px] laptop:w-[360px] tablet:w-[300px] desktop:min-w-[450px] laptop:min-w-[360px] tablet:min-w-[300px] px-4 tablet:px-0">
          <div className="flex text-white cursor-pointer" onClick={() => setOpenNav(selectLeader.article)}>
            <div className="flex-1 bg-[#1A7601] p-4 text-white text-lg">{titleMessage}</div>
            <div className={"text-4xl flex items-center justify-center w-[45px] bg-primary"}>
              <EllipsisOutlined />
            </div>
          </div>

          {positionSummary.length > 0 && <div className={"rounded border-[#FFFFFF] text-lg shadow-md mt-[18px] p-3 flex cursor-pointer bg-white border-t-8 " + positionSummaryClass}
            onClick={() => setOpenNav(selectLeader.positionSummary)}>
            <UnorderedListOutlined className="mt-1" />
            <span className="pl-2">POSITIONS SUMMARY</span>
          </div>}

          <WholeList
            wholeGoups={wholeGoups}
            isActiveWholeList={isActiveWholeList}
            onClickWholeList={onClickWholeList}
            settings={settings}
          />
        </div>
        <div className="hidden tablet:flex flex-1 overflow-hidden">
          <div>
            {openNav === selectLeader.article && <Article article={article} />}
            {openNav === selectLeader.positionSummary && <PositionSummaryTable positionSummary={positionSummary} />}
            {openNav === selectLeader.wholeList && <SymbolDetail wholeItem={wholeItem} settings={settings} />}
          </div>
        </div>
      </div>
    </div>
  )

  // return (
  //   <div className="container h-100">
  //     <div className="flex flex-row ">
  //       <div className="basis-1/3 mr-2 my-2.5">
  //         <div className="text-xl/[26px] text-blue mb-[15px] mt-5">LEADERS LIST</div>
  //         <div className="h-100">
  //           <div className="flex text-white hover:cursor-pointer"
  //             onClick={()=>setOpenNav(selectLeader.article)}>
  //             <div className={"text-lg px-5 py-2 grow " + articleActiveClass}>
  //               Nvidia Shines, CELH Lags With Leaders Mixed After Fed
  //             </div>
  //             <div className={"text-4xl flex-none items-center w-[45px] pl-[4.5px] pt-[9px] " + articleUnActiveClass}>
  //               <EllipsisOutlined />
  //             </div>
  //           </div>
  //           <div className={"border border-[#ddd] text-lg shadow-md mt-[18px] p-3 flex hover:cursor-pointer bg-white "+ positionSummaryClass}
  //             onClick={()=>setOpenNav(selectLeader.positionSummary)}>
  //             <UnorderedListOutlined className="mt-1"/>
  //             <span className="pl-2">POSITIONS SUMMARY</span>
  //           </div>
  //           <WholeList 
  //             wholeGoups={wholeGoups} 
  //             isActiveWholeList={isActiveWholeList}
  //             onClickWholeList={onClickWholeList}/>
  //         </div>

  //       </div>
  //       <div className="basis-2/3"> 
  //         {<MainComponent />}
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default IndexLayout;