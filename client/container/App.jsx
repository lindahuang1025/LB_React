import { UnorderedListOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import WholeList from "../component/WholeList";
import Article from "../component/Article";

const App = ({wholelists, article, positionSummary}) => {
    let [wholeGoups, setWholeGoups] = useState([]);
    useEffect(()=>{

    }, [wholelists]);
    return (
        <div className="container h-100">
            <div className="flex flex-row">
                <div className="basis-1/3 mr-2">
                <div className="text-xl/[26px] text-blue mb-3">LEADERS LIST</div>
                    <div className="flex text-white">
                        <div className="bg-primary text-lg px-5 py-2">
                            Nvidia Shines, CELH Lags With Leaders Mixed After Fed
                        </div>
                        <div className="bg-drakGreen flex-initial w-11 text-center text-4xl px-2">
                            ...
                        </div>
                    </div>
                    <div className="border border-[#ddd] text-lg shadow-md mt-4 p-3 flex">
                        <UnorderedListOutlined className="mt-1"/>
                        <span className="pl-2">POSITIONS SUMMARY</span>
                    </div>
                    <WholeList />
                </div>
                <div className="basis-2/3"> 
                    <Article article={article} />
                </div>
            </div>
        </div>
    );
}

export default App;