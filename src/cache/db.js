import Dexie from "dexie";

export const tokenRepo = new Dexie("trello");
tokenRepo.version(1).stores({
  appToken: "++id, token", // Primary key and indexed props
});
