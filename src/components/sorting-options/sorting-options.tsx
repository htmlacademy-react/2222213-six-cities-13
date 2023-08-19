import React, {useState} from 'react';
import { SortDescription } from '../../const';
import { TSorting } from '../../types/sorting';

type TSortingProps = {
  activeSorting: TSorting;
  handleSorting: (sort: TSorting) => void;
}

function Sorting({ activeSorting, handleSorting }: TSortingProps): React.JSX.Element {
  const [isOpened, setIsOpened] = useState(false);

  const handleSortClick = (type: TSorting) => {
    handleSorting(type);
    setIsOpened(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpened(!isOpened)}
      >
        {activeSorting}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom
        ${isOpened ? 'places__options--opened' : ''}`}
      >
        {(Object.entries(SortDescription) as [
          TSorting,
          (typeof SortDescription)[TSorting]
        ][]).map(([type, value]) => (
          <li key={type}
            onClick={() => {
              handleSortClick(type);
            }}
            className={`places__option ${activeSorting === type ? 'places__option--active' : ''}`}
            tabIndex={0}
          >{value}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
