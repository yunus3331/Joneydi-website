export async function refreshAccessToken() {
    const refreshToken = localStorage.getItem("refresh_token");

    if (!refreshToken) {
        return null;
    }

    const response = await fetch(
        "http://127.0.0.1:8000/api/token/refresh/",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                refresh: refreshToken,
            }),
        }
    );

    const data = await response.json();

    if (!response.ok) {
        return null;
    }

    localStorage.setItem("access_token", data.access);

    return data.access;
}