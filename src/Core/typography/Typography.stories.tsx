const meta = {
  title: 'Foundation/Typography',
}

export default meta

export const Typography = () => {
  const exCustom = `
  .text {
    font: var(--Detail-Font-2);
  }
  `

  return (
    <div className="storybook core-font">
      <h1>Typography</h1>
      <p>
        다양한 상황에 맞도록 일관성 있게 텍스트를 표시한다.
        <br />
        글꼴은{' '}
        <a href="https://github.com/orioncactus/pretendard" target="_blank">
          프리텐다드
        </a>
        를 사용하며, 반응형을 대비하기 위해 폰트 규격은 <b>rem</b> 값을 사용한다.
      </p>
      <h4>📝 Display</h4>
      <div className="storybook-example">
        <p className="core-font-display-1">Display-Font-1</p>
        <p className="core-font-display-2">Display-Font-2</p>
      </div>
      <h4>📝 Title</h4>
      <div className="storybook-example">
        <h1>Title-Font-1</h1>
        <h2>Title-Font-2</h2>
        <h3>Title-Font-3</h3>
      </div>
      <h4>📝 Heading</h4>
      <div className="storybook-example">
        <h4>Heading-Font-1</h4>
        <h5>Heading-Font-2</h5>
        <h6>Heading-Font-3</h6>
      </div>
      <h4>📝 Body</h4>
      <div className="storybook-example">
        <p>Body-Font-1</p>
        <p className="core-font-body-2">Body-Font-2</p>
      </div>
      <h4>📝 Detail</h4>
      <div className="storybook-example">
        <p className="core-font-detail-1">Detail-Font-1</p>
        <p className="core-font-detail-2">Detail-Font-2</p>
      </div>
      <h4>📝 Micro</h4>
      <div className="storybook-example">
        <p className="core-font-micro-1">Micro-Font-1</p>
        <p className="core-font-micro-2">Micro-Font-2</p>
      </div>
      <h4>🛠️ 사용법</h4>
      <p>
        기본 폰트 스타일은 <b>Body-Font-1</b>이다.
        <br />
        <b>h1~h3</b>은 각각 <span>Title-Font-1</span>~<span>Title-Font-3</span>, <b>h4~h6</b>은 각각{' '}
        <span>Heading-Font-4</span>~<span>Heading-Font-6</span>
        스타일을 갖는다.
        <br />
        폰트 스타일을 사용할 땐 변수명을 사용한다.
      </p>
      <pre>{exCustom}</pre>
      <h4>✨ 규칙</h4>
      <ul>
        <li>Display는 주로 마케팅 용도로 사용한다.</li>
        <li>Title은 페이지 단위 타이틀에 사용한다.</li>
        <li>Heading은 템플릿 단위, 기능 강조, 본문 상위에 내용을 강조할 때 사용한다.</li>
        <li>Body는 본문 텍스트로 사용한다.</li>
        <li>Detail은 추가 정보나 서브 항목 텍스트로 사용한다.</li>
        <li>Micro는 부가적인 내용을 나타낼 때 사용한다.</li>
      </ul>
    </div>
  )
}
