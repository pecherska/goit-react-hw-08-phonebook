import { useDispatch, useSelector } from 'react-redux';
import { FilterContainer, FilterInput } from './Filter.styled';

import { selectFilter } from 'components/redux/contacts/selectors';
import { setFilter } from 'components/redux/contacts/filterSlice';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(setFilter(e.target.value.trim()));
  };
  return (
    <FilterContainer>
      <label>Find contacts by name</label>
      <FilterInput type="text" value={filter} onChange={onChange}></FilterInput>
    </FilterContainer>
  );
};

export default Filter;
