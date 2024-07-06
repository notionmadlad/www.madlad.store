import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const databaseId = process.env.DATABASE_ID;

export function queryDatabase() {
  return notion.databases.query({ database_id: databaseId });
}

export function formatDatabase(rawData) {
  return rawData.results.map(({ id, properties }) => {
    const arr = Object.keys(properties);
    const obj = {
      Id: id
    };

    arr.forEach((key) => {
      obj[key] = properties[key][properties[key].type];
    });

    return obj;
  });
}
