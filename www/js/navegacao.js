
        //inicia array que vai guardas as telas
        var telas = [];

        // BOTÃO VOLTAR ********************************************************
        //vai gerando o caminho q a pessoa fez adicionando as telas no array durante a navegação
        //quando chega aqui eu tiro a ultima posição do array e volto a tela do historico
        document.addEventListener("backbutton", function (e) {
            if(telas.length > 1){
                if(telas[telas.length - 1] > 1){
                    telas.pop();

                    $('.view').css('display', 'none');
                    $('div[tela="' + telas[telas.length - 1] + '"]').css('display', 'block');
                }else{
                    navigator.app.exitApp();
                }
            }else{
                navigator.app.exitApp();
            }

            e.preventDefault();
        }, false );
