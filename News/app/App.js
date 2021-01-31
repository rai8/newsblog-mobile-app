import React from 'react';
import BreakingNews from './components/BreakingNews';

import FeaturedNews from './components/FeaturedNews';
import SearchBar from './components/SearchBar';

import Screen from './screens/Screen';

import TechNews from './components/TechNews';
import PoliticalNews from './components/PoliticalNews';
import EntertainmentNews from './components/EntertainmentNews';
import useNews from './hooks/useNews';
const App = () => {
  const [
    featuredNews,
    techNews,
    breakingNews,
    politicalNews,
    entertainmentNews,
  ] = useNews();
  return (
    <Screen>
      <SearchBar />
      <FeaturedNews item={featuredNews} />
      <BreakingNews data={breakingNews} />
      <PoliticalNews data={politicalNews} />
      <TechNews data={techNews} />
      <EntertainmentNews data={entertainmentNews} />
    </Screen>
  );
};
//const styles = StyleSheet.create({});

export default App;
