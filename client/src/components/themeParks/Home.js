import React, {useContext} from 'react';
import { ThemeParkContext } from '../../context/themeParkContext';
import { UserContext } from '../../context/userContext';
import ThemeParkCard from './ThemeParkCard'

function Home() {
  const { themeParks, handleDeleteThemePark } = useContext(ThemeParkContext);
  const { user } = useContext(UserContext)

  const displayThemeParks = themeParks.map(themePark => {
    return (
      // <h1 key={themePark.id}>{themePark.name}</h1>
      <ThemeParkCard key={themePark.id} user={user} themePark={themePark} onDeleteThemePark={handleDeleteThemePark}/>
    )
  })

  return (
    <div>
      {displayThemeParks}
    </div>
  );
}

export default Home;
