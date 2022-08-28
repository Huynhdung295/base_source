import { fetchJSON } from "./fetch";

/**
 * Description
 * @limit: number - 1
 * @skip: number - 1
 * @location: string - "Bình Phước"
 */
const getListLocation = (params) => fetchJSON("locations", params);

export { getListLocation };
