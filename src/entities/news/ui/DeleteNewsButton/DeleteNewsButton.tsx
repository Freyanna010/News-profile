import { useState, type FC } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

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
    {
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
        variant="text"
        size="small"
        onClick={onDeleteClick}
        disabled={isLoading}
        icon={<AiOutlineDelete size={20} />}
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
