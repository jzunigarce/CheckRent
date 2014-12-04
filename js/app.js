Lungo.init({
	'name': 'CheckRent',
	'version': '0.0.1'
});

Lungo.ready(function(){

	$$('#btnSave').on('tap', function(){
		Lungo.Service.async = true;
		Lungo.Service.Settings.error = function(type, xhr){
			console.log('Ocurrió un error al realizar la petición' + xhr);
		};
		Lungo.Service.Settings.crossDomine = false;
		Lungo.Service.Settings.timeout = 0;

		var name = document.getElementById('nombre');
		var apPaterno = document.getElementById('apPaterno');
		var apMaterno = document.getElementById('apMaterno');
		var email = document.getElementById('email');
		var usuario = document.getElementById('usuario');
		var passw = document.getElementById('passw');
		var url = 'cUser.php';
		var data = {'name' : name.value,
			'ap_paterno': apPaterno.value,
			'ap_materno' : apMaterno.value,
			'email': email.value,
			'usuario' : usuario.value,
			'passw': passw.value
		};

		var response = function(data){
			console.log(data);
		};
		Lungo.Service.post(url, data, response, 'JSON');
	});
	/*if(sessionStorage.getItem('user'))
		Lungo.Router.section('main');
	$$('#btnLogin').on('tap', function(){
		var user = $$('#usuario').val();
		sessionStorage['user'] = user;
		Lungo.Router.section('main');
		$$('#login-user').html('Bienvenido ' + sessionStorage.getItem('user'));
	});
	$$('#close-sesion').on('tap', function(){
		sessionStorage.clear();
		Lungo.Router.section('login-main');
	});*/
	
});