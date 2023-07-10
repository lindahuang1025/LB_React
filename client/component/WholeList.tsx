import React, { useState } from "react";
import { WholelistsGroupContract } from "@/contracts";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import { GreenArrowImage, RedArrowImage } from "@/client/config/imgConfig";
import numberFormat from "@/client/utils/numberFormat";
import Image from 'next/image'

interface dataType {
    wholeGoups: WholelistsGroupContract[],
    isActiveWholeList: boolean,
    onClickWholeList: (n: CustomEvent) => void
};

interface CustomEvent {
    groupIdx: number,
    itemIdx: number
}

const WholeList = (props: dataType) =>{
    const { wholeGoups, isActiveWholeList, onClickWholeList } = props;
    let [activeGoupItem, setActiveGoupItem] = useState<[number, number]>([0, 0]);
    let [openGroupArray, setOpenGroupArray] = useState<[number, boolean]>([0, true]);
    return (<>
    {wholeGoups.map((group, groupIdx)=>{
        let { header, items=[] } = group;
        let openGroup = false;
        if(openGroupArray[0] == groupIdx){
            openGroup = openGroupArray[1]; 
        }
        return (
            <div key={groupIdx}>
                <h3 className=" text-xl hover:cursor-pointer flex justify-between justify-items-center"
                    onClick={()=>setOpenGroupArray([groupIdx, !openGroup])}>
                    <div className="my-3.5">{header}</div> 
                    <div className="my-2.5">
                        {openGroup? <CaretDownOutlined />: <CaretUpOutlined />}
                    </div> 
                </h3>
                {openGroup && items.map((item, itemIdx)=>{
                    let isActive = (activeGoupItem[0] == groupIdx) && (activeGoupItem[1] == itemIdx);
                    let activedClass = (isActiveWholeList && isActive) ? "border-t-primary": "";
                    let { Symbol, CompanyName, Price, PriceChange, PricePercentChange, VolumePercentChange } = item;
                    let priceChgFormat = numberFormat(PriceChange),
                        pricePctChgFormat = numberFormat(PricePercentChange),
                        volumePctChgFormat = numberFormat(VolumePercentChange),
                        priceClass = priceChgFormat.isPositive ? "text-primary": "text-red",
                        volumeClass = volumePctChgFormat.isPositive ? "text-primary": "text-red";
                    return (<div key={itemIdx} 
                        className={"border border-t-8 border-[#FFFFFF] mb-4 shadow-md p-4 rounded hover:cursor-pointer bg-white " + activedClass}
                        onClick={()=>{
                            setActiveGoupItem([groupIdx, itemIdx]);
                            onClickWholeList({
                                groupIdx: groupIdx,
                                itemIdx: itemIdx
                            });
                        }}>
                        <div className="text-xl"><b>{Symbol}</b></div>
                        <div className="flex justify-between pt-[5px] font-light text-sm text-gray">
                            <div>{CompanyName}</div>
                            <div>Volume % Chg:</div>
                        </div>
                        <div className="flex justify-between pt-[10px]">
                            <div className="flex">
                                <b className="text-base laptop:text-2xl font-bold mr-[15px]">${Price}</b>
                                <span className={"text-sm font-bold leading-8 flex " + priceClass}>
                                    <Image 
                                        width={14}
                                        height={14}
                                        src={priceChgFormat.isPositive ? GreenArrowImage.src: RedArrowImage.src}
                                        alt={priceChgFormat.isPositive ? GreenArrowImage.alt: RedArrowImage.alt} />
                                    <span className="pl-2.5">${priceChgFormat.number} ({pricePctChgFormat.number}%)</span>
                                </span>
                            </div>
                            <div className={"text-base font-bold flex " + volumeClass}>
                                <Image 
                                    width={14}
                                    height={14}
                                    src={volumePctChgFormat.isPositive ? GreenArrowImage.src: RedArrowImage.src}
                                    alt={volumePctChgFormat.isPositive ? GreenArrowImage.alt: RedArrowImage.alt} />
                               <span className="leading-8 pl-2.5">{volumePctChgFormat.number}%</span> 
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        );
    })}
    </>);
}

export default WholeList;