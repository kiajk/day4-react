import {useState} from "react";
function ProfileForm() {
    const [firstName, setFirst] = useState("");
    const [lastName, setLast] = useState("");
    const [email, setMail] = useState("");
    const [role, setRole] = useState("");
    const fullName = `${firstName} ${lastName}`
    const nameMail = `${fullName} ${email}`
  return (
    <div>
      <h2>Profile Form</h2>
      <input 
      value={firstName}
      onChange={(event) => setFirst(event.target.value)} />
      <input 
      value={lastName}
      onChange={(event) => setLast(event.target.value)} />
      <input 
      value={email}
      onChange={(event) => setMail(event.target.value)} />
      <input 
      value={role}
      onChange={(event) => setRole(event.target.value)} />
      <p>{fullName}</p>
      <p>{email}</p>
      <p>{role}</p>
    </div>
  );
}

export default ProfileForm;