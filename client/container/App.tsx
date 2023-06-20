import { UnorderedListOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import WholeList from "../component/WholeList";
import Article from "../component/Article";
import PositionSummaryTable from "../component/PositionSummaryTable";
import SymbolDetail from "../component/SymbolDetail";
import wholelistsDataType from "../dataType/wholelistsDataType";
import articleDataType from "../dataType/articleDataType";
import positionSummaryDataType from "../dataType/positionSummaryDataType";
import wholeGoupListDataType from "../dataType/wholeGoupListDataType";

const selectLeader = {
    article: "Article",
    positionSummary: "Position Summary",
    wholeList: "WholsList"
}

interface dataType {
    wholelists: wholelistsDataType[], 
    article: articleDataType,
    positionSummary: positionSummaryDataType[]
};

interface CustomEvent {
    groupIdx: number,
    itemIdx: number
}

const App = (props: dataType) => {
    const { wholelists, article, positionSummary } = props;
    let [wholeGoups, setWholeGoups] = useState<wholeGoupListDataType[]>([]);
    let [openNav, setOpenNav] = useState<string>(selectLeader.wholeList);
    let [wholeItem, setWholItem] = useState<wholelistsDataType>(Object);
    let positionSummaryClass =  openNav == selectLeader.positionSummary? "rounded text-primary": "";

    useEffect(()=>{
        let groups = wholelists.map(x=>x.Header)
            .reduce((prev: string[], cur:string) => prev.includes(cur) ? prev : [...prev,cur], []);
        let wholeGoupList: wholeGoupListDataType[] = [];
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
            <div className="flex flex-row">
                <div className="basis-1/3 mr-2">
                <div className="text-xl/[26px] text-blue mb-3">LEADERS LIST</div>
                    <div className="flex text-white hover:cursor-pointer"
                        onClick={()=>setOpenNav(selectLeader.article)}>
                        <div className="bg-primary text-lg px-5 py-2">
                            Nvidia Shines, CELH Lags With Leaders Mixed After Fed
                        </div>
                        <div className="bg-drakGreen flex-initial w-11 text-center text-4xl px-2">
                            ...
                        </div>
                    </div>
                    <div className={"border border-[#ddd] text-lg shadow-md mt-4 p-3 flex hover:cursor-pointer "+ positionSummaryClass}
                        onClick={()=>setOpenNav(selectLeader.positionSummary)}>
                        <UnorderedListOutlined className="mt-1"/>
                        <span className="pl-2">POSITIONS SUMMARY</span>
                    </div>
                    <WholeList 
                        wholeGoups={wholeGoups} 
                        onClickWholeList={onClickWholeList}/>
                </div>
                <div className="basis-2/3"> 
                    <MainComponent />
                </div>
            </div>
        </div>
    );
}

export default App;