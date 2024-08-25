Компонент `Accordion` обладает полной настраиваемостью с точки зрения стилей и функционала. Его легко адаптировать под нужды вашего проекта:

1. **Полная кастомизация стилей**:

   Компонент позволяет свободно настраивать любые стили, чтобы они соответствовали вашему дизайну. Благодаря гибкой структуре, вы можете изменять внешний вид элементов и добавлять собственные классы для персонализации.



2. **Замена иконки**:

   Стандартную SVG-иконку можно легко заменить на вашу собственную. Для этого важно добавить к новой иконке следующие классы:

    ```html
    :class="{ 'rotate-180': isOpen }" class="transition-transform duration-300"
    ```

   Эти классы обеспечивают корректное вращение и плавный переход при открытии и закрытии аккордеона.



3. **Настройка анимации**:

   Скрипты, отвечающие за анимацию, оптимизированы, и их не рекомендуется изменять. Однако, если вы хотите настроить длительность анимации, это можно сделать, изменив значение в следующем участке кода:

    ```js
    const onBeforeEnter = (el: HTMLElement) => {
        el.style.height = '0';
        el.style.transition = 'height 0.3s ease';
    }
    ```

   Увеличивая или уменьшая время, вы можете контролировать скорость появления содержимого.


4. **Отключение иконки**:

   Если отображение иконки не требуется, его можно легко отключить, передав проп `:showIcon="false"`. Этот параметр избавит заголовок аккордеона от стандартной иконки, оставив только текст.


Компонент уже настроен и оптимизирован для использования, что делает его отличным выбором для создания интерактивных пользовательских интерфейсов.



====================================================================================



The Accordion component is fully customizable in terms of styles and functionality. It is easy to adapt it to the needs of your project:

1. **Full customization of styles**:

   The component allows you to freely customize any styles to match your design. Thanks to the flexible structure, you can change the appearance of elements and add your own classes for personalization.


2. **Icon replacement**:

   The standard SVG icon can be easily replaced with your own. To do this, it is important to add the following classes to the new icon:

    ```html
    :class="{ 'rotate-180': isOpen }" class="transition-transform duration-300"
    ```

   These classes ensure correct rotation and smooth transition when opening and closing the accordion.


3. **Animation settings**:

   The scripts responsible for animation are optimized, and it is not recommended to change them. However, if you want to adjust the duration of the animation, you can do this by changing the value in the next section of the code:

    ```js
    const onBeforeEnter = (el: HTMLElement) => {
        el.style.height = '0';
        el.style.transition = 'height 0.3s ease';
    }
    ```

   By increasing or decreasing the time, you can control the speed of content appearance.


4. **Disabling the icon**:

   If the icon display is not required, it can be easily disabled by passing the prop `:showIcon="false"`. This option will remove the accordion title from the standard icon, leaving only the text.



The component is already configured and optimized for use, which makes it an excellent choice for creating interactive user interfaces.