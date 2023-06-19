import { useState } from "react";

const WholeList = ({wholeGoups, onClickWholeList}) =>{
    let [activeGoupItem, setActiveGoupItem] = useState([0, 0]);
    return (<>
    {wholeGoups.map((group, groupIdx)=>{
        let { header, items=[] } = group;
        return (
            <div key={groupIdx}>
                <h3 className="my-3.5 text-xl">{header}</h3>
                {items.map((item, itemIdx)=>{
                    let isActive = (activeGoupItem[0] == groupIdx) && (activeGoupItem[1] == itemIdx);
                    let activedClass = isActive ? "border-t-8 border-t-primary": "";
                    let { Symbol, CompanyName, Price, PriceChange, PricePercentChange, VolumePercentChange } = item;
                    return (<div key={itemIdx} 
                        className={"border border-[#ddd] mb-4 shadow-md px-5 pb-4 pt-[18px] rounded hover:cursor-pointer " + activedClass}
                        onClick={()=>{
                            setActiveGoupItem([groupIdx, itemIdx]);
                            onClickWholeList(groupIdx, itemIdx);
                        }}>
                        <div className="text-xl"><b>{Symbol}</b></div>
                        <div className="flex justify-between pt-[5px] font-light text-sm text-gray">
                            <div>{CompanyName}</div>
                            <div>Volume % Chg:</div>
                        </div>
                        <div className="flex justify-between pt-[10px]">
                            <div>
                                <b className="text-2xl font-bold mr-[15px]">${Price}</b>
                                <span className="text-sm font-bold">${PriceChange}</span>
                                <span className="text-sm font-bold">({PricePercentChange}%)</span>
                            </div>
                            <div className="text-base font-bold">{VolumePercentChange}%</div>
                        </div>
                    </div>)
                })}
            </div>
        );
    })}
    </>);
}

export default WholeList;