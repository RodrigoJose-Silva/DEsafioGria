
class VagasPage {

    abrirSite() {
        //abrir o site
        cy.visit('/')
        //dimensão da tela
        cy.viewport(1440, 900)
        //efetuado o aceite de Cookies
        cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained jss5 MuiButton-containedPrimary"]').click();
    }

    checkpointSite(mensagemEsperada) {
        //validando do texto Vagas através do elemento
        cy.get('h1[class*="MuiTypography-h3"]').should('have.text', mensagemEsperada)
    }

    campoCargo(funcao) {
        //informando o cargo
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type(funcao)
    }

    buscar() {
        //submetendo a pesquisa
        cy.get('div[title="Buscar"]').click()
    }

    resultadoPesquisaValida(mensagemEsperada) {
        //validando o resultado da pesquisa
        cy.get('abbr[title^="Analista"]').should('contain', mensagemEsperada)
    }

    resultadoPesquisaInvalida() {
        //validando mensagem de erro apresentada ao usuário
        cy.get('p[class="MuiTypography-root MuiTypography-body1"]')
    }
}

export default VagasPage;