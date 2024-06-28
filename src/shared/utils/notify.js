import { ElNotification } from "element-plus";

export const notify = new class {
    success(title, message = '') {
        this.#notify(title, message, 'success');
    }

    warning(title, message = '') {
        this.#notify(title, message, 'warning', 5000);
    }

    info(title, message = '') {
        this.#notify(title, message, 'info');
    }

    error(title, message = '') {
        this.#notify(title, message, 'error', 5000);
    }

    fetchError(message = '') {
        this.error('Произошла ошибка при выполнении запроса!', message);
    }

    #notify(title, message, type, duration = undefined) {
        ElNotification({
            title,
            message,
            type,
			duration,
        });
    }
}
