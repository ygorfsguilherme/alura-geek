export const closeModal = () => {
	const close = document.querySelector('[data-modal="close"]');
	if (close) {
		close.addEventListener('click', () => {
			document.querySelector('.modal__container').style.display = 'none'
		})
	}
}
