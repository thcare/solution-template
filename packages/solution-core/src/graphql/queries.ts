import { graphql } from "../generated/graphql/index.js";
// Place in this file, any queries or mutations your solution will use to
// interact with the generated api.
// @link https://the-guild.dev/graphql/codegen/docs/getting-started

export const CREATE_FEED_ITEM = graphql(`
  mutation CreateOneFeedItem($data: FeedItemCreateInput!) {
    createOneFeedItem(data: $data) {
      id
    }
  }
`);

export const UPDATE_FEED_ITEMS = graphql(`
  mutation UpdateManyFeedItem(
    $data: FeedItemUpdateManyMutationInput!
    $where: FeedItemWhereInput
  ) {
    updateManyFeedItem(data: $data, where: $where) {
      count
    }
  }
`);
