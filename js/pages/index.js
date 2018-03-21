$(document).ready(function(){
	console.log('index loaded');

  $('body').on('click','.js-login',function(){
		$.post( "inc/login.php", {
			username: $('.js-username').val(),
			password: $('.js-password').val()
	  }, function(response,status){
			console.log(response)
			if(response	== "loggedin"){
				$('.js-login-title').text('logged in')
				$('.js-login-hide').css('opacity','0')
				$('.js-login').text('Logout')
				$('.js-login').addClass('js-logout')
				$('.js-login').removeClass('js-login')
			}
	  });
	})


  $('body').on('click','.js-logout',function(){
		console.log('logout')
		$.post( "inc/logout.php", {
		}, function(response,status){
			console.log(response)
			if(response == 'loggout'){
				$('.js-login-title').text('Login')
				$('.js-login-hide').css('opacity','1')
				$('.js-login').text('Login')
				$('.js-logout').addClass('js-login')
				$('.js-logout').removeClass('js-logout')
			}
		});

	})
});
