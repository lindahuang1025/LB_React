import positionSummaryData from "@/server/mockData/position-summary-mock.json";

const getPositionSummary = async () => {
  return positionSummaryData;
}

export {
  getPositionSummary
}
