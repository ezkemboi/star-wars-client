import { gql } from '@apollo/client';

export const GET_PEOPLE = gql`
  query PeopleQuery($page: Int!) {
    getPeople(page: $page) {
      name
      gender
      mass
      homeworld
    }
  }
`

export const GET_PEOPLE_BYNAME = gql`
  query People($name: String!) {
    getPeopleByName(name: $name) {
      name
      gender
      mass
      homeworld
    }
  }
`

export const GET_HOMEWORLD_DETAILS = gql`
  query HomeWorld($homeWorldUrl: String!) {
    getUserHomeWorld(homeWorldUrl: $homeWorldUrl) {
      name
      rotation_period
      orbital_period
      diameter
      climate
      gravity
      terrain
      surface_water
      population
      residents
      films
    }
  }
`
