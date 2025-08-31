import React ,{useState,useEffect}from 'react'
import "./styles/AdminContact.scss"
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/api"; // baseURL + withCredentials: true
const AdminContact = () => {

  const [contacts,setContacts]=useState([])


  useEffect(()=>{

    const fetchData =async()=>{
      try {
        const res = await api.get('/api/contact')

        setContacts(res.data)

      } catch (error) {
        console.log("문의글 불러오기 실패",error)
      }
    }

    fetchData()
  },[])


  return (
<div className="inner admin-contact-inner">
      <h2>📩 문의글 관리</h2>
    <div className="contact-wrapper">


      {contacts.length === 0 ? (
        <p>문의 내역이 없습니다.</p>
      ) : (
        <ul className="contact-list">
          {contacts.map((c) => (
            <li key={c._id} className="contact-item">
              <h3>{c.name} ({c.email})</h3>
              <p><strong>전화번호:</strong> {c.phone}</p>
              <p><strong>메시지:</strong> {c.message}</p>
              <p><strong>상태:</strong> {c.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>

  )
}

export default AdminContact