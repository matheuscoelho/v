$(document).ready(function () {
	$(document).on('keyup', '#pesquisar_in', function () {
		var pesquisa = $(this).val();
		jQuery.ajax({
			type: "POST",
			url: "http://vipsio.com.br/admin/api_2/pesquisar_api.php",
			data: {pesquisa:pesquisa, usuario: localStorage.usuario, token: localStorage.token },
			success: function (data) {
				var resultado = JSON.parse(data);
				if(resultado['return'] == 'sucesso'){
					$('#pesquisa_conteudo').html(resultado['html']);
				}else{
					$("#pesquisa_conteudo").html('Nenhum resultado encontrado.');
				}

			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert("Erro crítico, reinicie sua aplicação, se o problema persistir entre em contato com o suporte.");
			}
		});
	});
})