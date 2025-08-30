import React from 'react'
import contact from '../utils/contact'
import "./styles/Contact.scss"
const Contact = () => {
  return (
    <div className='inner contact-inner'>
            <h1 className="tit">contact me
        <span className="star-spin">
          <i className="star">✱</i>
        </span>
      </h1>
      <div className="contact-wrapper">

        <form className="contact-form" >
          <ul className="form-rows">
            <li className="row">
              <label htmlFor="name" className="label">
                이름
              </label>
              <div className="field">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="홍길동"
                  required
                />
              </div>
            </li>

            <li className="row">
              <label htmlFor="email" className="label">
                이메일
              </label>
              <div className="field">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  required
                />
              </div>
            </li>

            <li className="row">
              <label htmlFor="phone" className="label">
                연락처
              </label>
              <div className="field">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="010-1234-5678"
                />
              </div>
            </li>

            <li className="row">
              <label htmlFor="message" className="label">
                문의내용
              </label>
              <div className="field">
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder="문의하실 내용을 자세히 적어주세요."
                  required
                />
              </div>
            </li>

            <li className="row actions">
              <span className="label" aria-hidden="true" />
              <div className="field">
                <button type="submit" className="Button">
                  CONTACT ME
                </button>
              </div>
            </li>
          </ul>
        </form>
        {/* ContactList.jsx */}
        <ul className="contact-list">
          {contact.basics.map(item => (
            <li key={item.label}>
              <strong className="label">
                {/* <span className="material-symbols-outlined">{item.icon}</span> */}
                {item.label}
              </strong>
              <div className="content">
                <a href={item.href} className="value">{item.value}</a>
                {item.hint && <small className="hint">{item.hint}</small>}
              </div>
            </li>
          ))}
          <li className="channels">
            <strong className="label">채널</strong>
            <div className="content chips">
              {contact.channels.map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="chip">
                  {c.label}
                </a>
              ))}
            </div>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Contact