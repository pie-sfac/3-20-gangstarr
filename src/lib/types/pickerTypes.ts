import { Dispatch, SetStateAction } from 'react';

export interface ItargetMonthTypes {
  year: number;
  month: number;
}

export interface IselectedTypes extends ItargetMonthTypes {
  date: number;
}

export interface IdatePickerProps {
  size?: 'small' | 'large';
  prevSelected?: string;
  onClickConfirm: Dispatch<SetStateAction<string>>;
  onClosePicker: () => void;
}

export interface IdatePickerCalendarItemProps {
  $isCurrentMonth: boolean;
  $isToday: boolean;
  $isSelected: boolean;
}
