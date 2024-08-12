import Swal from 'sweetalert2';
const baseUrl = import.meta.env.VITE_IMG_BASE_URL;

/**@성공알림창 */
export const successAlert = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'success',
    confirmButtonText: '확인',
  });
};

/**@에러알림창 */
export const errorAlert = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'error',
    confirmButtonText: '확인',
  });
};

/**@경고알림창 */
export const warningAlert = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    confirmButtonText: '확인',
  });
};

/**@삭제확인알림창 */
export const confirmDeleteAlert = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: '삭제',
  }).then(result => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Deleted!',
        text: '성공적으로 삭제되었습니다.',
        icon: 'success',
      });
    }
  });
};

/**@회원가입성공알림창 */
export const registerSuccessAlert = (title, text) => {
  Swal.fire({
    title: title || '회원가입 성공 !',
    text: text || '회원가입이 완료되었습니다.',
    imageUrl: `${baseUrl}RegisterSuccess.png`,
    background: '#000000',
    color: '#ffffff',
    confirmButtonText: '확인',
    confirmButtonColor: '#000000',
    confirmButtonTextColor: '#ffffff',
    didOpen: () => {
      const confirmButton = Swal.getConfirmButton();
      confirmButton.style.border = '2px solid #ffffff';
      confirmButton.style.padding = '5px 20px';
      confirmButton.style.borderRadius = '10px';
    },
  });
};
