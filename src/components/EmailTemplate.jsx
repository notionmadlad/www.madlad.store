export default function EmailTemplate({ name, email, reason, details }) {
  return (
    <div>
      <h1>The Madlad Store - Contact Form</h1>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Reason: {reason}</div>
      <div>Details: {details}</div>
    </div>
  );
}
