import ThemeParkCard from './ThemeParkCard'

function Home({themeParks}) {

  const displayThemeParks = themeParks.map(themePark => {
    return (
      // <h1 key={themePark.id}>{themePark.name}</h1>
      <ThemeParkCard key={themePark.id} themePark={themePark}/>
    )
  })

  return (
    <div>
      {displayThemeParks}
    </div>
  );
}

export default Home;
