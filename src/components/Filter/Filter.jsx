import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

import { getFilter } from 'redux/filter/filterSelectors';
import { filterContacts } from 'redux/filter/filterSlice';

import { StyledLabel, StyledField } from './Filter.styled';

export const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Formik initialValues={{ filter: '' }} onSubmit={() => {}}>
      <Form autoComplete="off">
        <StyledLabel>
          Find contacts by name
          <StyledField
            name="filter"
            type="text"
            value={filterValue}
            onChange={evt => dispatch(filterContacts(evt.currentTarget.value.trimStart()))}
          />
        </StyledLabel>
      </Form>
    </Formik>
  );
};
