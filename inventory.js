
var inventoryList = {
    inventory: [],
    addInventory: function(inventoryText) {
        this.inventory.push({
            inventoryText: inventoryText,
            available: false
        });
    },
    changeInventory: function(position, inventoryText) {
        this.inventory[position] = inventoryText;
    },
    deleteInventory: function(position) {
        this.inventory.splice(position, 1);
    },
    toggleAvailable: function(position) {
        var element = this.inventory[position];
        element.available = !element.available;
    },

    toggleAll: function() {
        var totalInventory = this.inventory.length;
        var availableInventory = 0;

        this.inventory.forEach(function(element) {
            if (inventory.available === true) {
                availableInventory++;
            }
        });

        this.inventory.forEach(function(element) {
            if (availableInventory === totalInventory) {
                inventory.available = false;
            } else {
                inventory.available = true;
            }
        });
    }
};

var handlers = {
    addInventory: function() {
        var addInventoryTextInput = document.getElementById('addInventoryTextInput');
        inventoryList.addInventory(addInventoryTextInput.value);
        addInventoryTextInput = '';
        view.displayCurrentInventory();
    },
    changeInventory: function() {
        var changeInventoryPositionInput = document.getElementById('changeInventoryPositionInput');
        var changeInventoryTextInput = document.getElementById('changeInventoryTextInput');
        inventoryList.changeInventory(changeInventoryPositionInput.valueAsNumber, changeInventoryTextInput.value);
        changeInventoryPositionInput.value = '';
        changeInventoryTextInput.value = '';
        view.displayCurrentInventory();
    },
    deleteInventory: function() {
        var deleteInventoryPositionInput = document.getElementById('deleteInventoryPositionInput');
        inventoryList.deleteInventory(deleteInventoryPositionInput.valueAsNumber);
        deleteInventoryPositionInput.value = '';
        view.displayCurrentInventory();
    },
    toggleAvailable: function() {
        var toggleAvailablePositionInput = document.getElementById('toggleAvailablePositionInput');
        inventoryList.toggleAvailable(toggleAvailablePositionInput.valueAsNumber);
        toggleAvailablePositionInput.value = '';
        view.displayCurrentInventory();
    },
    toggleAll: function() {
        inventoryList.toggleAll();
        view.displayCurrentInventory();
    }

};

var view = {
    displayCurrentInventory: function() {
        var inventoryUl = document.querySelectory('ul');
        inventoryUl.innerHTML = '';
       
       inventoryList.inventory.forEach(function(element, position) {
        var inventoryLi = document.createElement('li');
        var inventoryTextWithCompletion = '';
        
        if (inventory.completed === true) {
            inventoryTextWithCompletion = '(Unavailable)' + inventory.inventoryText;
        } else {
            inventoryTextWithCompletion = '' + inventory.inventoryText;
        }
        inventoryLi.id = position;
        inventoryLi.textContent = inventoryTextWithCompletion;
        inventoryLi.appendChild(this.createDeleteButton());
        inventoryUl.appendChild(inventoryLi);
        
       }, this);
    },
    createDeleteButton: function() {
        var deleteButton = document.createElement();
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setUpEventListeners: function () {
        var inventoryUl = document.querySelector('ul');

        inventoryUl.addEventListener('click', function(event) {
            var elementClicked = event.target;

            if (elementClicked.className === 'deleteButton') {
                handlers.deleteInventory(parseInt(elementClicked.parentNode.id));
            }
        });
    }
};

view.setUpEventListeners();
