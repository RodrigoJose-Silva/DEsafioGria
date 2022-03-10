import VagasPage from '../../Pages/VagasPage'

const vagas = new VagasPage()

Given(/^que esteja na página de oportunidades$/, () => {
    vagas.abrirSite()
    vagas.checkpointSite('Vagas')
});

When(/^eu preencher o campo cargo$/, () => {
    vagas.campoCargo('QA')
    vagas.buscar()
});

Then(/^apresentar o resultado da busca por cargo$/, () => {
    vagas.resultadoPesquisaValida('QA')
});

When(/^eu preencher o campo com cargo não cadastrado$/, () => {
    vagas.campoCargo('Testador')
    vagas.buscar()
});

Then(/^apresentar mensagem de erro ao usuário$/, () => {
    vagas.resultadoPesquisaInvalida('Nenhuma vaga corresponde aos seus critérios.')
});