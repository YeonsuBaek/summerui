import type { Meta } from '@storybook/react'
import { Modal } from '.'
import { useState } from 'react'
import { Button } from '../button'

const meta: Meta = {
  title: 'Components/Modal',
  component: Modal,
}

export default meta

export const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button styleType="filled" onClick={() => setIsOpen((prev) => !prev)}>
        Modal Open
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} hasBackdrop closeOnBackdropClick>
        <Modal.Header hasCloseButton={() => setIsOpen(false)}>
          <Modal.Title state="success">타이틀</Modal.Title>
        </Modal.Header>
        <Modal.Content>
          대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수
          있습니다.
        </Modal.Content>
        <Modal.Footer>
          <Modal.Button onClick={() => setIsOpen(false)}>취소</Modal.Button>
          <Modal.Button
            type="ok"
            onClick={() => {
              setIsOpen(false)
              alert('저장되었습니다.')
            }}
          >
            저장
          </Modal.Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export const ModalRequired = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button styleType="filled" onClick={() => setIsOpen((prev) => !prev)}>
        Required
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header hasCloseButton={() => setIsOpen(false)}>
          <Modal.Title>타이틀</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Modal.Button onClick={() => setIsOpen(false)}>닫기</Modal.Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
