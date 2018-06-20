import { del, get, post, put } from "../utils/request";

export async function create(param) {
  return post("/api/list", { param });
}

export async function query(param) {
  return get("/api/list", { param });
}

export async function update(param) {
  return put("/api/list", { param });
}

export async function remove(param) {
  return del("/api/list", { param });
}
