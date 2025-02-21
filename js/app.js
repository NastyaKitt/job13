document.addEventListener('DOMContentLoaded', function() {
    function setupCarousel(itemsSelector, leftButtonId, rightButtonId) {
        const items = document.querySelectorAll(itemsSelector);
        let currentIndex = 0;

        function updateItems() {
            items.forEach((item, index) => {
                item.classList.toggle('show', index === currentIndex); // Показываем текущий элемент
            });
        }

        document.getElementById(leftButtonId).addEventListener('click', function() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1; // Переход к предыдущему элементу
            updateItems();
        });

        document.getElementById(rightButtonId).addEventListener('click', function() {
            currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0; // Переход к следующему элементу
            updateItems();
        });

        updateItems(); // Показать первый элемент при инициализации
    }

    setupCarousel('.repairItems', 'left', 'right'); // Настройка карусели для repairItems
    setupCarousel('.priceItems', 'left', 'right'); // Настройка карусели для priceItems
    setupCarousel('.reviewItem', 'left', 'right'); // Настройка карусели для reviewItems
    setupCarousel('.usItem', 'left', 'right'); // Настройка карусели для usItems
});


// 

function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
      var range = e.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }

  function mask(e) {
    //console.log('mask',e);
    var matrix = this.placeholder,// .defaultValue
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
      return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
  }
  window.addEventListener("DOMContentLoaded", function() {
    var inputs = [document.querySelector("#tel"), document.querySelector("#tel1")]; // Массив инпутов
    inputs.forEach(function(input) {
        input.addEventListener("input", mask, false); // Добавляем обработчик события на input
        input.focus(); // Устанавливаем фокус
        setCursorPosition(3, input); // Устанавливаем курсор в начало
    });
});


// 


function scrollToRef() {
    const target = document.getElementById('tel');
    target.scrollIntoView({ behavior: 'smooth' });
}

const elements = document.querySelectorAll('.tp1');

elements.forEach(element => {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToRef();
    });
});
// 

let callPolit = document.getElementById('callPolit')
let politWin = document.getElementById('politWin')
let clsPolit = document.getElementById('clsPolit')

callPolit.addEventListener('click', function(){
    politWin.classList.add('show')
})
clsPolit.addEventListener('click', function(){
    politWin.classList.remove('show')
})