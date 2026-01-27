import { useState, type FC } from 'react';

import { useDeleteNewsMutation } from '@/features/news-crud/delete-news';
import { Button } from '@/shared/ui/Button';
import Modal from '@/shared/ui/Modal';

interface DeleteNewsButtonProps {
  newsId: number;
  className?: string;
}

const DeleteNewsButton: FC<DeleteNewsButtonProps> = ({ newsId }) => {
  const [deleteNews, { isLoading }] = useDeleteNewsMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const onDeleteClick = () => setIsModalOpen(true);
  const onCancleModalClick = () => setIsModalOpen(false);
  const onOkModalClick = () => {
    handleDelete();
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        text={isLoading ? 'Удаление...' : 'удалить'}
        variant="outlined"
        size="small"
        onClick={onDeleteClick}
        disabled={isLoading}
      />

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onCancel={onCancleModalClick}
          onOk={onOkModalClick}
          okButtonText="Удалить"
          cancelButtonText="Не надо"
        >
          <p>Удалить эту новость?(</p>
        </Modal>
      )}
    </>
  );
};

export default DeleteNewsButton;
