import { last, without } from 'lodash';

import { checkboxMap, getAllIds } from './checkboxMap';

const processCheckboxChange = (ids, prevTransfers, onChangeAction) => {
  const { current: prevFilters } = prevTransfers;

  const isAllExist = ids.includes('all');
  const isCurrClick = (id) => last(ids) === id;
  const isPrevAllExist = prevFilters.includes('all');

  // prettier-ignore
  const isManualAllSelected = checkboxMap.length - 1 === ids.length && !isAllExist;
  const isManualAllRuined = checkboxMap.length - 1 === ids.length && isAllExist;

  if (isCurrClick('all')) {
    onChangeAction(getAllIds());
  } else if (isPrevAllExist && !isAllExist) {
    onChangeAction([]);
  } else if (isManualAllSelected) {
    onChangeAction(getAllIds());
  } else if (isManualAllRuined) {
    onChangeAction(without(ids, 'all'));
  } else {
    onChangeAction(ids);
  }
};

export default processCheckboxChange;
