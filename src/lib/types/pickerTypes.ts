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

export interface IselectedTimeTypes {
  hour?: number;
  minute?: number;
}

export interface ItimepickerProps {
  onClickConfirm: Dispatch<SetStateAction<IselectedTimeTypes | undefined>>;
  onClosePicker: () => void;
  prevSelectedTime?: IselectedTimeTypes | undefined;
}

export interface ItimePickerSelectProps {
  mode: string;
  size: number;
  initalTime: number;
  setSelectTime: Dispatch<SetStateAction<IselectedTimeTypes | undefined>>;
}
