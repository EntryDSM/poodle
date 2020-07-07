import client from "./client";

export const login = (data: { email: string; password: string }) =>
  client.post("/auth", data);
