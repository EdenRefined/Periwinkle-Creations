
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

        for (var i = 0; i < totalInventory; i++) {
            if (this.inventory[i].available === true) {
                availableInventory++;
            }
        }

        if (availableInventory === totalInventory) {
            for (var i = 0; i < totalInventory; i++) {
                this.inventory[i].available = false;
            }
        } else {
            for (var i = 0; i < totalInventory; i++) {
                this.inventory[i].available = true;
            }
        }
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
        for (var i = 0; i < inventoryList.element.length; i++) {
            var inventoryLi = document.createElement('li');
            var inventory = inventoryList.element[i];
            var inventoryTextWithCompletion = '';
            
            if (inventory.completed === true) {
                inventoryTextWithCompletion = '(Unavailable)' + inventory.inventoryText;
            } else {
                inventoryTextWithCompletion = '' + inventory.inventoryText;
            }
            
            inventoryLi.textContent = inventoryTextWithCompletion;
            inventoryUl.appendChild(inventoryLi);
        }
    },
    createDeleteButton: function() {
        var deleteButton = document.createElement();
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    }
};


