import { useQuery } from "@apollo/client";
import {
  Avatar,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import gql from "graphql-tag";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { Restaurant } from "../../types/restaurant";
import { makeUrl } from "../../utils/make-url";

const Restaurant = () => {
  const router = useRouter();
  const { data, loading, error } = useRestaurant(router.query.id as string);

  if (loading) {
    return (
      <Container>
        <CircularProgress color="secondary" />
        Carregando...
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography>{error.message}</Typography>
      </Container>
    );
  }

  const restaurant = data!;

  return (
    <Container>
      <Grid container spacing={2} alignItems="center" marginY={4}>
        <Grid item xs={1}>
          <Avatar
            variant="square"
            alt={restaurant.name}
            src={makeUrl(restaurant.image.url)}
            sx={{ width: 180, height: 180 }}
          />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h1" component="div">
            {restaurant.name}
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Typography paddingY="10px">
        Published at: {new Date(restaurant.published_at).toLocaleDateString()}
      </Typography>
      <Divider />
      <Typography variant="body1" paddingTop="10px">
        {restaurant.description}
      </Typography>
    </Container>
  );
};

const useRestaurant = (id: string) => {
  const { data, ...rest } = useQuery<Result, Variables>(QUERY, {
    variables: { id },
  });

  return {
    ...rest,
    data: data?.restaurant,
  };
};

const QUERY = gql`
  query Restaurant($id: ID!) {
    restaurant(id: $id) {
      id
      name
      description
      published_at
      image {
        name
        url
      }
      comments {
        id
        description
      }
    }
  }
`;

type Result = {
  restaurant: Restaurant;
};

type Variables = {
  id: string;
};

export default Restaurant;
