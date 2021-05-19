$(function () {
	$('#admin__btn').click(function () {
	  $('#modal-1').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close').click(function () {
	  $('#modal-1').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#modal-1').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#modal-1').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
});

$(function () {
	$('.burger').click(function () {
	  $('.menu__section').toggle('burger__active');
	});

    $('.admin__btn').click(function () {
        $('.menu__section').removeClass('burger__active');
      });
});





var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999) 999-99-99")
im.mask(selector);

new JustValidate('.form',{
    rules: {
        name: {
            required: true,
            minLength:2,
            maxLength: 40
        },
        tel: {
            required: true,
            function: (name,value) => {
                const phone = selector.inputmask.unmaskedvalue();
                
                return Number(phone) && phone.length === 10
            },
        },
        mail: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minLength:2,
            maxLength: 40
        },
    },
    messages: {
        name: {
            required: 'Как вас зовут?'
        },
        tel: {
            required: 'Укажите ваш телефон'
        },
        mail: {
            required: 'Укажите ваш e-mail'
        }
    },
})

function srav(){    
    var password = document.getElementById('password');  
    var password2 = document.getElementById('password2');
    if (password.value === password2.value){
      alert ("Спасибо за ваше обращение!");
    }else{
        alert ('Пароли не совпадают')
    }
  }