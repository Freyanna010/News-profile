import { useGetUserQuery } from '@/entities/user/api/userApi';
import { Card } from '@/shared/ui/Card';

const UserCard = () => {
  const { data: user, isLoading, error } = useGetUserQuery(1);

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка при загрузке пользователя</p>;

  return (
    <div>
      <Card>
        <h2>{user?.name}</h2>
        <p> email: {user?.email}</p>
        <p> phone: {user?.phone}</p>
      </Card>
    </div>
  );
};

export default UserCard;
