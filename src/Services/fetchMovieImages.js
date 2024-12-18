const API_KEY = "9a7930d5bbcd09c40eabfd60a7adf5fd"; // کلید API خود را اینجا وارد کنید
const API_READ_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTc5MzBkNWJiY2QwOWM0MGVhYmZkNjBhN2FkZjVmZCIsIm5iZiI6MTczMDEyNTIxMi42OCwic3ViIjoiNjcxZjlkOWMxZWEzMzkyODI5N2RjMDBjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.5PG6Lq6FV3N5eHW30zwzCXzxnIxYhbtIpXjpwEqzgx0"; // توکن دسترسی خواندن API خود را اینجا وارد کنید

export async function fetchMovieImages(movieTitle) {
  try {
    console.log("Fetching movie images for:", movieTitle);

    // جستجوی فیلم با نام وارد شده
    const searchResponse = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieTitle}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
        },
      },
    );
    const searchData = await searchResponse.json();
    console.log("Search results:", searchData); // بررسی نتایج جستجو

    const movieId = searchData.results[0]?.id;

    if (!movieId) {
      throw new Error("Movie not found");
    }

    // درخواست برای دریافت تصاویر فیلم
    const imagesResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${API_KEY}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
        },
      },
    );
    const imagesData = await imagesResponse.json();
    console.log("Images Data:", imagesData); // بررسی داده‌های تصاویر
    return imagesData.posters;
  } catch (error) {
    console.error("Error fetching movie images:", error);
    return [];
  }
}
