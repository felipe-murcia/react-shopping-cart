export const queryProduct = '%7B%20products(first%3A%2023)%20%7B%20edges%20%7B%20node%20%7B%20id%20title%20description%20featuredImage%20%7B%20id%20url%20%7D%20variants(first%3A%203)%20%7B%20edges%20%7B%20node%20%7B%20price%20%7B%20amount%20currencyCode%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%7D'
export const queryCollections = '%7B%20collections(first%3A%2010)%20%7B%20edges%20%7B%20cursor%20node%20%7B%20id%20handle%20title%20description%20image%20%7B%20id%20url%20%7D%20%7D%20%7D%20%7D%7D'
export const queryProductsByCollection = '%7B%20collection(id%3A%20"gid%3A%2F%2Fshopify%2FCollection%2F----%22)%20%7B%20products(first%3A%2020)%20%7B%20edges%20%7B%20node%20%7B%20id%20title%09%09%20description%20featuredImage%20%7B%20id%20url%20%7D%09%09%20variants(first%3A%201)%20%7B%09%09%09%20edges%20%7B%09%09%09%09node%20%7B%09%09%09%09%20price%20%7B%09%09%09%09%09amount%09%09%09%09%09currencyCode%09%09%09%09%20%7D%09%09%09%09%7D%09%09%09%20%7D%09%09%09%7D%20%7D%20%7D%20%7D%20%7D%7D'