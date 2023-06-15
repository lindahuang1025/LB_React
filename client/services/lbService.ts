import request from "./axios";

function getArticle() {
  return request({
    url: "/api/leaderboard/article",
    method: "GET"
  });
}

function getPositionSummary() {
    return request({
      url: "/api/leaderboard/PositionSummary",
      method: "GET"
    });
}

function getRelatedNews() {
    return request({
      url: "/api/leaderboard/relatednews",
      method: "GET"
    });
}

function getWholelists() {
    return request({
      url: "/api/leaderboard/wholelists",
      method: "GET"
    });
}

export {
    getArticle,
    getPositionSummary,
    getRelatedNews,
    getWholelists
}