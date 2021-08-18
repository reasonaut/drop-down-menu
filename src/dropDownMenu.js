export const DropDownMenu = (() => {
    function appendMenuAsChild(
        parentElement,
        menuTitle,
        menuId,
        menuItemsArray,
        menuWidth
    ) {
        const dropDownContainer = document.createElement('div');
        const itemContainer = document.createElement('div');
        const menuButton = document.createElement('button');
        dropDownContainer.id = menuId;
        menuButton.innerText = menuTitle;
        menuButton.style.margin = '0 auto';
        menuButton.style.display = 'block';
        dropDownContainer.style.width = menuWidth;
        dropDownContainer.style.backgroundColor = 'gray';

        dropDownContainer.appendChild(menuButton);

        // add list items
        const list = document.createElement('ul');
        list.style.listStyleType = 'none';
        list.style.margin = '0';
        list.style.padding = '0';
        list.style.textAlign = 'center';
        for (let i = 0; i < menuItemsArray.length; i += 1) {
            const listItem = document.createElement('li');
            listItem.innerText = menuItemsArray[i];
            listItem.classList.add('dropDownItem');
            list.appendChild(listItem);
        }
        itemContainer.appendChild(list);
        dropDownContainer.appendChild(itemContainer);
        parentElement.append(dropDownContainer);
        const maxHeight = list.offsetHeight;
        // hide items by default
        itemContainer.style.overflow = 'hidden';
        itemContainer.style.height = '0px';
        itemContainer.style.transition = 'height 0.5s linear 0s';

        menuButton.addEventListener('click', () => {
            if (itemContainer.style.height === '0px') {
                itemContainer.style.height = `${maxHeight}px`;
                return;
            }
            if (itemContainer.style.height === `${maxHeight}px`)
                itemContainer.style.height = '0px';
        });
    }

    return { appendMenuAsChild };
})();
export default { DropDownMenu };
