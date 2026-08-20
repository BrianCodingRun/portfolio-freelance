export const getIpAddress = async () => {
  try {
    const request = await fetch("https://api.ipify.org?format=json");
    const data = await request.json();
    return data.ip;
  } catch (error) {
    console.error("Error fetching IP address:", error);
  }
};
