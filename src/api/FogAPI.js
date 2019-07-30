const FogAPIurl = 'http://127.0.0.1:8000/api/'

const fetchAllTheData = async () => {
  const response = await fetch(`${FogAPIurl}players/`);
  const data = await response.json();
  return data;
}