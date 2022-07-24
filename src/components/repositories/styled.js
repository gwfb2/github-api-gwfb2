import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import styled from 'styled-components';

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0
  `;
  
WrapperTabList.tabsRole = 'TabList'

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 10px;
  user-select: none;
  cursor: pointer;
  transition: 0.2s ease-in; 
  box-shadow: 2px 0px 4px 0px rgba(0, 0, 0, 0.2);

  &:focus {
    outline: none;
  }

  &.is-selected {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid white;
  }
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 8px;
    display: none;
    margin-top: -5px;
    min-height: 40vh;
    
    &.is-selected {
        display: block;
    }
`;

WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperList = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`