import React from "react";
import { Button, Input } from "antd";
import { getStockList } from "@/server/repositories/market-responsitory";

const MyAlert = () => {
  return <>
    <div className="container">
      <div className="mt-2">
        <Button className="ml-4 text-base">Create</Button>
        <Button className="ml-4 text-base">Active</Button>
        <Button className="ml-4 text-base">Triggred</Button>
      </div>
      <div className="mt-2">
        <Button className="ml-4 text-base">Symbol</Button>
        <Button className="ml-4 text-base">Lists</Button>
      </div>

      <div className="border bg-white p-5 border-[#ddd] border-t-8 border-t-primary m-4">
        <div className="flex flex-col tablet:flex-row min-w-full ">
          <div className="w-full tablet:w-1/2 tablet:ml-auto">
            <div className="text-[14px] text-white text-center px-5 py-2 h-[30px] grow bg-[#31a700]">
              Symbol
            </div>
            <div className="text-[#222222] text-[14px] bg-white h-[20px]  text-center px-5 py-2 grow bg-[#31a700] border-[1px] border-[#67c500] py-[40px] px-[25px]">
              No data
            </div>
          </div>
          <div className="w-full tablet:w-1/2 tablet:mr-auto tablet:ml-[45px]">
            <div className="text-[14px] text-white text-center px-5 py-2 h-[30px] grow bg-[#31a700]">
              Price
            </div>
            <div className="text-[#222222] text-[14px] bg-white h-[20px]  text-center px-5 py-2 grow bg-[#31a700] border-[1px] border-[#67c500] py-[40px] px-[25px]">
              No data
            </div>
          </div>
        </div>
        <p className="mb-1">Moving Averages:</p>
        <div className="flex flex-col tablet:flex-row min-w-full ">
          <div className="w-full tablet:w-1/2 tablet:ml-auto">
            <div className="text-[14px] text-white text-center px-5 py-2 h-[30px] grow bg-[#31a700]">
              Daily Chart
            </div>
            <div className="text-[#222222] text-[14px] bg-white h-[155px]  text-left  grow bg-[#31a700] border-[1px] border-[#67c500]">
              <div className="border bg-white p-2 border-[#ddd] border-b-1 border-t-primary">10-day</div>
              <div className="border bg-white p-2 border-[#ddd] border-b-1 border-t-primary">21-day EMA</div>
              <div className="border bg-white p-2 border-[#ddd] border-b-1 border-t-primary">50-day</div>
              <div className="border bg-white p-2 border-[#ddd] border-b-1 border-t-primary">200-day</div>
            </div>
          </div>
          <div className="w-full tablet:w-1/2 tablet:mr-auto tablet:ml-[45px]">
            <div className="text-[14px] text-white text-center px-5 py-2 h-[30px] grow bg-[#31a700]">
              Weekly Chart
            </div>
            <div className="text-[#222222] text-[14px] bg-white h-[78px]  text-left  grow bg-[#31a700] border-[1px] border-[#67c500]">
              <div className="border bg-white p-2 border-[#ddd] border-b-1 border-t-primary">10-Week</div>
              <div className="border bg-white p-2 border-[#ddd] border-b-1 border-t-primary">40-Week</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col tablet:flex-row min-w-full ">
          <div className="w-full tablet:w-1/2 tablet:ml-auto">
            <p className="mb-1">Email Notification Settings:</p>
            <Input placeholder="wangqx@shinetechsoftware.com" />
            <p>Desktop Notification Settings:</p>
            <Input placeholder="Audio" />
          </div>
          <div className="w-full tablet:w-1/2 tablet:mr-auto tablet:ml-[45px]">
            <p>Note:</p>
            <Input.TextArea
              placeholder="input note"
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
            <div className="text-right text-[12px] text-[#222222]">100 Characters maximum</div>
          </div>
        </div>
        <div className="flex flex-col tablet:flex-row min-w-full ">
          <div className="w-full tablet:w-1/2 tablet:ml-auto"></div>
          <div className="w-full tablet:w-1/2 tablet:mr-auto tablet:ml-[45px]">
            <Button className="ml-4 text-base w-full">Save</Button>
          </div>
        </div>
      </div>
    </div>
  </>
}



export default MyAlert;