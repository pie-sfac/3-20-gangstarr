# Team Gangstarr

## 🗂️ 프로젝트 소개
**웅진X스나이퍼 팩토리 일경험 프로젝트**의 일환으로 통증관리시스템 디자인 라이브러리 제작하였습니다.

## 🌕 팀소개

| 팀장 | 팀원 | 팀원 | 팀원 |
| :---: | :---: | :---: | :---: |
| <img src="https://avatars.githubusercontent.com/sungin46" height=180 width=180> | <img src="https://avatars.githubusercontent.com/jennie-0530" height=180 width=180> | <img src="https://avatars.githubusercontent.com/0SCAR0421" height=180 width=180> | <img src="https://avatars.githubusercontent.com/dong-fa" height=180 width=180> |
| [홍성인 🐧](https://github.com/sungin46) <br/> **뭐 먹지**| [김준경 🐱](https://github.com/jennie-0530) <br/> **야옹**| [정연우 🐬](https://github.com/0SCAR0421) <br/> **최고보다는 최선을.**| [최동환 🦄](https://github.com/dong-fa) <br/> **어? 금지**|

## 설치 방법

```bash
npm i gangstarr-point-styler
```

**정상적인 스타일을 위해서는 Provider를 적용해야해요!**

```jsx
import { PoinTStyleProvider } from 'gangstarr-point-styler';

...

return (
  <PoinTStyleProvider>
  </PoinTStyleProvider>
)

...
```

## 사용법

### color와 font
import후 `color.gray100`와 같은 형태로 사용해요.

```jsx
import { color, font } from "gangstarr-point-styler";

...

const Component = styled.div`
  color: ${color.gray100}
`

...
```

### AppBar
{한줄 소개 지우고 이 자리에 작성}

예시 코드
```jsx
예시코드 작성
```

| 속성 | 값 | 설명 | 필수여부 |
| --- | --- | ---| --- |
|     |     |    |     |

### Banner
사용자가 원하는 사진과 제목, 설명을 노출합니다.

예시 코드
```jsx
...
import { Banners } from 'gangstarr-point-styler';
...

  <Banners title='title' description='description' imageUrl='imageUrl' />

...
```

| 속성 | 값 | 설명 | 필수여부 |
| --- | --- | ---| --- |
| title | string | 제목을 나타냄 | ❎ |
| description | string | 설명을 나타냄 | ❎ |
| imageUrl | string | 이미지 url을 통해 이미지를 노출함 | ❎ |

### Button
각 속성의 값에 따라 스타일링된 버튼을 노출합니다.

예시 코드
```jsx
...
import { Button } from 'gangstarr-point-styler';
...

  <Button size='large' fill='contained' mode='normal'>
	버튼
  </Button>

...

```

| 속성 | 값 | 설명 | 필수여부 |
| --- | --- | ---| --- |
| children | string | 버튼에 표시될 텍스트 | 🅾️ |
| size | 'full' \| 'xlarge' \| 'large' \| 'medium' \| 'small' \| 'xsmall' | 값에 따라 버튼 사이즈가 변경 | 🅾️ |
| fill | 'contained' \| 'outline' | 값에 따라 스타일 변경 | 🅾️ |
| mode | 'normal' \| 'enabled' \| 'disabled' | 값에 따라 스타일 변경 | 🅾️ |

### Button_FAB
{한줄 소개 지우고 이 자리에 작성}

예시 코드
```jsx
예시코드 작성
```

| 속성 | 값 | 설명 | 필수여부 |
| --- | --- | ---| --- |
|     |     |    |     |

### Card
#### CardCalendarData
속성 값에 따라 회원 정보와 일정 등을 노출합니다.

예시 코드
```jsx
...
import { CardCalendarData } from 'gangstarr-point-styler';
...

  <CardCalendarData 
    period={'이번 달'}
    name={'박환자'}
    totalSchedule={'100'}
    cancelSchedule={'100'}
    percent={'100'}
  />

...
```

| 속성 | 값 | 설명 | 필수여부 |
| --- | --- | ---| --- |
| period | string | 기간을 나타냄 (Ex 이번 달) | ❎ |
| name | string | 회원의 이름을 나타냄 | ❎ |
| totalSchedule | string | 총 일정을 나타냄 | ❎ |
| cancelSchedule | string | 취소한 일정을 나타냄 | ❎ |
| percent | string \| number | 취소율을 나타냄 | ❎ |

#### CardLinkLarge
카드에 대한 이미지와 제목, 설명을 노출합니다. 텍스트가 3줄 이상이 되면 말 줄임 표를 노출합니다.

예시 코드
```jsx
...
import { CardLinkLarge } from 'gangstarr-point-styler';
...

  <CardLinkLarge 
    imageUrl={'imageUrl'}
    title={'Title'}
    description={'Description'}
  />

...
```

| 속성 | 값 | 설명 | 필수여부 |
| --- | --- | ---| --- |
| imageUrl | string | 이미지 url을 통해 이미지를 노출함 | ❎ |
| title | string | 제목을 나타냄 | ❎ |
| description | string | 설명을 나타냄 | ❎ |

#### CardLinkMedium
카드에 대한 이미지와 설명을 노출합니다. 설명이 일정 글자 이상이 되면 말 줄임 표를 노출합니다.

예시 코드
```jsx
...
import { CardLinkMedium } from 'gangstarr-point-styler';
...

  <CardLinkMedium 
    imageUrl={'imageUrl'}
    description={'Description'}
    isDelete={false}
  />

...
```

| 속성 | 값 | 설명 | 필수여부 |
| --- | --- | ---| --- |
| imageUrl | string | 이미지 url을 통해 이미지를 노출함 | ❎ |
| description | string | 설명을 나타냄 | ❎ |
| isDelete | boolean | X 아이콘의 유무를 나타냄 | ❎ |

#### CardOption

예시 코드
```jsx
...
import { CardOption } from 'gangstarr-point-styler';
...

  <CardOption 
    title={'Title'}
    description={'Description'}
    isActive={false}
  />

...
```

| 속성 | 값 | 설명 | 필수여부 |
| --- | --- | ---| --- |
| title | string | 제목을 나타냄 | ❎ |
| description | string | 설명을 나타냄 | ❎ |
| isActive | boolean | 선택된 카드임을 나타냄 | ❎ |

### Dialog
사용자에게 정보를 제공하는 Dialog 창을 노출합니다. 경우에 따라 확인, 취소 버튼의 사용이 가능합니다.

예시 코드
```jsx
...
import { Dialog } from 'gangstarr-point-styler';
...

  const [isShow, setIsShow] = useState(false);
  
  ...

  <Dialog
    isShow={isShow}
    onHanndleShow={() => setIsShow(false)}
    title='Title'
    description='Description'
    grayButtonName='취소'
    onClickGrayButton={() => {
      return;
    }} 
    primaryButtonName='확인'
    onClickPrimaryButton={() => {
      return;
    }}
  />

...
```

| 속성 | 값 | 설명 | 필수여부 |
| --- | --- | ---| --- |
| isShow | boolean | Dialog의 노출여부를 결정 | 🅾️ |
| onHanndleShow | () => void | Dialog의 Show, Hide를 설정 | 🅾️ |
| title | string | Dialog의 제목 | 🅾️ |
| grayButtonName | string | 버튼의 이름 | 🅾️ |
| onClickGrayButton | () => void | 버튼을 클릭했을 시 발생할 이벤트 함수 | 🅾️ |
| description | string | Dialog의 설명 | ❎ |
| primaryButtonName | string | 버튼의 이름 | ❎ |
| onClickPrimaryButton | () => void | 버튼을 클릭했을 시 발생할 이벤트 함수 | ❎ |
 
### Dropdown
{한줄 소개 지우고 이 자리에 작성}

예시 코드
```jsx
예시코드 작성
```

| 속성 | 값 | 설명 | 필수여부 |
| --- | --- | ---| --- |

### Icon
{한줄 소개 지우고 이 자리에 작성}

예시 코드
```jsx
예시코드 작성
```

| 속성 | 값 | 설명 | 필수여부 |
| --- | --- | ---| --- |
|     |     |    |     |

### Item
{한줄 소개 지우고 이 자리에 작성}

예시 코드
```jsx
예시코드 작성
```

| 속성 | 값 | 설명 | 필수여부 |
| --- | --- | ---| --- |
|     |     |    |     |

### Label
{한줄 소개 지우고 이 자리에 작성}

예시 코드
```jsx
예시코드 작성
```

| 속성 | 값 | 설명 | 필수여부 |
| --- | --- | ---| --- |
|     |     |    |     |

### Navigation
{한줄 소개 지우고 이 자리에 작성}

예시 코드
```jsx
예시코드 작성
```

| 속성 | 값 | 설명 | 필수여부 |
| --- | --- | ---| --- |
|     |     |    |     |

### Picker
#### DatePicker
달력을 노출하고 사용자로 하여금 선택된 날짜를 `YYYY.M.D` 형식으로 저장합니다.

예시 코드
```jsx
...
import { DatePicker } from 'gangstarr-point-style';
...

  const [isSelectedDate, setIsSelectDate] = useState<string>('');
  const [isShow, setIsShow] = useState<boolean>(false);

  ...

    <Button onClick={() => setIsShow(true)}>열기</Button>
    <>
      {isShow && (
        <DatePicker
          size='large'
          prevSelected={isSelectedDate}
          onClickConfirm={setIsSelectDate}
          onClosePicker={() => setIsShow(false)}
        />
      )}
    </>

...
```

| 속성 | 값 | 설명 | 필수여부 |
| --- | --- | ---| --- |
| size | 'small' \| 'large' | DatePicker의 사이즈를 결정함 | ❎ |
| prevSelected | string | 이전에 선택된 값 형식에 맞게 있다면 DatePicker에 표시함 | ❎ |
| onClickConfirm | Dispatch<SetStateAction<string\>\> | YYYY.M.D 형식으로 저장함 useState의 setState 함수임 | 🅾️ |
| onClosePicker | () => void | Picker를 닫는 함수임 | 🅾️ |

#### TimePicker
모바일 스타일의 TimePicker를 노출하고, 사용자로 하여금 선택된 시간을 `{hour: number, minute: number}` 형식으로 저장합니다.

예시 코드
```jsx
...
import { TimePicker } from 'gangstarr-point-style';
...

  const [selectTime, setSelectTime] = useState<IselectedTimeTypes | undefined>();
  const [isShow, setIsShow] = useState(false);

  ...
  
    <button onClick={() => setIsShow(true)}>열기</button>
    <>
      {isShow && (
        <TimePicker
          prevSelectedTime={selectTime}
          onClickConfirm={setSelectTime}
          onClosePicker={() => setIsShow(false)}
        />
      )}
    </>

...
```

| 속성 | 값 | 설명 | 필수여부 |
| --- | --- | ---| --- |
| onClickConfirm | Dispatch<SetStateAction<IselectedTimeTypes \| undefined\>\> | {hour: number, minute: number} 형식으로 저장함 useState의 setState 함수임 | 🅾️ |
| onClosePicker | () => void | Picker를 닫는 함수임 | 🅾️ |
| prevSelectedTime | IselectedTimeTypes \| undefined | 전에 선택된 값 형식에 맞게 있다면 TimePicker에 표시함 | ❎ |

### PopupMenu
{한줄 소개 지우고 이 자리에 작성}

예시 코드
```jsx
예시코드 작성
```

| 속성 | 값 | 설명 | 필수여부 |
| --- | --- | ---| --- |
|     |     |    |     |

### Tabs
{한줄 소개 지우고 이 자리에 작성}

예시 코드
```jsx
...
import { Tabs } from 'gangstarr-point-style';
...

  const tabList = [
    { path: 'tab1', name: 'tab1', callback: () => { setCurrentTab('tab1') } },
    { path: 'tab2', name: 'tab2', callback: () => { setCurrentTab('tab2') } },
    { path: 'tab3', name: 'tab3', callback: () => { setCurrentTab('tab3') }  },
    { path: 'tab4', name: 'tab4', callback: () => { setCurrentTab('tab4') }  },
    { path: 'tab5', name: 'tab5', callback: () => { setCurrentTab('tab5') }  },
  ];
  const [currentTab, setCurrentTab] = useState('tab1');

  ...

    <Tabs tabLists={tabList} currentTab={currentTab} />
  
  ...
```

| 속성 | 값 | 설명 | 필수여부 |
| --- | --- | ---| --- |
| tabLists | { path: string; name: string; callback: () => void }\[\] | path, name, callback 함수를 포함한 배열형태의 요소 | 🅾️ |
| currentTab | string | 현재 선택된 탭의 path를 뜻함 | 🅾️ |

### TextField
{한줄 소개 지우고 이 자리에 작성}

예시 코드
```jsx
예시코드 작성
```

| 속성 | 값 | 설명 | 필수여부 |
| --- | --- | ---| --- |
|     |     |    |     |

### Thumbnails
{한줄 소개 지우고 이 자리에 작성}

예시 코드
```jsx
예시코드 작성
```

| 속성 | 값 | 설명 | 필수여부 |
| --- | --- | ---| --- |
|     |     |    |     |

### Typography
{한줄 소개 지우고 이 자리에 작성}

예시 코드
```jsx
예시코드 작성
```

| 속성 | 값 | 설명 | 필수여부 |
| --- | --- | ---| --- |
|     |     |    |     |

### SnackBar
{한줄 소개 지우고 이 자리에 작성}

예시 코드
```jsx
예시코드 작성
```

| 속성 | 값 | 설명 | 필수여부 |
| --- | --- | ---| --- |
|     |     |    |     |

## Demo

[데모사이트](https://wj-react-team27.github.io/)
