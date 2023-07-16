import MainPages from '../../pages/main/main';

type AppOffersProps = {
  offersCount: number;
}

function App({offersCount}: AppOffersProps): JSX.Element {
  return (
    <MainPages offersCount={offersCount} />
  );
}

export default App;
