import { SEPTA_API_BASE_URL } from "../constants/api-constants";

export function getURL(endpoint: string, params: URLSearchParams) {
    return `${SEPTA_API_BASE_URL}${endpoint}${params.size > 0 ? '?' : ''}${params}`
}