import React from "react"
import Image from 'next/image'

import nasdaq from "@/public/img/nasdaq.png"

const Footer: React.FC<{}> = () => {
  return <div className="w-[1339px] mx-auto mt-7">
    <div className="text-[10px] text-[#777777]">
      <div className="flex items-center">
        <Image
          height={18}
          src={nasdaq}
          alt="nasdaq"
        />
        <span className="ml-2">Provided by Nasdaq Last Sale</span>
      </div>
      <div className="py-3">06/19/2023 (Market Close)</div>
      Notice: Information contained herein is not and should not be construed as an offer, solicitation, or recommendation to buy or sell securities. The information has been obtained from sources we believe to be reliable; however no guarantee is made or implied with respect to its accuracy, timeliness, or completeness. The information and content are subject to change without notice. You may use IBD Leaderboard solely for personal, non-commercial use. Removal or alteration of any trademark, copyright or other notices will result in legal action taken to protect our rights. You may not distribute IBD Leaderboard to others, whether or not for payment or other consideration, and you may not modify, copy, frame, reproduce, sell, publish, transmit, display or otherwise use or revise any portion of IBD Leaderboard. For information regarding use of IBD Leaderboard for any purpose, please see our 
      <a href="http://myibd.investors.com/terms/#terms">Terms and Conditions of Use</a>. © 2000-2021 Investor's Business Daily, LLC. All rights reserved. Investor's Business Daily, IBD, Leaderboard, CAN SLIM and corresponding logos are registered trademarks of Investor's Business Daily, LLC. 
      <a href="http://myibd.investors.com/terms/#trademark">Copyright and Trademark Notice</a> | 
      <a href="http://myibd.investors.com/terms/#privacy">Privacy Statement</a> © 2000 - 2021 Investor's Business Daily, LLC. All rights reserved. Investor's Business Daily, IBD,, CAN SLIM and corresponding logos are registered trademarks of Investor's Business Daily, LLC. Copyright and Trademark Notice | Privacy Statement | 
      <a href="https://compliance.investors.com/#/optout">Do Not Sell My Personal Information</a> © 2021 William O'Neil + Co. Incorporated. All Rights Reserved. The William O'Neil + Co.Database and all data contained herein are provided by William O'Neil + Co. Incorporated and are used by IBD under license agreement. © 2021 MarketSmith, Incorporated.Charts provided by MarketSmith are used by IBD under license agreement.MarketSmith is a registered trademark of MarketSmith, Incorporated. Ownership data provided by Refinitiv and Estimates data provided by FactSet.
    </div>
  </div>                                     
}

export default Footer;