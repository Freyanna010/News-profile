import type { FC } from 'react';

import { useDeleteNewsMutation } from '@/features/news-crud/delete-news';
import { Button } from '@/shared/ui/Button';

interface DeleteNewsButtonProps {
  newsId: number;
  className?: string;
}

const DeleteNewsButton: FC<DeleteNewsButtonProps> = ({ newsId }) => {
  const [deleteNews, { isLoading }] = useDeleteNewsMutation();

  const handleDelete = async () => {
    if (window.confirm('Вы уверены, что хотите удалить эту новость?')) {
      try {
        await deleteNews(newsId).unwrap();
        alert(`Новость с ID ${newsId} удалена! Но сервер не обновляется`);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Button
      text={isLoading ? 'Удаление...' : 'удалить'}
      variant="outlined"
      size="small"
      onClick={handleDelete}
      disabled={isLoading}
    />
  );
};

export default DeleteNewsButton;
