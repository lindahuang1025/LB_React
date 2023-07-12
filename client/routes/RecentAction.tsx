import React from "react";

const RecentAction: React.FC<{}> = () => {
  return (
    <div className="container">
      <div className="desktop:w-[1339px] laptop:w-[970px] tablet:w-[760px] mx-auto my-2 hidden tablet:block">
        <h3 className="text-2xl py-4">Stocks Added / Removed In The Last 5 Days</h3>
        <div className="flex  flex-row text-left bg-drakGreen text-white p-4 text-[20px]">
          <div className="w-full ml-auto">Date/Time (E.T.)</div>
          <div className="w-full ml-auto">Symbol</div>
          <div className="w-full ml-auto">CompanyName</div>
          <div className="w-full ml-auto">Action</div>
        </div>
      
      </div>
      <p className="text-center h-[50px] text-[20px] mt-5 tablet-mt-0">No stocks have been added or removed in the last five days.</p>
    </div>
  )
}

export default RecentAction;