//Budjet controller
const budgetController = (function () {

    //some code 

})();
// UI ctrl
const UIController = (function () {
    //some code
})();
// Global app ctrl
const controller = (function (budgetCtrl, UICtrl) {
    
const ctrlAddItem = function () {
    
        //1. Get the field input data

        //2. Add the item to the budget controller

        //3. Add the item to the UI

        //4. Calculate budget 

        //5. Display budget
        console.log('It works');
}

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if(event.keyCode ===13 || event.which === 13){
            ctrlAddItem();
        } 
    });

})(budgetController, UIController);