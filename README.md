# Team Gangstarr

## 🗂️ 프로젝트 소개

**웅진X스나이퍼 팩토리 일경험 프로젝트**의 일환으로 통증관리시스템 디자인 라이브러리 제작하였습니다.

## 🌕 팀소개

|                                      팀장                                       |                                        팀원                                        |                                       팀원                                       |                                      팀원                                      |
| :-----------------------------------------------------------------------------: | :--------------------------------------------------------------------------------: | :------------------------------------------------------------------------------: | :----------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/sungin46" height=180 width=180> | <img src="https://avatars.githubusercontent.com/jennie-0530" height=180 width=180> | <img src="https://avatars.githubusercontent.com/0SCAR0421" height=180 width=180> | <img src="https://avatars.githubusercontent.com/dong-fa" height=180 width=180> |
|           [홍성인 🐧](https://github.com/sungin46) <br/> **뭐 먹지**            |     [김준경 🐱](https://github.com/jennie-0530) <br/> **개발 갱스터가 될래요**     |      [정연우 🐬](https://github.com/0SCAR0421) <br/> **최고보다는 최선을.**      |           [최동환 🦄](https://github.com/dong-fa) <br/> **어? 금지**           |

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

디테일 페이지에서 사용하는 AppBar입니다.

예시 코드

```jsx
import { AppBar } from 'gangstarr-point-styler';
...
<AppBar title='페이지 이름' size='full' icon={[{iconName: 'add', func: () => {console.log('클릭')}}]} />
...
```

| 속성    | 값                                               | 설명                                                                                                                                                       | 필수여부 |
| ------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| size    | 'medium','large','full'                          | AppBar의 크기를 결정합니다. <br /> medium은 width값 650px, large의 경우 width값 1024px, full의 경우 width 1024px, height 56px로 변경됩니다.                | ❎       |
| title   | string                                           | AppBar 사용시 현재 페이지의 이름을 표시합니다. <br/> size가 full일때 title은 가운데 표시됩니다.                                                            | ❎       |
| icon    | [{iconName: iconsKey, func: ()=>void}]           | AppBar 오른쪽에 위치할 아이콘 버튼입니다. <br/> iconName은 Icon 컴포넌트의 속성(iconsKey)을 작성합니다. func은 버튼 클릭시 작동할 함수를 작성합니다.       | ❎       |
| text    | [{textName: string, func: ()=>void}]             | AppBar 오른쪽에 위치할 텍스트 버튼입니다. <br/> TextName은 버튼의 이름을 결정합니다. func은 버튼 클릭시 작동할 함수를 작성합니다.                          | ❎️      |
| counter | {text: string, count: number, func: () => void } | AppBar 오른쪽에 위치할 텍스트 버튼입니다. <br/> Text은 버튼의 이름을 결정합니다. count는 number가 들어갑니다. func은 버튼 클릭시 작동할 함수를 작성합니다. | ❎️      |

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

| 속성        | 값     | 설명                              | 필수여부 |
| ----------- | ------ | --------------------------------- | -------- |
| title       | string | 제목을 나타냄                     | ❎       |
| description | string | 설명을 나타냄                     | ❎       |
| imageUrl    | string | 이미지 url을 통해 이미지를 노출함 | ❎       |

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

| 속성     | 값                                                               | 설명                         | 필수여부 |
| -------- | ---------------------------------------------------------------- | ---------------------------- | -------- |
| children | string                                                           | 버튼에 표시될 텍스트         | 🅾️       |
| size     | 'full' \| 'xlarge' \| 'large' \| 'medium' \| 'small' \| 'xsmall' | 값에 따라 버튼 사이즈가 변경 | 🅾️       |
| fill     | 'contained' \| 'outline'                                         | 값에 따라 스타일 변경        | 🅾️       |
| mode     | 'normal' \| 'enabled' \| 'disabled'                              | 값에 따라 스타일 변경        | 🅾️       |

### Button_FAB

페이지 하단에서 페이지 상단으로 이동하거나 추가버튼을 사용하는 버튼입니다.

예시 코드

```jsx
import { ButtonFab } from 'gangstarr-point-styler';
...
 <ButtonFab mode={'add'} func={()=>{console.log("클릭")}} position={'center'}/>
...
```

| 속성     | 값                        | 설명                                            | 필수여부 |
| -------- | ------------------------- | ----------------------------------------------- | -------- |
| mode     | 'add','up'                | 추가 버튼과 상단이동 버튼의 모양을 결정 합니다. | 🅾️       |
| func     | ()=>void                  | 버튼 클릭시 동작할 함수를 작성합니다.           | 🅾️       |
| position | 'left', 'center', 'right' | 버튼 노출 위치를 결정합니다.                    | 🅾️       |

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

| 속성           | 값               | 설명                       | 필수여부 |
| -------------- | ---------------- | -------------------------- | -------- |
| period         | string           | 기간을 나타냄 (Ex 이번 달) | ❎       |
| name           | string           | 회원의 이름을 나타냄       | ❎       |
| totalSchedule  | string           | 총 일정을 나타냄           | ❎       |
| cancelSchedule | string           | 취소한 일정을 나타냄       | ❎       |
| percent        | string \| number | 취소율을 나타냄            | ❎       |

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

| 속성        | 값     | 설명                              | 필수여부 |
| ----------- | ------ | --------------------------------- | -------- |
| imageUrl    | string | 이미지 url을 통해 이미지를 노출함 | ❎       |
| title       | string | 제목을 나타냄                     | ❎       |
| description | string | 설명을 나타냄                     | ❎       |

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

| 속성        | 값      | 설명                              | 필수여부 |
| ----------- | ------- | --------------------------------- | -------- |
| imageUrl    | string  | 이미지 url을 통해 이미지를 노출함 | ❎       |
| description | string  | 설명을 나타냄                     | ❎       |
| isDelete    | boolean | X 아이콘의 유무를 나타냄          | ❎       |

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

| 속성        | 값      | 설명                   | 필수여부 |
| ----------- | ------- | ---------------------- | -------- |
| title       | string  | 제목을 나타냄          | ❎       |
| description | string  | 설명을 나타냄          | ❎       |
| isActive    | boolean | 선택된 카드임을 나타냄 | ❎       |

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

| 속성                 | 값         | 설명                                  | 필수여부 |
| -------------------- | ---------- | ------------------------------------- | -------- |
| isShow               | boolean    | Dialog의 노출여부를 결정              | 🅾️       |
| onHanndleShow        | () => void | Dialog의 Show, Hide를 설정            | 🅾️       |
| title                | string     | Dialog의 제목                         | 🅾️       |
| grayButtonName       | string     | 버튼의 이름                           | 🅾️       |
| onClickGrayButton    | () => void | 버튼을 클릭했을 시 발생할 이벤트 함수 | 🅾️       |
| description          | string     | Dialog의 설명                         | ❎       |
| primaryButtonName    | string     | 버튼의 이름                           | ❎       |
| onClickPrimaryButton | () => void | 버튼을 클릭했을 시 발생할 이벤트 함수 | ❎       |

### Dropdown

{한줄 소개 지우고 이 자리에 작성}

예시 코드

```jsx
예시코드 작성
```

| 속성 | 값  | 설명 | 필수여부 |
| ---- | --- | ---- | -------- |

### Icon

다양한 아이콘을 표현하기 위한 컴포넌트입니다.

예시 코드

```jsx
import { Icon } from 'gangstarr-point-styler';
...
<Icon name={'add'} />
...
```

| 속성 | 값       | 설명                                                                        | 필수여부 |
| ---- | -------- | --------------------------------------------------------------------------- | -------- |
| name | iconsKey | name을 string 형식으로 작성합니다. ' ' 작성시 스니펫을 확인 할 수 있습니다. | 🅾️       |

### Item

{한줄 소개 지우고 이 자리에 작성}

예시 코드

```jsx
예시코드 작성
```

| 속성 | 값  | 설명 | 필수여부 |
| ---- | --- | ---- | -------- |
|      |     |      |          |

### Label

각 속성의 값에 따라 스타일링된 라벨을 노출합니다.

예시 코드

```jsx
...
import { Label } from 'gangstarr-point-styler';
...

  <Label shape='rectangle' background='blue' color='green'>
    제니는 갱스타
  </Label>

...
```

| 속성       | 값                                                   | 설명                                  | 필수여부 |
| ---------- | ---------------------------------------------------- | ------------------------------------- | -------- |
| children   | string                                               | 라벨에 표시될 텍스트                  | 🅾️       |
| shape      | 'rectangle' \| 'round'                               | 값에 따라 라벨 모양이 변경됨          | ❎       |
| background | 'blue' \| 'gray' \| 'green'                          | 값에 따라 라벨의 배경색이 변경됨      | ❎       |
| color      | 'blue500' \| 'blue300' \| 'gray' \| 'red' \| 'green' | 값에 따라 라벨의 텍스트 색상이 변경됨 | ❎       |

### Navigation

#### TopNavigation

통증 관리 시스템 상단에서 페이지 이동을 담당하는 NavigationBar 입니다.

예시 코드

```jsx
import { TopNavigationBar } from 'gangstarr-point-styler';
...
 <TopNavigationBar
        tapMenuLists={[
          { tapName: '수강관리', path: 'about' },
          { tapName: '수강관리2', path: 'about2' },
          { tapName: '수강관리3', path: 'about3' },
          { tapName: '수강관리4', path: 'about4' },
          { tapName: '수강관리5', path: 'about5' },
        ]}
        userData={{ name: '최동환', label: '플랜이용중' }}
      />
...
```

| 속성         | 값                                  | 설명                                     | 필수여부 |
| ------------ | ----------------------------------- | ---------------------------------------- | -------- |
| tapMenuLists | [{ tapName: string, path: string }] | TopNavigationBar의 탭 버튼을 담당합니다. | ❎       |
| userData     | {name: string, label: string}       | 로그인시 보여질 유저 데이터입니다.       | ❎       |

#### BotNavigation

통증 관리 시스템 하단에서 페이지 이동을 담당하는 NavigationBar 입니다.

예시 코드

```jsx
import { BotNavigationBar } from 'gangstarr-point-styler';
...
<BottomNavigationBar
        tabNameLists={{
          home: 'home',
          reservation: 'reservation',
          patient: 'patient',
          center: 'center',
          mypage: 'mypage',
        }}
        onClickHome={() => navigate('/home')}
        onClickReservation={() => navigate('/reserve')}
        onClickPatient={() => navigate('/partiend')}
        onClickCenter={() => navigate('/center')}
        onClickMypage={() => navigate('/mypage')}
      />
...
```

| 속성               | 값                                                                                 | 설명                                     | 필수여부 |
| ------------------ | ---------------------------------------------------------------------------------- | ---------------------------------------- | -------- |
| tabNameLists       | home: string, reservation: string, patient: string, center: string, mypage: string | BotNavigationBar의 탭 메뉴를 담당합니다. | 🅾️       |
| onClickHome        | () => void                                                                         | 버튼 클릭시 동작할 함수를 작성합니다.    | 🅾️       |
| onClickReservation | () => void                                                                         | 버튼 클릭시 동작할 함수를 작성합니다.    | 🅾️       |
| onClickPatient     | () => void                                                                         | 버튼 클릭시 동작할 함수를 작성합니다.    | 🅾️       |
| onClickCenter      | () => void                                                                         | 버튼 클릭시 동작할 함수를 작성합니다.    | 🅾️       |
| onClickMypage      | () => void                                                                         | 버튼 클릭시 동작할 함수를 작성합니다.    | 🅾️       |

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

| 속성           | 값                                 | 설명                                                    | 필수여부 |
| -------------- | ---------------------------------- | ------------------------------------------------------- | -------- |
| size           | 'small' \| 'large'                 | DatePicker의 사이즈를 결정함                            | ❎       |
| prevSelected   | string                             | 이전에 선택된 값 형식에 맞게 있다면 DatePicker에 표시함 | ❎       |
| onClickConfirm | Dispatch<SetStateAction<string\>\> | YYYY.M.D 형식으로 저장함 useState의 setState 함수임     | 🅾️       |
| onClosePicker  | () => void                         | Picker를 닫는 함수임                                    | 🅾️       |

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

| 속성             | 값                                                          | 설명                                                                      | 필수여부 |
| ---------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------- | -------- |
| onClickConfirm   | Dispatch<SetStateAction<IselectedTimeTypes \| undefined\>\> | {hour: number, minute: number} 형식으로 저장함 useState의 setState 함수임 | 🅾️       |
| onClosePicker    | () => void                                                  | Picker를 닫는 함수임                                                      | 🅾️       |
| prevSelectedTime | IselectedTimeTypes \| undefined                             | 전에 선택된 값 형식에 맞게 있다면 TimePicker에 표시함                     | ❎       |

### PopupMenu

{한줄 소개 지우고 이 자리에 작성}

예시 코드

```jsx
예시코드 작성
```

| 속성 | 값  | 설명 | 필수여부 |
| ---- | --- | ---- | -------- |
|      |     |      |          |

### Tabs

최대 10개의 Tabs를 노출함. tabLists의 요소가 10개를 초과한다면 0 ~ 9번 인덱스의 요소를 노출함.

예시 코드

```jsx
...
import { Tabs } from 'gangstarr-point-style';
...

  const tabLists = [
    { path: 'tab1', name: 'tab1', callback: () => { setCurrentTab('tab1') } },
    { path: 'tab2', name: 'tab2', callback: () => { setCurrentTab('tab2') } },
    { path: 'tab3', name: 'tab3', callback: () => { setCurrentTab('tab3') }  },
    { path: 'tab4', name: 'tab4', callback: () => { setCurrentTab('tab4') }  },
    { path: 'tab5', name: 'tab5', callback: () => { setCurrentTab('tab5') }  },
  ];
  const [currentTab, setCurrentTab] = useState('tab1');

  ...

    <Tabs tabLists={tabLists} currentTab={currentTab} />

  ...
```

| 속성       | 값                                                       | 설명                                               | 필수여부 |
| ---------- | -------------------------------------------------------- | -------------------------------------------------- | -------- |
| tabLists   | { path: string; name: string; callback: () => void }\[\] | path, name, callback 함수를 포함한 배열형태의 요소 | 🅾️       |
| currentTab | string                                                   | 현재 선택된 탭의 path를 뜻함                       | 🅾️       |

### TextField

사용자로부터 입력을 받을 수 있는 input 컴포넌트입니다. 필요에 따라 입력받은 값에 대해 validation을 해줄 수 있습니다. 그리고 validation 결과에 따른 메세지를 보여줄 수도 있습니다.

예시 코드

```jsx
...
import { TextField } from 'gangstarr-point-style';
...

  const [inputValue, setInputValue] = useState('');
  const [isError, setIsError] = useState(false);

  {/* 유효성 검증 함수*/}
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value.length < 5) setIsError(true);  {/* 유효성 검증 조건*/}
    else setIsError(false);
  };

  ...

    <TextField
      id='textfield'
      title='타이틀'
      placeholder={'값을 입력해주세요.'}
      onChange={onChangeInput}
      value={inputValue}
      validate={true}
      isError={isError}
      customErrorMessage='에러 메시지'
      customSuccessMessage='성공 메시지'
      customInactiveMessage='인액티브 메시지'
    />

    ...
```

| 속성                  | 값                                                                           | 설명                                                                                                       | 필수여부 |
| --------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | -------- |
| state                 | 'inactive' \| 'focused' \| 'error' \| 'positive' \| 'activated' \| 'disable' | Textfield 컴포넌트의 상태를 나타냄                                                                         | ❎       |
| id                    | string                                                                       | label의 `htmlFor`와 연결할 id를 의미함                                                                     | ❎       |
| title                 | string                                                                       | label에 나타낼 텍스트                                                                                      | ❎       |
| validate              | boolean                                                                      | 유효성 검증 여부 (유효성 검증이 필요하다면 유효성을 검증해주는 함수를 작성해서 사용)                       | ❎       |
| isError               | boolean                                                                      | 유효성 검증을 해야 할 때, 검증 결과에 따라서 스타일링을 다르게 해야 하므로 `isError`를 통해 상태를 관리함. | ❎       |
| customErrorMessage    | string                                                                       | 유효성 검증에 통과하지 못했을 때 보여줄 메세지                                                             | 🅾️       |
| customSuccessMessage  | string                                                                       | 유효성 검증에 통과했을 때 보여줄 메세지                                                                    | 🅾️       |
| customInactiveMessage | string                                                                       | 유효성 검증을 해야 하고, 사용자의 입력이 아직 없을 때 보여줄 메세지                                        | 🅾️       |

### Thumbnails

비디오 또는 이미지의 썸네일을 보여주는 컴포넌트입니다.

예시 코드

```jsx
...
import { Thumbnails } from 'gangstarr-point-styler';
...

  <Thumbnails
    src={이미지 주소}
    type='image'
    runningTime='12:30'
    state='delete'
    />

...
```

| 속성        | 값                                                    | 설명                                                                           | 필수여부 |
| ----------- | ----------------------------------------------------- | ------------------------------------------------------------------------------ | -------- |
| state       | 'error' \| 'play' \| 'select' \| 'delete' \| 'normal' | 상태값에 따라 스타일링이 다르게 적용됨                                         | ❎       |
| type        | 'video' \| 'image'                                    | 동영상 또는 이미지의 썸네일을 만들 수 있음                                     | ❎       |
| runningTime | string                                                | `video` 타입의 경우, 동영상의 `runningTime`을 입력하여 썸네일에 보여줄 수 있음 | ❎       |
| src         | string                                                | 이미지 주소                                                                    | ❎       |

### Typography

{한줄 소개 지우고 이 자리에 작성}

예시 코드

```jsx
예시코드 작성
```

| 속성 | 값  | 설명 | 필수여부 |
| ---- | --- | ---- | -------- |
|      |     |      |          |

### SnackBar

통증 관리 시스템 이용중 보여질 SnackBar 입니다.

예시 코드
**올바른 사용을 위해 반드시 아래의 형태로 작성해주시기 바랍니다.**

```jsx
import { SnackBar } from 'gangstarr-point-styler';
...
 const [snackbarMessage, setSnackbarMessage] = useState('');
...
<>
    {snackbarMessage && (
      <SnackBar
        description={snackbarMessage}
        time={3000}
        setSnackbarMessage={setSnackbarMessage}></SnackBar>
    )}
</>
...
```

| 속성               | 값                        | 설명                                                     | 필수여부 |
| ------------------ | ------------------------- | -------------------------------------------------------- | -------- |
| description        | string                    | SnackBar로 보여줄 각종 메세지 입니다.                    | 🅾️       |
| time               | number                    | SnackBar가 노출 되는 시간입니다. ms 기준으로 전달합니다. | 🅾️       |
| setSnackbarMessage | (message: string) => void | SnackBar를 작동하기 위한 트리거 입니다.                  | 🅾️       |
| usedAppBar         | boolean                   | BotNavigation 유무에 따라 나타나는 위치를 결정합니다.    | ❎       |
| widthSize          | number                    | SnackBar의 사이즈를 결정합니다.                          | ❎       |

## Demo

[데모사이트](https://wj-react-team27.github.io/)
