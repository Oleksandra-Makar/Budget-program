//Budjet controller
const budgetController = (function () {

    let Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    let Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

   

    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };


})();



// UI ctrl
const UIController = (function () {

    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
    }

    return {
        getinput: function () {
            return {
                // will be either inc or exp
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value

            };
        }, 
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();



// Global app ctrl
const controller = (function (budgetCtrl, UICtrl) {
    
    let setupEventListeners = function () {
        let DOM = UIController.getDOMstrings();

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };


    
    const ctrlAddItem = function () {

        //1. Get the field input data
        let input = UIController.getinput();
        //2. Add the item to the budget controller

        //3. Add the item to the UI

        //4. Calculate budget 

        //5. Display budget
      
    }

    return {
        init: function() {
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();