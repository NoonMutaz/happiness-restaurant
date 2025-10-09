import { useContext } from "react";
import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// 🌑 خلفية الصفحة
const Wrapper = styled.div`
  background-color: #121212;
  min-height: 100vh;
  padding: 5rem 0;
  color: white;
`;

// 🧾 عنوان الصفحة
const Title = styled.h2`
  text-align: center;
  color: #ffc107;
  margin-bottom: 2rem;
  font-family: 'Baloo 2', cursive;
  font-weight: 900;
`;

const FormCard = styled.div`
  background-color: #1e1e1e;
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(255, 193, 7, 0.2);
  max-width: 600px;
  margin: auto;
`;

const StyledButton = styled(Button)`
  width: 100%;
  background-color: #ffc107;
  color: #121212;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  margin-top: 1rem;

  &:hover {
    background-color: #e0a800;
    box-shadow: 0 0 10px #ffc107;
  }
`;

const CancelButton = styled(Button)`
  width: 100%;
  background-color: #444;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  margin-top: 0.5rem;

  &:hover {
    background-color: #666;
  }
`;

export default function EditProfile() {
  const navigate = useNavigate();
   const { user,setUser } = useContext(UserContext);
    const [showPassword, setShowPassword] = useState(false);

  // نموذج بيانات المستخدم (بشكل مبدئي)
  const [form, setForm] = useState({
    name: user.name || "user",
    email: user.email || "user@example.com",
    phone: user.phone || "0500000000",
    password: user.password || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ تم حفظ التعديلات بنجاح!");
setUser(form);
 
  };

  return (
    <Wrapper>
      <Container>
      <Title>تعديل الملف الشخصي</Title>
        <FormCard>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>الاسم الكامل</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="أدخل الاسم"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>البريد الإلكتروني</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@mail.com"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>رقم الجوال</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="05XXXXXXXX"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>كلمة المرور (اختياري)</Form.Label>
            <InputGroup>
    <Form.Control
      type={showPassword ? "text" : "password"}
      name="password"
      value={form.password}
      onChange={handleChange}
      placeholder="••••••••"
      style={{ color: "black" }}
    />
    <div
    
      onClick={() => setShowPassword(!showPassword)}
      style={{  color:'black',backgroundColor:'white' ,position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', border: 'none' }}
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </div>
  </InputGroup>
            </Form.Group>

            <StyledButton type="submit" >💾 حفظ التعديلات</StyledButton>

            <CancelButton type="button" onClick={() => navigate(-1)}>
              ← إلغاء / رجوع
            </CancelButton>
          </Form>
        </FormCard>
      </Container>
    </Wrapper>
  );
}
