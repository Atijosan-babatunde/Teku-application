import moment from 'moment';

export function formatDate(isoDateString) {
  const date = moment(isoDateString);
  const formattedDateString = date.format('DD-MM-YYYY, hh:mmA');
  return formattedDateString
}
