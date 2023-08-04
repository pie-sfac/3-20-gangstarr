import { HTMLAttributes } from 'react';

export interface CardLinkMediumProps extends HTMLAttributes<HTMLDivElement> {
  imageUrl?: string;
  isDelete?: boolean;
  description?: string;
}

export interface CardTextStyleProps {
  $isName?: boolean;
  $minWidth: string;
}

export interface ICardCalendarDataProps {
  period?: string;
  name?: string;
  totalSchedule?: string;
  cancelSchedule?: string;
  percent?: string | number;
}

export interface CardLinkLargeProps extends HTMLAttributes<HTMLDivElement> {
  imageUrl?: string;
  title?: string;
  description?: string;
}

export interface ICardOptionProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  isActive?: boolean;
}

export interface ICardOptionsStyleProps {
  $isActive: boolean;
}
