import wholelistsData from "../mockData/wholelists-mock"

const getWholelists = async () => {
    return await wholelistsData.Items;
}

export {
    getWholelists
}
