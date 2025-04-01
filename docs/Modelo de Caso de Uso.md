### Atores Identificados

- **Usuário (Comprador/Vendedor):** A pessoa que utiliza o sistema para comprar ou vender produtos.
- **Sistema:** Responsável por gerenciar os processos de autenticação, manipulação dos anúncios e execução das buscas.

### Casos de Uso Exemplos

1. **Cadastrar Usuário:**
    
    - **Descrição:** Permitir que o usuário se registre no sistema, fornecendo informações básicas (nome, e-mail, senha etc.).
    - **Fluxo Principal:**
        1. O usuário acessa a tela de cadastro.
        2. Preenche os dados solicitados.
        3. O sistema valida as informações e cria a conta.
        
    [![](https://mermaid.ink/img/pako:eNp9kUFOwzAQRa8ymnV7gSyQaNIFC1YUFmAWI3vaWCSeyHaKUNXDVCw4ASfIxZimUYNY4JX__Cf_L88BrTjGAreNvNuaYoZNZQLouX0xuOGGwDGU5CjlKAZfL-ZKzcfUD6foBbrIHGzN4MhJujKlMk_UeEfD1_Ap6ibwYSuxPQ--eSYrJUsJmcBGr1FgpYXUW05pjlwrtI5RIBDs52dHf2oMy-UNrKaGoyinKirA4N3vdNgPp_MrWmNEq39QH_7A66nTJREX2LLS3ulPHs6WwVxzywYLvTqKbwZNOCpHfZaHj2CxyLHnBUbpdzUWW2qSqr5zlLnytIvUXqcdhWeRWbPzWeL9ZXHj_o4_PZWY4w?type=png)](https://mermaid.live/edit#pako:eNp9kUFOwzAQRa8ymnV7gSyQaNIFC1YUFmAWI3vaWCSeyHaKUNXDVCw4ASfIxZimUYNY4JX__Cf_L88BrTjGAreNvNuaYoZNZQLouX0xuOGGwDGU5CjlKAZfL-ZKzcfUD6foBbrIHGzN4MhJujKlMk_UeEfD1_Ap6ibwYSuxPQ--eSYrJUsJmcBGr1FgpYXUW05pjlwrtI5RIBDs52dHf2oMy-UNrKaGoyinKirA4N3vdNgPp_MrWmNEq39QH_7A66nTJREX2LLS3ulPHs6WwVxzywYLvTqKbwZNOCpHfZaHj2CxyLHnBUbpdzUWW2qSqr5zlLnytIvUXqcdhWeRWbPzWeL9ZXHj_o4_PZWY4w)
    
2. **Realizar Login:**
    
    - **Descrição:** Permite a autenticação do usuário para acesso às funcionalidades restritas.
    - **Fluxo Principal:**
        1. O usuário acessa a tela de login.
        2. Insere credenciais (e-mail/usuário e senha).
        3. O sistema verifica as informações e concede acesso.

		[![](https://mermaid.ink/img/pako:eNp1kUFOwzAQRa9izbq9QBZIbZIdrGhZgFmM7GlrkXiqsQNCVQ9TseAguRjTJEolBF75-z_5f82cwLEnKGDX8Ic7oGSzqWw0elYvFjbUoPFk7nkfooXX0Vmrs01df5HAJsREQsYJeYouYEgzVyr3RBJ2weGfQKXAylFKbBxHRz54ns1azVqEr_nYZYpZv-m_-68RmUqa5fLOrKdegyincBXGQnmLNe_9pQkeNX8Aq3_BEH-h9VRpECtYQEvSYvA6uNPVspAP1JKFQq8e5c2CjWfltDg_fkYHRZaOFiDc7Q9Q7LBJqrqjx0xVwL1gO78eMT4z37SOJbM8jHsa1nX-AXuFjYI?type=png)](https://mermaid.live/edit#pako:eNp1kUFOwzAQRa9izbq9QBZIbZIdrGhZgFmM7GlrkXiqsQNCVQ9TseAguRjTJEolBF75-z_5f82cwLEnKGDX8Ic7oGSzqWw0elYvFjbUoPFk7nkfooXX0Vmrs01df5HAJsREQsYJeYouYEgzVyr3RBJ2weGfQKXAylFKbBxHRz54ns1azVqEr_nYZYpZv-m_-68RmUqa5fLOrKdegyincBXGQnmLNe_9pQkeNX8Aq3_BEH-h9VRpECtYQEvSYvA6uNPVspAP1JKFQq8e5c2CjWfltDg_fkYHRZaOFiDc7Q9Q7LBJqrqjx0xVwL1gO78eMT4z37SOJbM8jHsa1nX-AXuFjYI)
1. **Criar Anúncio:**
    
    - **Descrição:** Usuário cadastrado pode criar um anúncio de venda, informando detalhes do produto e classificando seu estado.
    - **Fluxo Principal:**
        1. O usuário logado seleciona a opção “Criar Anúncio”.
        2. Preenche os dados do anúncio (título, descrição, preço, fotos, estado do produto).
        3. O sistema valida os dados e publica o anúncio.

		[![](https://mermaid.ink/img/pako:eNptUb1OwzAQfpXTLV3aF4hQpbbJyFRYwAzX2G0sEl90cYpQ1YepGHgH1rwYlzQNCOHJ5-_X9glztg4T3Jf8lhckER5SE0DX6tngY9N2F_EMJR_IMjSudLnnQHC3kyXX3Wf3wTDbiCeBVei-gqIzgy9Xi_Vvi1qcC3nhBilYtWtALWlUTaKNira-ia4iOFLpLUHP7PkTJ1XOLQ7qdlf6XPEJzhTORBjCzWIoOuDj5WCxWMJ6rDkMmzFeBzCYDv2O3UXVffBASf-h-PCHlI0dbgk4x8pJRd7qM5960GAsXOUMJrq1JK8GTTgrj9rI2_eQYxKldXMUbg8FJnsqG53a2lJ0qaeDUDWd1hSemH9mZ31kub_-6vC552-LZqEO?type=png)](https://mermaid.live/edit#pako:eNptUb1OwzAQfpXTLV3aF4hQpbbJyFRYwAzX2G0sEl90cYpQ1YepGHgH1rwYlzQNCOHJ5-_X9glztg4T3Jf8lhckER5SE0DX6tngY9N2F_EMJR_IMjSudLnnQHC3kyXX3Wf3wTDbiCeBVei-gqIzgy9Xi_Vvi1qcC3nhBilYtWtALWlUTaKNira-ia4iOFLpLUHP7PkTJ1XOLQ7qdlf6XPEJzhTORBjCzWIoOuDj5WCxWMJ6rDkMmzFeBzCYDv2O3UXVffBASf-h-PCHlI0dbgk4x8pJRd7qM5960GAsXOUMJrq1JK8GTTgrj9rI2_eQYxKldXMUbg8FJnsqG53a2lJ0qaeDUDWd1hSemH9mZ31kub_-6vC552-LZqEO)
1. **Editar/Remover Anúncio:**
    
    - **Descrição:** Permite ao usuário gerenciar seus anúncios, atualizando ou removendo-os conforme necessário.

		[![](https://mermaid.ink/img/pako:eNptkk1Ow0AMha9izaYglQtEqFJ_0naDhChsICxM4rYjknHlSYoAcRjEgjuw7cVwkmloRbMaj79nPzvzblLOyERmmfNLukYp4XaSONBv-JCYO1_tPsUy5LzCjMFTTqllh3D5JAPe7L53Xwy9GQm51KLA0O1-9MS9xDy2ZUZaJvYp52sCbPioEceZLVXAFdxQwVuSTjFWxYKgBVr4WkgbaAXHW_aQqRff8ZOWD2VawZjd0kqBIHrbdO3wuMatL0mzW8xthoDBWcdM_1vYTwZYVqp6UwsdPjvhoONrB1t7QM_rjYgw6Bp5Q3LQO2weLi4GMAr70wBU0FhJTJMaH6W6_TW58PfGTRCHDR0GcataVCl5z3DWVj4P8ulpKPTYU7Mjqh4mJOZhxP0Epm8K0v9gM31j73UyMeWaCkpMpMcM5TkxiftQDquSF68uNVEpFfWNcLVam2iJudeo2mRY0sTiSrDobjfo7pn_YtJZWK7aJ9287I9fm57tUg?type=png)](https://mermaid.live/edit#pako:eNptkk1Ow0AMha9izaYglQtEqFJ_0naDhChsICxM4rYjknHlSYoAcRjEgjuw7cVwkmloRbMaj79nPzvzblLOyERmmfNLukYp4XaSONBv-JCYO1_tPsUy5LzCjMFTTqllh3D5JAPe7L53Xwy9GQm51KLA0O1-9MS9xDy2ZUZaJvYp52sCbPioEceZLVXAFdxQwVuSTjFWxYKgBVr4WkgbaAXHW_aQqRff8ZOWD2VawZjd0kqBIHrbdO3wuMatL0mzW8xthoDBWcdM_1vYTwZYVqp6UwsdPjvhoONrB1t7QM_rjYgw6Bp5Q3LQO2weLi4GMAr70wBU0FhJTJMaH6W6_TW58PfGTRCHDR0GcataVCl5z3DWVj4P8ulpKPTYU7Mjqh4mJOZhxP0Epm8K0v9gM31j73UyMeWaCkpMpMcM5TkxiftQDquSF68uNVEpFfWNcLVam2iJudeo2mRY0sTiSrDobjfo7pn_YtJZWK7aJ9287I9fm57tUg)
1. **Buscar Anúncios com Filtros:**
    
    - **Descrição:** Permite ao usuário pesquisar anúncios com a aplicação de filtros por nome, preço e condição do produto.

		[![](https://mermaid.ink/img/pako:eNpVkU1OwzAQha9ieQNI6QUiVKltuoQFhQ2YxdSeNhaxJ_KPAFU9DGLRO7DNxXCdkBSv_OzvvWdrDlySQl7yXUPvsgYX2GMlLEtr8SL4k4_dl9PEQKL3wKjtTt03sdutm18to5fg2MJ2P1Zq8leCv_bW5aXVY4Pp2gLb6SY48tl9bclgwVqH3YkKJskqnbNvxpRVStloH9AAg7bRckwYkSoh6w-9RebQxyaAGuJ78ixHdp3Ye7R1NBPcs2hTfaYzPHyfzWZzthw-lMVqeFcSTPCHqXEKSHUZrf6hG7zo_EPWwvKCG3QGtEoTOJwtgocaDQpepq0C9ya4sMfEQQy0-bSSl8FFLLijuK95uYPGJxVbBQErDXsHZjxtwT4TTRqVDuTu-oHnuR9_Af8nrBc?type=png)](https://mermaid.live/edit#pako:eNpVkU1OwzAQha9ieQNI6QUiVKltuoQFhQ2YxdSeNhaxJ_KPAFU9DGLRO7DNxXCdkBSv_OzvvWdrDlySQl7yXUPvsgYX2GMlLEtr8SL4k4_dl9PEQKL3wKjtTt03sdutm18to5fg2MJ2P1Zq8leCv_bW5aXVY4Pp2gLb6SY48tl9bclgwVqH3YkKJskqnbNvxpRVStloH9AAg7bRckwYkSoh6w-9RebQxyaAGuJ78ixHdp3Ye7R1NBPcs2hTfaYzPHyfzWZzthw-lMVqeFcSTPCHqXEKSHUZrf6hG7zo_EPWwvKCG3QGtEoTOJwtgocaDQpepq0C9ya4sMfEQQy0-bSSl8FFLLijuK95uYPGJxVbBQErDXsHZjxtwT4TTRqVDuTu-oHnuR9_Af8nrBc)


**Realizar Compra:**

1. **Clicar no Produto:**
    - O usuário navega na listagem de produtos e clica sobre o produto de seu interesse.
    
2. **Exibição da Página do Produto:**
    - Ao clicar, o sistema redireciona o usuário para a página de detalhes do produto, onde são exibidas informações como descrição, imagens, preço e avaliações.
    
3. **Escolha da Ação – Adicionar ao Carrinho ou Comprar Agora:**
    - Na página do produto, o usuário tem duas opções:
        - **Adicionar ao Carrinho:** Caso deseje continuar navegando e comprar outros produtos, o usuário adiciona o item ao carrinho.
        - **Comprar Agora:** Se o usuário optar por adquirir o produto imediatamente, seleciona a opção "Comprar Agora".
        
4. **Redirecionamento para a Página de Pagamento:**
    - Após selecionar "Comprar Agora" (ou ao finalizar a compra no carrinho), o sistema encaminha o usuário para a página de pagamento.
    
5. **Processo de Pagamento:**
    - Na página de pagamento, o usuário insere os dados necessários (informações de endereço, forma de pagamento, dados do cartão, etc.).
    - O sistema processa a transação, valida as informações e, se aprovado, confirma a compra.

	[![](https://mermaid.ink/img/pako:eNqFk8Fu2zAMhl-F0CWX9tAcjaFAmqTtpUCwdpfNO3ASYwu1RYOyMwxFH6bYYQ-SFxstO06yrZhPovTzs_iLfDGWHZnMbCv-bkuUFp5WeQD9Fl9y8yl2-zfxDAF3VCB8-CbXAaHyscWCaiCwlbfjPkMj7LqWwRH40JJQjJSbrwPvRnmPmkg1gpDzQtazwhqUAaDL_VvhdUvzHbVYlRTTiZvQE215ejuKllUMuP-1_8lZnzJbOJ_4AsiwRBEfSp4lHHAHsyXXjejpomDB2cRdXSn4n7kJuxkrxFGhN0tE1dlRd0TNFXX2m4T4-N_aGyywpnBS7VpJm6NgcxAk4GSDD1E9B6e3ilPqbZ8qbPUt-O_cJ8EQB9t6i3sVuuFKBDusvMJwYt1NBYHlsPVSn57e6-laRJuF_yhhbCi4vLyGm7EbUrAcH1MDeMf23CTl6upMembrQTI_POF5OE_henQyBbejNwPs1ARUF3apqiS8e1cYdB4m2X0ezIWpSQ3xTqfppU_LTVtSrQOQ6dKhPOcmD6-qQ-2gxx_BmqyVji6McFeUJttiFTXqGoctrTwWgvW022D4zHyMtYlalodheNMMv_4GSBFCKg?type=png)](https://mermaid.live/edit#pako:eNqFk8Fu2zAMhl-F0CWX9tAcjaFAmqTtpUCwdpfNO3ASYwu1RYOyMwxFH6bYYQ-SFxstO06yrZhPovTzs_iLfDGWHZnMbCv-bkuUFp5WeQD9Fl9y8yl2-zfxDAF3VCB8-CbXAaHyscWCaiCwlbfjPkMj7LqWwRH40JJQjJSbrwPvRnmPmkg1gpDzQtazwhqUAaDL_VvhdUvzHbVYlRTTiZvQE215ejuKllUMuP-1_8lZnzJbOJ_4AsiwRBEfSp4lHHAHsyXXjejpomDB2cRdXSn4n7kJuxkrxFGhN0tE1dlRd0TNFXX2m4T4-N_aGyywpnBS7VpJm6NgcxAk4GSDD1E9B6e3ilPqbZ8qbPUt-O_cJ8EQB9t6i3sVuuFKBDusvMJwYt1NBYHlsPVSn57e6-laRJuF_yhhbCi4vLyGm7EbUrAcH1MDeMf23CTl6upMembrQTI_POF5OE_henQyBbejNwPs1ARUF3apqiS8e1cYdB4m2X0ezIWpSQ3xTqfppU_LTVtSrQOQ6dKhPOcmD6-qQ-2gxx_BmqyVji6McFeUJttiFTXqGoctrTwWgvW022D4zHyMtYlalodheNMMv_4GSBFCKg)