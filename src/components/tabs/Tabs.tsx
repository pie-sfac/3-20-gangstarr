import { styled } from 'styled-components';
import { color, font } from '../../styles';
import { ITabsProps } from '../../types/tabsTypes';

const TabsContainer = styled.div`
  display: flex;
  width: 100%;
`;

const TabItem = styled.div<{ $isSelected: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 8px 12px;
  font-size: ${font.fontSize.fontSize14};
  font-weight: ${font.fontWeight.fontWeight600};
  cursor: pointer;
  ${({ $isSelected }) =>
    $isSelected
      ? `
        color: ${color.primary300};
        border-bottom: 2px solid ${color.primary300};
      `
      : `
        color: ${color.textGray400};
        border-bottom: 1px solid ${color.textGray400};
  `}
`;

const Tabs = ({ tabLists, currentTab }: ITabsProps): JSX.Element => {
  return (
    <TabsContainer>
      {tabLists?.slice(0, 10).map((item, index) => (
        <TabItem
          onClick={() => item.callback()}
          key={index}
          $isSelected={currentTab === item.path}>
          {item.name}
        </TabItem>
      ))}
    </TabsContainer>
  );
};

export default Tabs;
