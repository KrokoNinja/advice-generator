const API_ROUTE = "https://api.adviceslip.com/advice";

export async function getData() {
    return await fetch(API_ROUTE).then((res) => res.json());
}