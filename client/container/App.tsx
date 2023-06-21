import { UnorderedListOutlined, EllipsisOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import WholeList from "@/client/component/WholeList";
import Article from "@/client/component/Article";
import PositionSummaryTable from "@/client/component/PositionSummaryTable";
import SymbolDetail from "@/client/component/SymbolDetail";
import { WholelistsContract, ArticleContract, PositionSummaryContract, WholelistsGroupContract } from "@/contracts";

const selectLeader = {
    article: "Article",
    positionSummary: "Position Summary",
    wholeList: "WholsList"
}

interface dataType {
    wholelists: WholelistsContract[], 
    article: ArticleContract,
    positionSummary: PositionSummaryContract[]
};

interface CustomEvent {
    groupIdx: number,
    itemIdx: number
}

const App = (props: dataType) => {
    const { wholelists, article, positionSummary } = props;
    let [wholeGoups, setWholeGoups] = useState<WholelistsGroupContract[]>([]);
    let [openNav, setOpenNav] = useState<string>(selectLeader.wholeList);
    let [wholeItem, setWholItem] = useState<WholelistsContract>(Object);
    let positionSummaryClass =  openNav == selectLeader.positionSummary? "rounded text-primary border-t-8 border-t-primary": "",
        articleActiveClass = openNav == selectLeader.article? "bg-primary": "bg-drakGreen",
        articleUnActiveClass = openNav == selectLeader.article? "bg-drakGreen": "bg-primary",
        isActiveWholeList = openNav == selectLeader.wholeList;

    useEffect(()=>{
        let groups = wholelists.map(x=>x.Header)
            .reduce((prev: string[], cur:string) => prev.includes(cur) ? prev : [...prev,cur], []);
        let wholeGoupList: WholelistsGroupContract[] = [];
        groups.forEach((header: string) =>{
            let groupItems = (wholelists || []).filter(x=>x.Header == header);
            wholeGoupList.push({
                header: header,
                items: groupItems
            });
        });
        setWholeGoups(wholeGoupList);
        if(wholeGoupList[0] && wholeGoupList[0].items){
            setWholItem(wholeGoupList[0].items[0]);
        }
    }, [wholelists]);

    const MainComponent = () => {
        switch(openNav){
            case selectLeader.article: 
                return <Article article={article} />;
            case selectLeader.positionSummary: 
                return <PositionSummaryTable positionSummary={positionSummary}/>;
            case selectLeader.wholeList: 
                return <SymbolDetail wholeItem={wholeItem}/>;
            default:
                return <SymbolDetail wholeItem={wholeItem}/>;
        }
    }

    const onClickWholeList = (props: CustomEvent)=>{
        const { groupIdx, itemIdx } = props;
        setOpenNav(selectLeader.wholeList);
        let wholeItem = wholeGoups[groupIdx].items[itemIdx];
        setWholItem(wholeItem);
    }
    return (
        <div className="container h-100">
            <div className="flex flex-row ">
                <div className="basis-1/3 mr-2 my-2.5">
                    <div className="text-xl/[26px] text-blue mb-[15px] mt-5">LEADERS LIST</div>
                    <div className="h-100">
                        <div className="flex text-white hover:cursor-pointer"
                            onClick={()=>setOpenNav(selectLeader.article)}>
                            <div className={"text-lg px-5 py-2 grow " + articleActiveClass}>
                                Nvidia Shines, CELH Lags With Leaders Mixed After Fed
                            </div>
                            <div className={"text-4xl flex-none items-center w-[45px] pl-[4.5px] pt-[9px] " + articleUnActiveClass}>
                                <EllipsisOutlined />
                            </div>
                        </div>
                        <div className={"border border-[#ddd] text-lg shadow-md mt-[18px] p-3 flex hover:cursor-pointer bg-white "+ positionSummaryClass}
                            onClick={()=>setOpenNav(selectLeader.positionSummary)}>
                            <UnorderedListOutlined className="mt-1"/>
                            <span className="pl-2">POSITIONS SUMMARY</span>
                        </div>
                        <WholeList 
                            wholeGoups={wholeGoups} 
                            isActiveWholeList={isActiveWholeList}
                            onClickWholeList={onClickWholeList}/>
                    </div>
                    
                </div>
                <div className="basis-2/3"> 
                    <MainComponent />
                </div>
            </div>
        </div>
    );
}

export default App;