import {
  IconComponent,
  IconCurrencyDirham,
  IconCurrencyDollar,
  IconCurrencyEuro,
  IconCurrencyFrank,
  IconCurrencyKroneCzech,
  IconCurrencyKroneSwedish,
  IconCurrencyPound,
  IconCurrencyRiyal,
  IconCurrencyYen,
  IconCurrencyYuan,
} from 'twenty-ui';

import { CurrencyCode } from '@/object-record/record-field/types/CurrencyCode';

export const SETTINGS_FIELD_CURRENCY_CODES: Record<
  CurrencyCode,
  { label: string; Icon: IconComponent }
> = {
  USD: {
    label: 'United States dollar',
    Icon: IconCurrencyDollar,
  },
  EUR: {
    label: 'Euro',
    Icon: IconCurrencyEuro,
  },
  JPY: {
    label: 'Japanese yen',
    Icon: IconCurrencyYen,
  },
  GBP: {
    label: 'British pound',
    Icon: IconCurrencyPound,
  },
  CAD: {
    label: 'Canadian dollar',
    Icon: IconCurrencyDollar,
  },
  CHF: {
    label: 'Swiss franc',
    Icon: IconCurrencyFrank,
  },
  CNY: {
    label: 'Chinese yuan',
    Icon: IconCurrencyYuan,
  },
  CZK: {
    label: 'Czech koruna',
    Icon: IconCurrencyKroneCzech,
  },
  HKD: {
    label: 'Hong Kong dollar',
    Icon: IconCurrencyDollar,
  },
  NOK: {
    label: 'Norwegian krone',
    Icon: IconCurrencyKroneSwedish,
  },
  SEK: {
    label: 'Swedish krona',
    Icon: IconCurrencyKroneSwedish,
  },
  MAD: {
    label: 'Moroccan dirham',
    Icon: IconCurrencyDirham,
  },
  QAR: {
    label: 'Qatari riyal',
    Icon: IconCurrencyRiyal,
  },
  AED: {
    label: 'UAE dirham',
    Icon: IconCurrencyDirham,
  },
};
