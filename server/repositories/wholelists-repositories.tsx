import wholelistsData from "@/server/mockData/wholelists-mock.json";

const getWholelists = async () => {
    return wholelistsData.Items
}

export {
    getWholelists
}
