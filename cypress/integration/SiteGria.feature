
Feature: Site de oportunidades da Gria
    Como usuário desejo acesso o portal de oportunidades do site Gria
    Para que possa consultar oportunidades de emprego

Background: Acessar a página de vagas do site Gria
    Given que esteja na página de oportunidades

Scenario: Efetuar pesquisa de vaga por cargo
    When eu preencher o campo cargo
    Then apresentar o resultado da busca por cargo

Scenario: Apresentar mensagem de "Nenhuma vaga corresponde aos seus critérios."
    When eu preencher o campo com cargo não cadastrado
    Then apresentar mensagem de erro ao usuário