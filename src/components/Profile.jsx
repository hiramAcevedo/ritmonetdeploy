// src/components/Profile.jsx

const Profile = () => {
    const user = {
      name: 'Juan Pérez',
      email: 'juan.perez@example.com',
      address: 'Calle Falsa 123',
    };
  
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Tu Perfil</h1>
        <p className="mb-4">
          <strong>Nombre:</strong> {user.name}
        </p>
        <p className="mb-4">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="mb-4">
          <strong>Dirección:</strong> {user.address}
        </p>
      </div>
    );
  };
  
  export default Profile;
  