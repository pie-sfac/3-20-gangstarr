import { Dispatch, SetStateAction } from 'react';
import { ItargetMonthTypes } from '../types/pickerTypes';

export const getCurrentDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const date = currentDate.getDate();

  return { year, month, date };
};

export const onClickDateArrow = (
  action: 'prevyear' | 'nextyear' | 'prevmonth' | 'nextmonth',
  callback: Dispatch<SetStateAction<ItargetMonthTypes>>,
): void => {
  switch (action) {
    case 'prevyear':
      callback((prev) => {
        return {
          ...prev,
          year: prev.year - 1,
        };
      });
      break;
    case 'nextyear':
      callback((prev) => {
        return {
          ...prev,
          year: prev.year + 1,
        };
      });
      break;
    case 'prevmonth':
      callback((prev) => {
        return {
          year: calculateYear(prev, 'prev'),
          month: calculateMonth(prev, 'prev'),
        };
      });
      break;
    case 'nextmonth':
      callback((prev) => {
        return {
          year: calculateYear(prev, 'next'),
          month: calculateMonth(prev, 'next'),
        };
      });
      break;
  }
};

export const getDate = (
  target: ItargetMonthTypes,
  type: 'first' | 'last' | 'lastMonth',
) => {
  switch (type) {
    case 'first':
      return new Date(target.year, target.month - 1);
    case 'last':
      return new Date(target.year, target.month, 0);
    case 'lastMonth':
      return new Date(
        target.month - 1 === 0 ? target.year - 1 : target.year,
        target.month - 1 === 0 ? 12 : target.month - 1,
        0,
      );
  }
};

export const calculateYear = (
  target: ItargetMonthTypes,
  mode: 'prev' | 'next',
) => {
  switch (mode) {
    case 'prev':
      return target.month - 1 === 0 ? target.year - 1 : target.year;
    case 'next':
      return target.month + 1 === 13 ? target.year + 1 : target.year;
  }
};

export const calculateMonth = (
  target: ItargetMonthTypes,
  mode: 'prev' | 'next',
) => {
  switch (mode) {
    case 'prev':
      return target.month - 1 === 0 ? 12 : target.month - 1;
    case 'next':
      return target.month + 1 === 13 ? 1 : target.month + 1;
  }
};

export const getCalendarDate = (
  target: ItargetMonthTypes,
  mode: 'large' | 'small' = 'large',
) => {
  const firstDate = getDate(target, 'first');
  const lastDate = getDate(target, 'last');
  const currentDate = new Date();
  const calendarDate = [];
  let week = Array(7);
  let lastMonthLastDate = getDate(target, 'lastMonth').getDate();
  let nextMonthFirstDate = 1;
  let targetCurrentDay = firstDate.getDay();

  for (let i = 1; i < lastDate.getDate() + 1; i++) {
    week[targetCurrentDay] = {
      year: target.year,
      month: target.month,
      date: i,
    };

    if (targetCurrentDay === 6) {
      calendarDate.push(week);
      week = Array(7);
      targetCurrentDay = 0;
    } else {
      targetCurrentDay++;
    }
  }

  if (week[0]) calendarDate.push(week);

  for (let i = calendarDate[0].length - 1; i > -1; i--) {
    if (!calendarDate[0][i]) {
      calendarDate[0][i] = {
        year: calculateYear(target, 'prev'),
        month: calculateMonth(target, 'prev'),
        date: lastMonthLastDate,
      };
      lastMonthLastDate--;
    }
  }

  if (mode === 'large')
    for (let i = 0; i < calendarDate[calendarDate.length - 1].length; i++) {
      if (!calendarDate[calendarDate.length - 1][i]) {
        calendarDate[calendarDate.length - 1][i] = {
          year: calculateYear(target, 'next'),
          month: calculateMonth(target, 'next'),
          date: nextMonthFirstDate,
        };
        nextMonthFirstDate++;
      }
    }

  return {
    currentDate: {
      year: currentDate.getFullYear(),
      month: currentDate.getMonth() + 1,
      date: currentDate.getDate(),
    },
    calendarDate,
  };
};
