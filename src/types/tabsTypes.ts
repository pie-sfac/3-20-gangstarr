export interface ITabsProps {
  tabLists: { path: string; name: string; callback: () => void }[];
  currentTab: string;
}
