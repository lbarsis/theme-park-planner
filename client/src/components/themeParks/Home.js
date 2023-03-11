function Home({themeParks}) {

  const displayThemeParks = themeParks.map(themePark => <h1 key={themePark.id}>{themePark.name}</h1>)

  return (
    <div>
      {displayThemeParks}
    </div>
  );
}

export default Home;
