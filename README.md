# YEONSUI

## 🏂 시작하기

### 설치

```
$ npm i @yeonsubaek/yeonsui
```

### 데모

[Storybook](https://65a2410191d174e557802180-knplnhfafi.chromatic.com/?path=/story/component-button--interactive)을 통해 UI를 살펴볼 수 있습니다.

## 🎨 컴포넌트

- [0. Theme](#theme)
- [1. Icon](#icon)
- [2. Button](#button)
  - [IconButton](#iconbutton)
- [3. TextField](#textfield)
  - [Password](#password)
  - [Search](#search)
- [4. TextArea](#textarea)
- [5. Modal](#modal)
- [6. Toast](#toast)
- [7. DatePicker](#datepicker)
- [8. Checkbox](#checkbox)
  - [Checkbox.Group](#checkboxgroup)
- [9. RadioGroup](#radiogroup)
- [10. Segmented](#segmented)
- [11. Card](#card)

### Theme

#### Usage

```tsx
return (
  <html>
    <body className="theme-light cyan"></body>
  </html>
)
```

#### Class

| Type    | Description                                                                                |
| ------- | ------------------------------------------------------------------------------------------ |
| default | `theme-light` \| `theme-dark`                                                              |
| color   | `red` \| `volcano` \| `sunset` \| `polar` \| `cyan` \| `daybreak` \| `purple` \| `magenta` |

**default와 color 테마를 모두 적용해야 올바르게 색상이 적용됩니다.**  
상세 테마 보러 가기 [링크](https://65a2410191d174e557802180-qzdehketus.chromatic.com/?path=/story/foundation-colors--light-color-set)

### Icon

#### Usage

```tsx
import { Icon } from '@yeonsubaek/yeonsui'
```

```tsx
return <Icon icon="Star" />
```

#### Props

| Name      | Type                                                   | Desciption   |
| --------- | ------------------------------------------------------ | ------------ |
| icon      | 아이콘 이름                                            | **required** |
| size      | `xsmall` \| `small` \| `medium` \| `large` \| `xlarge` | `medium`     |
| color     | string                                                 |              |
| ClassName | string                                                 |              |

상세 아이콘 보러 가기 [링크](https://65a2410191d174e557802180-knplnhfafi.chromatic.com/?path=/story/component-icon--filled-icon-render)

### Button

#### Usage

```tsx
import { Button } from '@yeonsubaek/yeonsui'
```

```tsx
return (
  <Button variant="primary" size="small">
    Button Title
  </Button>
)
```

#### Props

| Name      | Type                                         | Description  |
| --------- | -------------------------------------------- | ------------ |
| children  | string                                       | **required** |
| variant   | `primary` \| `secondary` \| `link` \| `text` | `primary`    |
| size      | `small` \| `medium` \| `large`               | `medium`     |
| disabled  | boolean                                      | `false`      |
| startIcon | 아이콘 이름                                  |              |
| endIcon   | 아이콘 이름                                  |              |
| onClick   | `() => void`                                 |              |
| type      | `button` \| `submit` \| `reset`              | `button`     |
| color     | `error` \| `warning` \| `success`            |              |

상세 버튼 보러 가기 [링크](https://65a2410191d174e557802180-knplnhfafi.chromatic.com/?path=/story/component-button--interactive)

### IconButton

#### Usage

```tsx
import { IconButton } from '@yeonsubaek/yeonsui'
```

```tsx
return <IconButton icon="Heart" />
```

#### Props

| Name     | Type                                                     | Description  |
| -------- | -------------------------------------------------------- | ------------ |
| icon     | 아이콘 이름                                              | **requried** |
| variant  | `primary` \| `secondary`                                 | `primary`    |
| size     | `small` \| `medium` \| `large`                           | `medium`     |
| shape    | `default` \| `circle` \| `square`                        | `default`    |
| disabled | boolean                                                  | `false`      |
| onClick  | `() => void`                                             |              |
| color    | `error` \| `warning` \| `success` \| 'info' \| 'neutral' |              |

상세 아이콘버튼 보러 가기 [링크](https://65a2410191d174e557802180-knplnhfafi.chromatic.com/?path=/story/component-button--default-icon-button)

### TextField

#### Usage

```tsx
import { TextField } from '@yeonsubaek/yeonsui'
```

```tsx
const [text, setText] = useState<string>('')

return <TextField id="example-textfield" value={text} onChange={(e) => setText(e.target.value)} />
```

#### Props

| Name        | Type                                       | Description  |
| ----------- | ------------------------------------------ | ------------ |
| id          | string                                     | **required** |
| value       | string                                     | **required** |
| onChange    | (e: ChangeEvent<HTMLInputElement>) => void | **required** |
| placeholder | string                                     |              |
| size        | `small` \| `medium` \| `large`             | `medium`     |
| label       | string                                     |              |
| required    | boolean                                    | `false`      |
| disabled    | boolean                                    | `false`      |
| autoFocus   | boolean                                    | `false`      |
| isError     | boolean                                    | `false`      |
| helperText  | string                                     |              |
| suffix      | string                                     |              |
| icon        | 아이콘 이름                                |              |
| type        | `text` \| `password` \| `file`             | `text`       |

상세 텍스트필드 보러 가기 [링크](https://65a2410191d174e557802180-knplnhfafi.chromatic.com/?path=/story/component-textfield--interactive)

### Password

#### Usage

```tsx
import { TextField } from '@yeonsubaek/yeonsui'
```

```tsx
const [text, setText] = useState<string>('')

return <TextField.Password id="example-password-textfield" value={text} onChange={(e) => setText(e.target.value)} />
```

#### Props

| Name        | Type                                       | Description  |
| ----------- | ------------------------------------------ | ------------ |
| id          | string                                     | **required** |
| value       | string                                     | **required** |
| onChange    | (e: ChangeEvent<HTMLInputElement>) => void | **required** |
| placeholder | string                                     |              |
| size        | `small` \| `medium` \| `large`             | `medium`     |
| label       | string                                     |              |
| required    | boolean                                    | `false`      |
| disabled    | boolean                                    | `false`      |
| autoFocus   | boolean                                    | `false`      |
| isError     | boolean                                    | `false`      |
| helperText  | string                                     |              |

상세 패스워드 텍스트필드 보러 가기 [링크](https://65a2410191d174e557802180-knplnhfafi.chromatic.com/?path=/story/component-textfield--text-field-for-password)

### Search

#### Usage

```tsx
import { Search } from '@yeonsubaek/yeonsui'
```

```jsx
const [text, setText] = useState < string > ''

const handleSearch = () => {
  console.log(text)
}

return (
  <TextField.Search
    id="example-search-textfield"
    value={text}
    onChange={(e) => setText(e.target.value)}
    onSearch={handleSearch}
  />
)
```

#### Props

| Name        | Type                                       | Description  |
| ----------- | ------------------------------------------ | ------------ |
| id          | string                                     | **required** |
| value       | string                                     | **required** |
| onChange    | (e: ChangeEvent<HTMLInputElement>) => void | **required** |
| placeholder | string                                     |              |
| size        | `medium` \| `large`                        | `medium`     |
| onSearch    | `() => void`                               |              |

상세 서치 텍스트필드 보러 가기 [링크](https://65a2410191d174e557802180-kdekkwhomf.chromatic.com/?path=/story/component-textfield--text-field-for-search)

### Modal

#### Usage

```tsx
import { Modal } from '@yeonsubaek/yeonsui'

const [isOpen, setIsOpen] = useState(false)

return (
  <>
    <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
    <Modal onClose={() => setIsOpen(false)} isOpen={isOpen} title="Title">
      contents
    </Modal>
  </>
)
```

#### Props

| Name         | Type                                                      | Description                                                                  |
| ------------ | --------------------------------------------------------- | ---------------------------------------------------------------------------- |
| isOpen       | boolean                                                   | **required**                                                                 |
| children     | `ReactNode` \| `ReactNode[]`                              | **required**                                                                 |
| onClose      | `() => void`                                              | **required**                                                                 |
| title        | string                                                    |                                                                              |
| icon         | `info` \| `warning` \| `success` \| `error` \| `question` |                                                                              |
| headerButton | 아이콘 이름                                               |                                                                              |
| onClick      | `() => void`                                              | headerButton 클릭 이벤트입니다. 적절한 props명을 선정하지 못해 죄송합니다 :( |
| labelClose   | string                                                    | 'Close'                                                                      |
| labelSave    | string                                                    | 'Save'                                                                       |
| onSave       | () => void                                                |                                                                              |

상세 모달 보러 가기 [링크](https://65a2410191d174e557802180-knplnhfafi.chromatic.com/?path=/story/component-modal--interactive)

### Toast

#### Usage

```tsx
import { Toast } from '@yeonsubaek/yeonsui'

const [isOpen, setIsOpen] = useState(false)

return (
  <>
    <Button onClick={() => setIsOpen(true)}>Open Toast</Button>
    <Toast isOpen={isOpen} onClose={() => setIsOpen(false)} message="Success Toast" color="warning" />
  </>
)
```

#### Props

| Name           | Type                                        | Description  |
| -------------- | ------------------------------------------- | ------------ |
| isOpen         | boolean                                     | **required** |
| message        | string                                      | **required** |
| duration       | number                                      | 5000(ms)     |
| onClose        | `() => void`                                | 5000(ms)     |
| color          | `success` \| `info` \| `warning` \| `error` | `success`    |
| hasIcon        | boolean                                     | true         |
| icon           | 아이콘 이름                                 |              |
| hasCloseButton | boolean                                     | false        |

상세 토스트 보러 가기 [링크](https://65a2410191d174e557802180-exoukbkuqi.chromatic.com/?path=/story/component-toast--interactive)

### DatePicker

#### Usage

```tsx
import { DatePicker } from '@yeonsubaek/yeonsui'

const [date, setDate] = useState('')

return <DatePicker id="example-date-picker" value={date} setValue={(val: string) => setDate(val)} format="YYYY-MM-DD" />
```

#### Props

| Name     | Type                           | Description  |
| -------- | ------------------------------ | ------------ |
| id       | string                         | **required** |
| value    | string                         | **required** |
| setValue | `(val: string) => void`        | **required** |
| format   | `YYYY/MM/DD` \| `YYYY-MM-DD`   | `YYYY/MM/DD` |
| size     | `small` \| `medium` \| `large` | `medium`     |
| disabled | boolean                        | false        |

상세 데이트픽커 보러 가기 [링크](https://65a2410191d174e557802180-exoukbkuqi.chromatic.com/?path=/story/component-datepicker--interactive)

### Checkbox

#### Usage

```jsx
import { Checkbox } from '@yeonsubaek/yeonsui'

const [checked, setChecked] = useState(false)

return (
  <Checkbox
    id="example-checkbox-1"
    value="example"
    text="Example"
    checked={checked}
    onChange={(e: ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)}
  />
)
```

#### Props

| Name     | Type                                         | Description  |
| -------- | -------------------------------------------- | ------------ |
| id       | string                                       | **required** |
| value    | string                                       | **required** |
| text     | string \| `ReactElement`                     |              |
| disabled | boolean                                      | false        |
| checked  | boolean                                      | false        |
| onChange | `(e: ChangeEvent<HTMLInputElement>) => void` |              |

상세 체크박스 보러 가기 [링크](https://65a2410191d174e557802180-nmwvmtlrlr.chromatic.com/?path=/story/component-checkbox--interactive)

### CheckboxGroup

#### Usage

```jsx
import { Checkbox } from '@yeonsubaek/yeonsui'

const [checked, setChecked] = useState(false)

return (
  <Checkbox.Group
    value="example"
    text="Example"
    checked={checked}
    onChange={(e: ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)}
  />
)
```

#### Props

| Name           | Type                                         | Description |
| -------------- | -------------------------------------------- | ----------- |
| options        | `CheckboxItemType[]`                         |             |
| checkedOptions | `{ [key: string]: boolean }`                 |             |
| onChange       | `(e: ChangeEvent<HTMLInputElement>) => void` |             |
| wrap           | boolean                                      | false       |

#### CheckboxItemType

| Name     | Type                     | Description  |
| -------- | ------------------------ | ------------ |
| id       | string                   | **required** |
| value    | string                   | **required** |
| text     | string \| `ReactElement` |              |
| disabled | boolean                  | false        |

상세 체크박스 그룹 보러 가기 [링크](https://65a2410191d174e557802180-nmwvmtlrlr.chromatic.com/?path=/story/component-checkbox--checkbox-group)

### RadioGroup

#### Usage

```jsx
import { RadioGroup } from '@yeonsubaek/yeonsui'

enum values {
  red = 'red',
  blue = 'blue',
  yellow = 'yellow',
}
const OPTIONS: RadioOptionProps[] = [
  { value: values.red, text: 'Red', id: 'option1' },
  { value: values.blue, text: 'Blue', id: 'option2' },
  { value: values.yellow, text: 'Yellow', id: 'option3', disabled: true },
]

const [selectedOption, setSelectedOption] = useState(values.red)

return (
  <RadioGroup
    id="example-radio-group"
    options={OPTIONS}
    selectedOption={selectedOption}
    onSelect={(val) => setSelectedItem(val as values)}
  />
)
```

#### Props

| Name           | Type                       | Description  |
| -------------- | -------------------------- | ------------ |
| id             | string                     | **required** |
| options        | `RadioOptionProps[]`       | **required** |
| selectedOption | string                     | **required** |
| onSelect       | `(item: string) => void`   | **required** |
| direction      | `vertical` \| `horizontal` | `vertical`   |

#### Radio Option Props

| Name     | Type                     | Description  |
| -------- | ------------------------ | ------------ |
| value    | string                   | **required** |
| text     | string \| `ReactElement` | **required** |
| id       | string                   | **required** |
| disabled | boolean                  | `false`      |

상세 라디오그룹 보러 가기 [링크](https://65a2410191d174e557802180-exoukbkuqi.chromatic.com/?path=/story/component-radiogroup--interactive)

### Segmented

#### Usage

```jsx
import { Segmented } from '@yeonsubaek/yeonsui'

enum values {
  daily = 'Daily',
  weekly = 'Weekly',
}
const OPTIONS: RadioOptionProps[] = [
  { value: values.daily, text: 'Daily', id: 'option1' },
  { value: values.weekly, text: 'Weekly', id: 'option2' },
]

const [selectedOption, setSelectedOption] = useState(values.daily)

return (
  <Segmented
    id="example-segmented"
    options={OPTIONS}
    selectedOption={selectedOption}
    onSelect={(val) => setSelectedItem(val as values)}
    size="large"
  />
)
```

#### Props

| Name           | Type                           | Description  |
| -------------- | ------------------------------ | ------------ |
| id             | string                         | **required** |
| options        | `SegmentedOptionProps[]`       | **required** |
| selectedOption | string                         | **required** |
| onSelect       | `(item: string) => void`       | **required** |
| size           | `small` \| `medium` \| `large` | `medium`     |
| width          | `full` \| `flex`               | `full`       |
| disabled       | boolean                        | false        |

#### Segmented Option Props

| Name  | Type                     | Description  |
| ----- | ------------------------ | ------------ |
| value | string                   | **required** |
| text  | string \| `ReactElement` | **required** |
| id    | string                   | **required** |

상세 세그먼트 보러 가기 [링크](https://65a2410191d174e557802180-exoukbkuqi.chromatic.com/?path=/story/component-segmented--interactive)

### Card

#### Usage

```jsx
import { Card } from '@yeonsubaek/yeonsui'

return <Card id="example-card" title="title of card" info="This is a card" image="" size="large" />
```

#### Props

| Name    | Type                | Description  |
| ------- | ------------------- | ------------ |
| id      | string              | **required** |
| title   | string              | **required** |
| info    | string              |              |
| image   | string              |              |
| size    | `medium` \| `large` | `medium`     |
| onClick | `() => void`        |              |

상세 카드 보러 가기 [링크](https://65a2410191d174e557802180-exoukbkuqi.chromatic.com/?path=/story/component-card--interactive)
