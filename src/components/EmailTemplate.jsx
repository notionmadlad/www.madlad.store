export default function EmailTemplate({ name, email, reason, details }) {
  return (
    <div>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Reason: {reason}</div>
      <div>Details: {details}</div>
    </div>
  );
}
