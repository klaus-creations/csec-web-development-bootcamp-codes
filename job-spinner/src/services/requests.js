const API_URL = "https://joblisting-rd8f.onrender.com/api/jobs";

//   ?company=&search=&page=1&limit=50

// TODO: APIS CALLS FOR OUR APP
export const getJobs = async function (page, limit, search = "", company = "") {
  const queryString = new URLSearchParams({
    limit,
    page,
    company,
    search,
  }).toString();

  const options = [
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  ];

  const res = await fetch(`${API_URL}?${queryString}`, options);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  return res.json();
};
