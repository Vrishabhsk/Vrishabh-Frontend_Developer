// Capsules API Endpoint
const ENDPOINT = process.env.REACT_APP_CAPSULE_ENDPOINT;
const API_KEY = process.env.REACT_APP_CAPSULE_API_KEY;

// Capsules API Request
export const fetchCapsules = async (filters) => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  Object.keys(filters).map((key) => {
    if (filters[key] && key !== "launch") {
      return params.append(key, filters[key]);
    }
    return null;
  });

  const launch = filters?.launch ? new Date(filters?.launch).toISOString() : null;

  const URL = ENDPOINT + "?" + params?.toString() + (launch ? `&launch=${launch}` : "");

  const response = await fetch(URL);
  if (response?.ok) {
    return response.json();
  }
};
