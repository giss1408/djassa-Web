import { Kicker, Lede, Section, SplitHeading } from './Primitives.jsx'

export function Model({ content }) {
  const { model } = content

  return (
    <Section id="modele" className="model" labelledBy="model-title">
      <div className="model-head">
        <div>
          <Kicker>{model.kicker}</Kicker>
          <SplitHeading id="model-title" lead={model.title} accent={model.titleEm} />
        </div>
        <Lede>{model.lede}</Lede>
      </div>

      <div className="model-body">
        <div className="streams">
          <h3 className="block-title">{model.streamsTitle}</h3>
          <ol className="stream-list">
            {model.streams.map((stream) => (
              <li className={`stream stream-${stream.status}`} key={stream.step}>
                <span className="stream-step" aria-hidden="true">
                  {stream.step}
                </span>
                <div className="stream-copy">
                  <strong>{stream.title}</strong>
                  <span>{stream.detail}</span>
                </div>
                <span className={`stream-badge badge-${stream.status}`}>
                  {model.statusLabels[stream.status]}
                </span>
              </li>
            ))}
          </ol>
          <p className="stream-warning">
            <span aria-hidden="true">⚑</span>
            {model.warning}
          </p>
        </div>

        <div className="model-side">
          <div className="measure-block" data-reveal>
            <h3 className="block-title">{model.economicsTitle}</h3>
            <ul className="measure-list">
              {model.economics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="gate-block" data-reveal>
            <h3 className="block-title gate-title">{model.gateTitle}</h3>
            <p className="gate-lede">{model.gateLede}</p>
            <ul className="gate-list">
              {model.gates.map((gate) => (
                <li key={gate}>{gate}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
