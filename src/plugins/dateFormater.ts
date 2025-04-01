export function formatIntl(date: string): string {
  if (!date) {
    return 'no date';
  }

  return new Intl.DateTimeFormat('pl-PL', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  })
    .format(new Date(date))
    .replace(/\./g, '/')
    .replace(/\s/g, '');
}
