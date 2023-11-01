import request from "graphql-request";
import { CREATE_FEED_ITEM, UPDATE_FEED_ITEMS } from "../graphql/queries.js";

export async function createFeedItem(
  userId: string,
  feedItem: { subject: string; summary?: string; body?: string }
) {
  const endpoint = process.env.PUBLIC_GRAPHQL_ENDPOINT;
  if (!endpoint) {
    throw new Error("PUBLIC_GRAPHQL_ENDPOINT must be defined");
  }
  return await request(endpoint, CREATE_FEED_ITEM, {
    data: {
      user: {
        connect: { id: userId },
      },
      ...feedItem,
    },
  });
}

export async function dismissFeedItems(userId: string) {
  const endpoint = process.env.PUBLIC_GRAPHQL_ENDPOINT;
  if (!endpoint) {
    throw new Error("PUBLIC_GRAPHQL_ENDPOINT must be defined");
  }
  return await request(endpoint, UPDATE_FEED_ITEMS, {
    data: {
      dismissed_at: new Date().toISOString(),
    },
    where: {
      user_id: { equals: userId },
    },
  });
}
