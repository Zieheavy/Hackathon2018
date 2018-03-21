$(document).ready(function(){
	console.log('index loaded');
	console.log();
	if(getSession().loggedin == 1){
		loginStyling();
	}

  $('.js-password').bind('keypress', function(e) {
    if(e.keyCode==13){
			login()
    }
  });

  $('.js-register-repeat-password').bind('keypress', function(e) {
    if(e.keyCode==13){
			register();
    }
  });

  $('body').on('click','.js-login',function(){
		login()
	})


  $('body').on('click','.js-logout',function(){
		console.log('logout')
		$.post( "inc/logout.php", {
		}, function(response,status){
			console.log(response)
		  getSession();
			if(response == 'loggout'){
				console.log('logout')
				$('.js-login-title').text('Login')
				$('.js-login-hide').css('opacity','1')
				$('.js-logout').text('Login')
				$('.js-logout').addClass('js-login')
				$('.js-logout').removeClass('js-logout')
			}
		});
	})

	$('.js-register-close').on('click',function(){
		console.log('register-close')
	})

	$('.js-register-open').on('click',function(){
		resetRegister();
	})

	$('.js-register').on('click',function(){
		register();
	})

	function register(){
		var count = 0;
		var alertMessage = "";
		var username = $('.js-register-username').val();
		var password = $('.js-register-password').val();
		var repeatPassword = $('.js-register-repeat-password').val();
		if(username != ""){
			count++;
		}else{
			$('.js-register-username').css("border","2px solid red")
			alertMessage += "- Please fill in a username<br>"
		}

		if (password != "") {
			count++;
		}else{
			$('.js-register-password').css("border","2px solid red")
			alertMessage += "- Please fill in a password<br>"
		}

		if (repeatPassword != "") {
			count++;
		}else{
			$('.js-register-repeat-password').css("border","2px solid red")
			alertMessage += "- Please repeat your password<br>"
		}

		if(count == 3){
			resetRegister()
			if(username.indexOf('@') == -1 || username.indexOf('.') == -1){
				alertMessage += "- you did not enter a valid email<br>"
				$('.js-register-username').css("border","2px solid red")
				$('.js-register-error').removeClass('clear')
			}
			if(password.length > 3){
				if(password == repeatPassword){
					if(username.indexOf('@') != -1 || username.indexOf('.') != -1){
						$.post( "inc/register.php", {
							username: $('.js-register-username').val(),
							password: $('.js-register-password').val()
					  }, function(response,status){
							console.log(response)
							if(response	== "succes"){
	   						$('#exampleModal').modal('toggle');
								loginStyling()
							}
					  });
					}
				}else{
					alertMessage += "- your passwords are not the same<br>"
					$('.js-register-repeat-password').css("border","2px solid red")
					$('.js-register-password').css("border","2px solid red")
					$('.js-register-error').removeClass('clear')
				}
			}else{
				alertMessage += "- your passwords is not long enough<br>"
				$('.js-register-repeat-password').css("border","2px solid red")
				$('.js-register-password').css("border","2px solid red")
				$('.js-register-error').removeClass('clear')
			}
			$('.js-register-error').html (alertMessage)
		}else{
			$('.js-register-error').removeClass('clear')
			$('.js-register-error').html (alertMessage)
		}
	}

	function resetRegister(){
		$('.js-register-error').addClass('clear')
		$('.js-register-username').css("border","1px solid #ced4da")
		$('.js-register-password').css("border","1px solid #ced4da")
		$('.js-register-repeat-password').css("border","1px solid #ced4da")
	}

	function login(){
		$.post( "inc/login.php", {
			username: $('.js-username').val(),
			password: $('.js-password').val()
	  }, function(response,status){
			console.log(response)
			getSession();
			if(response	== "loggedin"){
		  getSession();
				loginStyling();
			}
	  });
	}

	function loginStyling(){
		$('.js-login-title').text('logged in')
		$('.js-login-hide').css('opacity','0')
		$('.js-login').text('Logout')
		$('.js-login').addClass('js-logout')
		$('.js-login').removeClass('js-login')
	}

});
