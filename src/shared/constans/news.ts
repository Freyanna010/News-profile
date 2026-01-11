export const NEWS_CONSTANTS = {
  TOTAL_ITEMS: 100,
  DEFAULT_LIMIT: 10,
  DEFAULT_PAGE: 1,
} as const;

export const PAGE_SIZE_OPTIONS = [
  { value: '10', label: '10' },
  { value: '20', label: '20' },
  { value: '50', label: '50' },
  { value: NEWS_CONSTANTS.TOTAL_ITEMS, label: 'все' },
] as const;
