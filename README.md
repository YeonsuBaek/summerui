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
  - [PasswordTextField](#passwordtextfield)
- [4. TextArea](#textarea)
- [5. Modal](#modal)
- [6. Toast](#toast)
- [7. DatePicker](#datepicker)
- [8. Checkbox](#checkbox)
- [9. Segmented](#segmented)
- [10. Card](#card)

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

| Type                                                                                                         | Description                                                                                |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| default                                                                                                      | `theme-light`                                                                              |
| color | `red` \| `volcano` \| `sunset` \| `polar` \| `cyan` \| `daybreak` \| `purple` \| `magenta` |

**default와 color 테마를 모두 적용해야 올바르게 색상이 적용됩니다.**   
상세 테마 보러 가기 [링크](https://65a2410191d174e557802180-knplnhfafi.chromatic.com/?path=/story/foundation-colors--color-set)

### Icon

#### Usage

```tsx
import { Icon } from '@yeonsubaek/yeonsui'
```

```tsx
return <Icon icon="Star" />
```

#### Props

| Name  | Type                                                                                                                     | Desciption           |
| ----- | ------------------------------------------------------------------------------------------------------------------------ | -------------------- |
| icon  | 아이콘 이름 | **required**         |
| size  | `xsmall` \| `small` \| `medium` \| `large` \| `xlarge`                                                                                           | `medium`             |
| color | string                                                                                                                   | |
| ClassName | string | |

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

| Name      | Type                                                                                                                     | Description       |
| --------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| children  | string | **required**      |
| variant   | `primary` \| `secondary` \| `link` \| `text`                                                                             | `primary`         |
| size      | `small` \| `medium` \| `large`                                                                                           | `medium`          |
| disabled  | boolean                                                                                                                  | `false`           |
| startIcon | 아이콘 이름 |                   |
| endIcon   | 아이콘 이름 |                   |
| onClick   | `() => void`                                                                                                             |                   |
| type      | `button` \| `submit` \| `reset`                                                                                          | `button` |
| color | `error` \| `warning` \| `success` | |

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

| Name     | Type                                                                                                                     | Description        |
| -------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| icon     | 아이콘 이름 | **requried**       |
| variant  | `primary` \| `secondary`                                                                                                 | `primary` |
| size     | `small` \| `medium` \| `large`                                                                                           | `medium`  |
| shape    | `default` \| `circle` \| `square`                                                                                        | `default` |
| disabled | boolean                                                                                                                  | `false`            |
| onClick  | `() => void`                                                                                                             |                    |
| color | `error` \| `warning` \| `success` \| 'info' \| 'neutral' | |

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

| Name        | Type                                                                                                                     | Description       |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| id          | string                                                                                                                   | **required**      |
| value       | string                                                                                                                   | **required**      |
| onChange    | (e: ChangeEvent<HTMLInputElement>) => void                                                                               | **required**      |
| placeholder | string                                                                                                                   |                   |
| size        | `small` \| `medium` \| `large`                                                                                           | `medium` |
| label | string | |
| required | boolean | `false` |
| disabled    | boolean                                                                                                                  | `false`  |
| autoFocus | boolean | `false` |
| isError | boolean | `false` |
| helperText | string | |
| suffix      | string                                                                                                                   |                   |
| icon        | 아이콘 이름 |                   |
| type        | `text` \| `password` \| `file`                                                                                           | `text`   |

상세 텍스트필드 보러 가기 [링크](https://65a2410191d174e557802180-knplnhfafi.chromatic.com/?path=/story/component-textfield--interactive)

### PasswordTextField

#### Usage

```tsx
import { PasswordTextField } from '@yeonsubaek/yeonsui'
```

```tsx
const [text, setText] = useState<string>('')

return <PasswordTextField id="example-password-textfield" value={text} onChange={(e) => setText(e.target.value)} />
```

#### Props

| Name        | Type                                       | Description       |
| ----------- | ------------------------------------------ | ----------------- |
| id          | string                                     | **required**      |
| value       | string                                     | **required**      |
| onChange    | (e: ChangeEvent<HTMLInputElement>) => void | **required**      |
| placeholder | string                                     |                   |
| size        | `small` \| `medium` \| `large`             |`medium` |
| label | string | |
| required | boolean | `false` |
| disabled    | boolean                                    | `false`  |
| autoFocus | boolean | `false` |
| isError | boolean | `false` |
| helperText | string | |

상세 패스워드 텍스트필드 보러 가기 [링크](https://65a2410191d174e557802180-knplnhfafi.chromatic.com/?path=/story/component-textfield--text-field-for-password)

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

| Name       | Type                                                      | Description      |
| ---------- | --------------------------------------------------------- | ---------------- |
| isOpen     | boolean                                                   | **required**     |
| children   | `ReactNode` \| `ReactNode[]`                                  | **required**     |
| onClose    | `() => void`                                                | **required**     |
| title      | string                                                    |                  |
| icon       | `info` \| `warning` \| `success` \| `error` \| `question` |                  |
| headerButton | 아이콘 이름 | |
| onClick | `() => void` | headerButton 클릭 이벤트입니다. 적절한 props명을 선정하지 못해 죄송합니다 :( |
| labelClose | string                                                    | 'Close' |
| labelSave  | string                                                    | 'Save'  |
| onSave     | () => void                                                |                  |

상세 모달 보러 가기 [링크](https://65a2410191d174e557802180-knplnhfafi.chromatic.com/?path=/story/component-modal--interactive)
