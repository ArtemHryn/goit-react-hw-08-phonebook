import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './ContactsFilter.styled';
import { changeFilter } from 'redux/filterSlice';


export const ContactsFilter = () => {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const onFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Label>
      Find contact by the name
      <Input type="text" value={filter} onChange={onFilter} />
    </Label>
  );
};

