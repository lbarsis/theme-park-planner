import ThemeParkCard from './ThemeParkCard'

function Home({themeParks, onDeleteThemePark, user}) {

  const displayThemeParks = themeParks.map(themePark => {
    return (
      // <h1 key={themePark.id}>{themePark.name}</h1>
      <ThemeParkCard key={themePark.id} user={user} themePark={themePark} onDeleteThemePark={onDeleteThemePark}/>
    )
  })

  return (
    <div>
      {displayThemeParks}
    </div>
  );
}

export default Home;
