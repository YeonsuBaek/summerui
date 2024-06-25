import type { ComponentStory, Meta } from '@storybook/react'
import { Card } from '.'

const meta: Meta<typeof Card> = {
  title: 'Component/Card',
  component: Card,
  argTypes: {},
}

export default meta

const InteractionTemplate: ComponentStory<typeof Card> = (args) => <Card {...args} id="story-card-1" width={200}></Card>

export const Interactive = InteractionTemplate.bind({})
Interactive.args = {
  title: '트로피컬 나이트',
  info: '조예은 (지은이)',
  image: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791160408331.jpg',
}

export const DefaultCard = () => {
  return (
    <div>
      <Card id="story-card-2" title="Card 1" info="This is information of Card 1." image="" width={150} />
      <Card id="story-card-3" title="Card 1" info="This is information of Card 1." image="" width={250} />
    </div>
  )
}
