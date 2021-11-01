import {
  Avatar,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import gql from "graphql-tag";
import type { NextPage } from "next";
import { FC } from "react";
import { apolloClient } from "../config/apollo-client";
import { makeUrl } from "../utils/make-url";
import { useRouter } from "next/dist/client/router";
import { Restaurant } from "../types/restaurant";

type QueryResult = {
  restaurants: Restaurant[];
};

const RenderRestaurantList: FC<QueryResult> = (props) => {
  return (
    <List>
      {props.restaurants.map((r) => (
        <RenderRestaurantItemList key={r.id} restaurant={r} />
      ))}
    </List>
  );
};

const RenderRestaurantItemList: FC<{
  restaurant: Restaurant;
}> = ({ restaurant }) => {
  const router = useRouter();
  const categories = restaurant.categories.map((c) => c.name).join(", ");

  return (
    <ListItem
      divider
      button
      onClick={() => router.push(`/restaurant/${restaurant.id}`)}
    >
      <ListItemAvatar>
        <Avatar
          alt={restaurant.image.name}
          src={makeUrl(restaurant.image.url)}
        />
      </ListItemAvatar>
      <ListItemText primary={restaurant.name} secondary={categories} />
    </ListItem>
  );
};

const Home: NextPage<QueryResult> = ({ restaurants }) => {
  return (
    <Container>
      <Typography variant="h1">Restaurants</Typography>
      <Divider />
      <RenderRestaurantList restaurants={restaurants} />
    </Container>
  );
};

Home.getInitialProps = async () => {
  const { data } = await apolloClient.query<QueryResult>({
    query: gql`
      query Restaurants {
        restaurants {
          id
          name
          published_at
          image {
            name
            url
          }
          categories {
            id
            name
          }
        }
      }
    `,
  });

  return {
    restaurants: data.restaurants,
  };
};

export default Home;
