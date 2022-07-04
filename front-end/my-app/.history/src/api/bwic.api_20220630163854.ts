import { BwicItems } from "../Model/Bwic.model"
import { requestBody } from "./request"

export const addBwicApi = (params: BwicItems) => { return requestBody<BwicItems>("post", "http://localhost:8080/api/v1/bwic/value=/BWICAdd", null, {params:params}); }

export const getBwicApi =()=>{ return requestBody<BwicItems>("get", "http://localhost:8080/api/v1/bwic/value=/AllBWIC", null); }
