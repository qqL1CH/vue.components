<template>
    <div class="w-full border-b border-black">
        <button
            :aria-expanded="isOpen"
            class="flex w-full justify-between transition-all duration-300"
            @click="toggle">
            {{ headerTitle }}

            <svg
                v-if="showIcon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                width="24"
                height="24"
                :class="{ 'rotate-180': isOpen }"
                class="transition-transform duration-300">
                <path d="m6 9 6 6 6-6" />
            </svg>
        </button>

        <transition
            @before-enter="onBeforeEnter"
            @enter="onEnter"
            @leave="onLeave">
            <div
                v-if="isOpen"
                ref="content"
                class="overflow-hidden">
                {{ accordionContent }}
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'

import { AccordionProps } from './accordion.types'

// Определение пропсов
// Define props
defineProps({
    ...AccordionProps,
})

// Локальное состояние для открытия/закрытия
// Local state for open/close behavior
const isOpen = ref(false)

// Метод для переключения состояния
// Method to toggle the state
const toggle = (): void => {
    isOpen.value = !isOpen.value
}

// Обработчик перед началом анимации
// Handler before the animation starts
const onBeforeEnter = (el: HTMLElement) => {
    el.style.height = '0'
    el.style.transition = 'height 0.3s ease'
}

// Обработчик анимации при входе
// Handler for the enter animation
const onEnter = (el: HTMLElement) => {
    // Позволяет браузеру завершить перерисовку до изменения высоты
    // Allows the browser to complete the reflow before changing the height
    requestAnimationFrame(() => {
        el.style.height = `${el.scrollHeight}px`
    })

    // Сброс высоты после завершения анимации
    // Reset height after animation ends
    el.addEventListener(
        'transitionend',
        () => {
            el.style.height = 'auto'
        },
        { once: true }
    )
}

// Обработчик анимации при выходе
// Handler for the leave animation
const onLeave = (el: HTMLElement) => {
    // Устанавливаем высоту для анимации
    // Set height for animation
    el.style.height = `${el.scrollHeight}px`

    // Переход к высоте 0 после следующего кадра
    // Transition to height 0 after the next frame
    requestAnimationFrame(() => {
        el.style.height = '0'
    })
}
</script>
