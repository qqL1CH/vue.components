import type { PropType } from 'vue'

/**
 * Пропсы для компонента Accordion.
 * Props for the Accordion component.
 */
export const AccordionProps = {
    /**
     * Заголовок аккордеона, отображаемый в шапке.
     * Обязательный пропс.
     * Title of the accordion, displayed in the header.
     * Required prop.
     */
    headerTitle: {
        type: String as PropType<string>,
        required: true,
    },

    /**
     * Основное содержимое аккордеона.
     * Обязательный пропс.
     * Main content of the accordion.
     * Required prop.
     */
    accordionContent: {
        type: String as PropType<string>,
        required: true,
    },

    /**
     * Уникальный идентификатор аккордеона.
     * Обязательный пропс.
     * Unique identifier for the accordion.
     * Required prop.
     */
    uniqueId: {
        type: String as PropType<string>,
        required: true,
    },

    /**
     * Флаг для отображения иконки аккордеона.
     * Значение по умолчанию - true.
     * Flag to display the accordion icon.
     * Default value is true.
     */
    showIcon: {
        type: Boolean as PropType<boolean>,
        default: true,
    },
}
