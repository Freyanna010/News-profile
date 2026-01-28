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
  const [isModalСonfirmOpen, setIsModalСonfirmOpen] = useState(false);
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteNews(newsId).unwrap();
      setIsModalSuccessOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  const onDeleteClick = () => setIsModalСonfirmOpen(true);

  const onCancleModalConfirmClick = () => setIsModalСonfirmOpen(false);
  const onOkModalConfirmClick = () => {
    handleDelete();
    setIsModalСonfirmOpen(false);
  };

  const onModalSuccessClick = () => {
    setIsModalSuccessOpen(false);
  };

  return (
    <>
      {/* нужен тултип */}
      <Button
        title="delete"
        variant="text"
        size="small"
        onClick={onDeleteClick}
        disabled={isLoading}
        icon={<AiOutlineDelete size={20} />}
      />

      {isModalСonfirmOpen && (
        <Modal
          isOpen={isModalСonfirmOpen}
          onCancel={onCancleModalConfirmClick}
          onOk={onOkModalConfirmClick}
          okButtonText="Удалить"
          cancelButtonText="Не надо"
        >
          <p>Удалить эту новость?(</p>
        </Modal>
      )}

      {isModalSuccessOpen && (
        <Modal
          isOpen={isModalSuccessOpen}
          onOk={onModalSuccessClick}
          onCancel={onModalSuccessClick}
          isButonCancel={false}
          okButtonText="Ладно"
        >
          <p>Новость {newsId} была удалена, но сервер не обновляет данные💁🏻‍♀️</p>
        </Modal>
      )}
    </>
  );
};

export default DeleteNewsButton;
