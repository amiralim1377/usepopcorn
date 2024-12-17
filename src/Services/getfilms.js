const KEY = 55232223;

export async function getfilms(film) {
  // console.log(film);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&S=${film}`);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();

  return data;
}
