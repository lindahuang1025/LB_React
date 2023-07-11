import React from "react"
import { Divider } from "antd";
import Link from "next/link"
import { SearchOutlined, MenuOutlined, CaretDownOutlined } from '@ant-design/icons';

const mobileOpenableMenuClassNames: string = "w-full text-xs bg-[#444444] overflow-hidden transition-all duration-300 cursor-pointer"
const desktopMenuClassNames: string = "h-12 leading-[48px] px-4 text-white text-xl font-light hover:bg-[#67C501] hover:text-[#484848] cursor-pointer flex items-center"

const Menu: React.FC<{}> = (props: {}) => {

  const [menuOpen, setMenuOpen] = React.useState<boolean>(false)
  React.useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    window.addEventListener("click", closeMenu)
    return () => window.removeEventListener("click", closeMenu)
  }, [])
  const tlClassName = React.useMemo(
    () => menuOpen ? "h-full left-0" : "h-full -left-[300px]",
    [menuOpen]
  )
  const [openSubMenuIndex, setOpenSubMenuIndex] = React.useState<number>(null)

  return (
    <div className="bg-[#3A9820]">
      <div className="desktop:w-[1339px] laptop:w-[970px] tablet:w-[760px] text-white mx-auto">
        <div className="flex desktop:hidden items-center justify-between mx-4 tablet:mx-0">
          <MenuOutlined className="text-2xl h-12 leading-[42px] cursor-pointer"
            onClick={e => { e.stopPropagation(); setMenuOpen(i => !i); }}
          />
          <div className={`fixed top-[48px] w-[300px] bg-white overflow-hidden shadow transition-all duration-300 ${tlClassName}`}>
            <ul className="text-white" onClick={e => e.stopPropagation()}>
              <li onClick={e => setOpenSubMenuIndex(i => i === 1 ? null : 1)}>
                <div className="flex justify-between p-4 bg-black">
                  <span>Leaders</span>
                  <CaretDownOutlined className="text-xs ml-1" />
                </div>
                <ul className={`${mobileOpenableMenuClassNames} ${1 === openSubMenuIndex ? "h-[200px]" : "h-0"}`}>
                  <li className="px-6 text-base py-2 cursor-not-allowed font-light text-[#888]">Leaders Near A Buy Point</li>
                  <li className="px-6 hover:bg-[#EEEEEE] text-base py-2 "><Link href="/" className="no-underline hover:no-underline text-white" >Leaders</Link></li>
                  <li className="px-6 text-base py-2 cursor-not-allowed font-light text-[#888]">Earnings Options</li>
                  <li className="px-6 text-base py-2 cursor-not-allowed font-light text-[#888]">Short Sales</li>
                  <li className="px-6 text-base py-2 cursor-not-allowed font-light text-[#888]">Leaders Watchlist</li>
                </ul>
                <Divider className="m-0" />
              </li>
              <li onClick={e => setOpenSubMenuIndex(i => i === 2 ? null : 2)}>
                <div className="flex justify-between p-4 bg-black">
                  <span>Market</span>
                  <CaretDownOutlined className="text-xs ml-1" />
                </div>
                <ul className={`${mobileOpenableMenuClassNames} ${2 === openSubMenuIndex ? "h-[160px]" : "h-0"}`}>
                  <li className="px-6 hover:bg-[#EEEEEE] text-base py-2"><Link href="/market/thebigpicture" className="no-underline hover:no-underline text-white" >The Big Picture</Link></li>
                  <li className="px-6 text-base py-2 cursor-not-allowed font-light text-[#888]">Stock Market Today</li>
                  <li className="px-6 text-base py-2 cursor-not-allowed font-light text-[#888]">ETF Market Strategy</li>
                  <li className="px-6 text-base py-2 cursor-not-allowed font-light text-[#888]">Market School</li>
                </ul>
                <Divider className="m-0" />
              </li>
              <li>
                <div className="flex justify-between p-4 bg-black">
                  <span> <Link href="/sectorleaders" className="text-white no-underline hover:no-underline" >IBD Sector Leaders</Link></span>
                </div>
                <Divider className="m-0" />
              </li>
              <li onClick={e => setOpenSubMenuIndex(i => i === 3 ? null : 3)}>
                <div className="flex justify-between p-4 bg-black">
                  <span>IBD 50</span>
                  <CaretDownOutlined className="text-xs ml-1" />
                </div>
                <ul className={`${mobileOpenableMenuClassNames} ${3 === openSubMenuIndex ? "h-[80px]" : "h-0"}`}>
                  <li className="px-6 hover:bg-[#EEEEEE] text-base py-2 text-[#333]"><Link href="/top10" className="no-underline hover:no-underline text-white block tablet:hidden text-lg" >Top 10</Link></li>
                  <li className="px-6 text-base py-2 cursor-not-allowed font-light text-[#888]">Full List</li>
                </ul>
                <Divider className="m-0" />
              </li>
              <li>
                <div className="flex justify-between p-4 bg-black">
                  <Link href="/stockspotlight" className="text-white no-underline hover:no-underline" >Stock Spotlight</Link>
                </div>
                <Divider className="m-0" />
              </li>
              <li>
                <div className="flex justify-between p-4 bg-black">
                  <Link href="/recentaction" className="text-white no-underline hover:no-underline" >Stocks Added/Removed</Link>
                </div>
                <Divider className="m-0" />
              </li>
              <li>
                <div className="flex justify-between p-4 bg-black">
                  <Link href="/mystocklists" className="text-white no-underline hover:no-underline" >My Stock Lists</Link>
                </div>
                <Divider className="m-0" />
              </li>
              <li>
                <div className="flex justify-between p-4 bg-black">
                  <Link href="/myalert" className="text-white no-underline hover:no-underline" >My Alerts</Link>
                </div>
                <Divider className="m-0" />
              </li>
              <li>
                <div className="flex justify-between p-4 bg-black">
                  <a className="text-white no-underline hover:no-underline" href="https://www.investors.com/how-to-invest/leaderboard-faq-growth-investing-strategies-position-sizing/">FAQ</a>
                </div>
                <Divider className="m-0" />
              </li>
            </ul>
          </div>
          <h3 className="block tablet:hidden text-lg">LEADERS</h3>
          <SearchOutlined className="text-2xl h-12 leading-[42px] cursor-pointer block tablet:hidden"
            onClick={e => null}
          />
        </div>
        <ul className="font-lato hidden desktop:flex">
          <li className={`${desktopMenuClassNames} relative group`}>
            <span>Leaders</span>
            <CaretDownOutlined className="text-xs ml-1" />
            <ul className="hidden absolute w-[280px] group-hover:block z-10 top-[48px] bg-white border border-[#DDDDDD] rounded left-0 py-2 shadow-xl">
              <li className="px-3 hover:bg-[#EEEEEE] text-xl py-1 cursor-not-allowed font-light text-[#888]">Leaders Near A Buy Point</li>
              <li className="px-3 hover:bg-[#EEEEEE] text-xl py-1 text-[#333]"><Link href="/" className="no-underline hover:no-underline" >Leaders</Link></li>
              <li className="px-3 hover:bg-[#EEEEEE] text-xl py-1 cursor-not-allowed font-light text-[#888]">Earnings Options</li>
              <li className="px-3 hover:bg-[#EEEEEE] text-xl py-1 cursor-not-allowed font-light text-[#888]">Short Sales</li>
              <li className="px-3 hover:bg-[#EEEEEE] text-xl py-1 cursor-not-allowed font-light text-[#888]">Leaders Watchlist</li>
            </ul>
          </li>
          <li className={`${desktopMenuClassNames} relative group`}>
            <span>Market</span>
            <CaretDownOutlined className="text-xs ml-1" />
            <ul className="hidden absolute w-[280px] group-hover:block z-10 top-[48px] bg-white border border-[#DDDDDD] rounded left-0 py-2 shadow-xl">
              <li className="px-3 hover:bg-[#EEEEEE] text-xl py-1"><Link href="/market/thebigpicture" className="no-underline hover:no-underline" >The Big Picture</Link></li>
              <li className="px-3 hover:bg-[#EEEEEE] text-xl py-1 cursor-not-allowed font-light text-[#888]">Stock Market Today</li>
              <li className="px-3 hover:bg-[#EEEEEE] text-xl py-1 cursor-not-allowed font-light text-[#888]">ETF Market Strategy</li>
              <li className="px-3 hover:bg-[#EEEEEE] text-xl py-1 cursor-not-allowed font-light text-[#888]">Market School</li>
            </ul>
          </li>
          <li className={desktopMenuClassNames}>
            <span> <Link href="/sectorleaders" className="text-white no-underline hover:no-underline" >IBD Sector Leaders</Link></span>
          </li>
          <li className={`${desktopMenuClassNames} relative group`}>
            <span>IBD 50</span>
            <CaretDownOutlined className="text-xs ml-1" />
            <ul className="hidden absolute w-[280px] group-hover:block z-10 top-[48px] bg-white border border-[#DDDDDD] rounded left-0 py-2 shadow-xl">
              <li className="px-3 hover:bg-[#EEEEEE] text-xl py-1 text-[#333]"><Link href="/top10" className="no-underline hover:no-underline" >Top 10</Link></li>
              <li className="px-3 hover:bg-[#EEEEEE] text-xl py-1 cursor-not-allowed font-light text-[#888]">Full List</li>
            </ul>
          </li>
          <li className={desktopMenuClassNames}>
            <Link href="/stockspotlight" className="text-white no-underline hover:no-underline" >Stock Spotlight</Link>
          </li>
          <li className={desktopMenuClassNames}>
            <Link href="/recentaction" className="text-white no-underline hover:no-underline" >Stocks Added/Removed</Link>
          </li>
          <li className={desktopMenuClassNames}>
            <Link href="/mystocklists" className="text-white no-underline hover:no-underline" >My Stock Lists</Link>
          </li>
          <li className={desktopMenuClassNames}>
            <Link href="/myalert" className="text-white no-underline hover:no-underline" >My Alerts</Link>
          </li>
          <li className={desktopMenuClassNames}>
            <span><a className="text-white no-underline hover:no-underline" href="https://www.investors.com/how-to-invest/leaderboard-faq-growth-investing-strategies-position-sizing/">FAQ</a></span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu