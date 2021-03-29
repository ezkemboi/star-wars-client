import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import Routes from '../routes';
import mocks from './mocks';
import People from '../containers/people';
import HomeWorld from '../containers/homeworld';

describe('', () => {
  afterEach(cleanup);

  it('should render people details', async () => {
    const component = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Routes  />
      </MockedProvider>
    )
    await new Promise(resolve => setTimeout(resolve, 0));
  })

  xit('should render Get People by name details', async () => {
    const component = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <People name="Ezrqn Kemboi" />
      </MockedProvider>
    )
    await new Promise(resolve => setTimeout(resolve, 0));
  })

  xit('should render homeworld/location details', async () => {
    const component = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomeWorld  homeWorldUrl="http://swapi.dev/api/planets/8/" />
      </MockedProvider>
    )
    await new Promise(resolve => setTimeout(resolve, 0));
  })
})

