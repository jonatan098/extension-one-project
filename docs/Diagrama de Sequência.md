## Passos da Interação

**Cadastrar Usuário**

1. **Usuário** acessa a tela de cadastro do sistema.
    
2. **Sistema** exibe o formulário de cadastro para o usuário preencher.
    
3. **Usuário** preenche os dados solicitados (nome, e-mail, senha, etc.) e envia o formulário.
    
4. **Sistema** recebe os dados e realiza a validação das informações.
    
5. Após a validação, o **Sistema** envia os dados para o **Banco de Dados** para criação da nova conta.
    
6. O **Banco de Dados** processa o registro e retorna uma confirmação para o **Sistema**.
    
7. **Sistema** exibe uma mensagem de sucesso ao **Usuário**, confirmando o cadastro.

	[![](https://mermaid.ink/img/pako:eNptkj1OAzEQha8ycgXShgO4iMRqKZEQq6VA2wz2JGuxHgf_SECUwyAKTsAJcjHsOJAiuPLz--w3o_FWKKdJSBHoJREr6gyuPdqRIa8N-miU2SBHGAADDCHtP7xx53Zf7N6ESBbP3a4tdousHGiCDrULI1duWCyXvYRrRSEgIESasUAKNYboj1l9pgYJN6_miWDlvE3zoZJz8vjenafcz0SgSxhcsLPUAC0smrmBQDxhllFdXZ4CulbCA85GIxCgt_hOjGC45OH-a_9NocJdu6gp9xSdz4xyvDIV-qw1eVPFP-Vb4oBrsoULqfTtRCMs5ftG51lsy51RxIksjULmrUb_PIqRd5nDFF3_xkrI6BM1wru0noRc4RyyShuN8XeKf6d5CI_OnTRpk-u-raM__IDdD11XsnI?type=png)](https://mermaid.live/edit#pako:eNptkj1OAzEQha8ycgXShgO4iMRqKZEQq6VA2wz2JGuxHgf_SECUwyAKTsAJcjHsOJAiuPLz--w3o_FWKKdJSBHoJREr6gyuPdqRIa8N-miU2SBHGAADDCHtP7xx53Zf7N6ESBbP3a4tdousHGiCDrULI1duWCyXvYRrRSEgIESasUAKNYboj1l9pgYJN6_miWDlvE3zoZJz8vjenafcz0SgSxhcsLPUAC0smrmBQDxhllFdXZ4CulbCA85GIxCgt_hOjGC45OH-a_9NocJdu6gp9xSdz4xyvDIV-qw1eVPFP-Vb4oBrsoULqfTtRCMs5ftG51lsy51RxIksjULmrUb_PIqRd5nDFF3_xkrI6BM1wru0noRc4RyyShuN8XeKf6d5CI_OnTRpk-u-raM__IDdD11XsnI)

**Realizar Login**

1. **Usuário** acessa a tela de login do sistema.
    
2. **Sistema** apresenta o formulário de login para o usuário.
    
3. **Usuário** insere as credenciais (e-mail/usuário e senha) e envia as informações.
    
4. **Sistema** encaminha as credenciais para o **Banco de Dados** para verificação.
    
5. O **Banco de Dados** realiza a checagem das credenciais e retorna o resultado da verificação para o **Sistema**.
    
6. Com base na resposta, o **Sistema** autoriza o acesso ao **Usuário** (ou exibe uma mensagem de erro caso as credenciais sejam inválidas).

	[![](https://mermaid.ink/img/pako:eNptkkFOwzAQRa8y8gqkVuyzqESULtkQhQXKZrCnqUXsCWO7AlU9DGLBQXoxnCYFQcnK0X8z-t_fe6XZkCpUoJdEXlNlsRN0rYf8DSjRajugj9AABmhCOr6L5Uu5HuXahkgOL9WqHOUSvWYwBBUaDq2fuGa5WtUF3GoKAQEhUo8j1HNnZ6TOSFPA-tU-EWxYXOpPNv5g86a131kELWRyIIs2wBUtHdr-Js32gSCQ3-L1z_qqLOCBxG6s_jU7EVW5nHbfU2TxCEIh9THHAIOwm-eOn8cP_scxjtEYNOf7NTbPcAJHPmBHboxAIqwWypFklyaXsR-XtCpuyVGrinw0KM-tav0hc5gi129eqyJKooUSTt1WFRvsQ_5Lg8F4rvGM5BIemd03lG3kHHdT9acXcPgC192xkQ?type=png)](https://mermaid.live/edit#pako:eNptkkFOwzAQRa8y8gqkVuyzqESULtkQhQXKZrCnqUXsCWO7AlU9DGLBQXoxnCYFQcnK0X8z-t_fe6XZkCpUoJdEXlNlsRN0rYf8DSjRajugj9AABmhCOr6L5Uu5HuXahkgOL9WqHOUSvWYwBBUaDq2fuGa5WtUF3GoKAQEhUo8j1HNnZ6TOSFPA-tU-EWxYXOpPNv5g86a131kELWRyIIs2wBUtHdr-Js32gSCQ3-L1z_qqLOCBxG6s_jU7EVW5nHbfU2TxCEIh9THHAIOwm-eOn8cP_scxjtEYNOf7NTbPcAJHPmBHboxAIqwWypFklyaXsR-XtCpuyVGrinw0KM-tav0hc5gi129eqyJKooUSTt1WFRvsQ_5Lg8F4rvGM5BIemd03lG3kHHdT9acXcPgC192xkQ)


**Editar/Remover Anúncio**

1. **Usuário** seleciona um anúncio que deseja editar ou remover.
    
2. **Sistema** solicita os dados do anúncio ao **Banco de Dados** para carregá-lo.
    
3. **Banco de Dados** retorna as informações do anúncio para o **Sistema**.
    
4. **Sistema** exibe os detalhes do anúncio para o **Usuário**.
    
5. **Usuário** decide realizar uma alteração ou solicitar a remoção do anúncio e envia a ação desejada ao **Sistema**.
    
6. **Sistema** processa a solicitação e envia a ordem para o **Banco de Dados** (atualizar ou remover o registro).
    
7. **Banco de Dados** executa a operação e confirma o resultado para o **Sistema**.
    
8. **Sistema** exibe uma mensagem de sucesso ao **Usuário**, indicando que a operação foi realizada.


	[![](https://mermaid.ink/img/pako:eNp1UrtuwzAM_BVCc4LuHgLUdcYuNbwUXliJSYRaoqtH0DbIxxQd-gVduvrHKtl1gCKJJlK8Ox5BHoRkRaIQnl4iWUmVxq1D01pIr0cXtNQ92gANoIfGx-HDaT4v17lcax_I4Hm1KnO5RCsZFEGFin1rJ1yzXK3qAmrqSGq2CGiHH5vCrIBASgd0N44M78lNlDpRqrKAMnqJoLIaKD4RJ1BVLiflBwrs7FVcFmsKWL_qJwJtN-wMDl_DN13A_nld271OPrtAboZyBM9dmjfkn89xzOx5TP67vg0RO_2OmTONdc35HduNTnaA-6lT0nU0khVecG_IetySyc19lOR9UhQLYSiJaJXWfMisVoQdGWpFkUKF7rkVrT0mHMbA9ZuVoggu0kI4jtudKDbY-ZTFXmGYD2SGpPU-MpsTKK-L3f10VONtHX8BJ6_X2w?type=png)](https://mermaid.live/edit#pako:eNp1UrtuwzAM_BVCc4LuHgLUdcYuNbwUXliJSYRaoqtH0DbIxxQd-gVduvrHKtl1gCKJJlK8Ox5BHoRkRaIQnl4iWUmVxq1D01pIr0cXtNQ92gANoIfGx-HDaT4v17lcax_I4Hm1KnO5RCsZFEGFin1rJ1yzXK3qAmrqSGq2CGiHH5vCrIBASgd0N44M78lNlDpRqrKAMnqJoLIaKD4RJ1BVLiflBwrs7FVcFmsKWL_qJwJtN-wMDl_DN13A_nld271OPrtAboZyBM9dmjfkn89xzOx5TP67vg0RO_2OmTONdc35HduNTnaA-6lT0nU0khVecG_IetySyc19lOR9UhQLYSiJaJXWfMisVoQdGWpFkUKF7rkVrT0mHMbA9ZuVoggu0kI4jtudKDbY-ZTFXmGYD2SGpPU-MpsTKK-L3f10VONtHX8BJ6_X2w)

**Buscar Anúncios com Filtros**

1. **Usuário** acessa a tela de busca de anúncios.
    
2. **Usuário** define os filtros desejados (por exemplo: nome, preço, condição do produto) e envia a consulta.
    
3. **Sistema** recebe a requisição com os filtros e consulta o **Banco de Dados** aplicando os critérios informados.
    
4. **Banco de Dados** retorna ao **Sistema** uma lista de anúncios que correspondem aos filtros aplicados.
    
5. **Sistema** exibe os resultados da busca para o **Usuário**.

	[![](https://mermaid.ink/img/pako:eNplUUtOwzAQvcrIK5DSC2RRiRCWbIiyQdlM7WlrEXuCPxKo6mEQi96BbS7GJFGoUL3x5_1mPCel2ZAqVaT3TF5TbfEQ0HUeZA0YktV2QJ-gBYzQxjx-Bcu3cDPBjY2JHN6idTXBFXrNYAhqNBw7v_DazXbblPCgKUYEhEQ9TqRdjhr_UWraW0-wt30KHOHOs6MChkDjhQvQ7I0dL-O3RLC8ssmJ7xeDRgzqqoRH9jH3SWL8-OO1FRfNDmRbTXHorV7Km4R1tVmyXyhx8Ai9tDiXd3WYpVfJlNWW8PRhdwSB5jwBweDakiqUo-DQGvn406TqVDqSo06VcjQY3jrV-bPwUHpoPr1WZQqZChU4H46q3GMf5ZYHg2kd2UqRD39ldn8kMlZKf17GPE_7_Auz7qzT?type=png)](https://mermaid.live/edit#pako:eNplUUtOwzAQvcrIK5DSC2RRiRCWbIiyQdlM7WlrEXuCPxKo6mEQi96BbS7GJFGoUL3x5_1mPCel2ZAqVaT3TF5TbfEQ0HUeZA0YktV2QJ-gBYzQxjx-Bcu3cDPBjY2JHN6idTXBFXrNYAhqNBw7v_DazXbblPCgKUYEhEQ9TqRdjhr_UWraW0-wt30KHOHOs6MChkDjhQvQ7I0dL-O3RLC8ssmJ7xeDRgzqqoRH9jH3SWL8-OO1FRfNDmRbTXHorV7Km4R1tVmyXyhx8Ai9tDiXd3WYpVfJlNWW8PRhdwSB5jwBweDakiqUo-DQGvn406TqVDqSo06VcjQY3jrV-bPwUHpoPr1WZQqZChU4H46q3GMf5ZYHg2kd2UqRD39ldn8kMlZKf17GPE_7_Auz7qzT)

**Criar Anúncio**

1. **Início da Ação:**  
    O Usuário aciona a opção “Criar Anúncio” na interface web.
    
2. **Envio dos Dados:**  
    A interface web envia os dados do anúncio para o controlador do back-end.
    
3. **Validação e Processamento:**  
    O controlador valida as informações recebidas (ex.: verificar se o usuário está autenticado, se os campos obrigatórios foram preenchidos, etc.).
    
4. **Persistência dos Dados:**  
    O controlador realiza a inserção dos dados no Banco de Dados e aguarda a confirmação.
    
5. **Confirmação:**  
    Após a operação, o controlador envia uma resposta de sucesso para a interface, que, por sua vez, exibe uma mensagem de confirmação para o Usuário.

[![](https://mermaid.ink/img/pako:eNptUsFOwzAM_ZUo5-0HcpgEKwcOXEAICfXiJV4XsTjDSRBo2scgDvwD1_4YbquyQukpz_az33N91DY61EYnfC5IFisPDUOoScl3AM7e-gNQVveptO_s4zxzTRl5CxYfcKMgnbGSwLx8HSlz3IOLPE9eAtlYYSXZ1PXqsXKo-khNA2PUslytpsONWu-9BVYY1Jq9PC6o_SI7ip7WCnUixKgreukIrh_sooJfzEmpEKcijXRNyJ4VY-OTVA2Mac3y7zABW88B2s_2o3fnux49ms-bmbzFHJlEbCoWU_rPnHDGHYm1V78RfQEpQSOrkXmjO2VlTeLWxjB20wsdULR5J1dx7HrXOu8wYK2NPB3wU61rOkkdlBzv3shqk7ngQnMszU6bLeyToHJwkMd7-onKX36M8YzReXFzMxxhf4unb6W07XQ?type=png)](https://mermaid.live/edit#pako:eNptUsFOwzAM_ZUo5-0HcpgEKwcOXEAICfXiJV4XsTjDSRBo2scgDvwD1_4YbquyQukpz_az33N91DY61EYnfC5IFisPDUOoScl3AM7e-gNQVveptO_s4zxzTRl5CxYfcKMgnbGSwLx8HSlz3IOLPE9eAtlYYSXZ1PXqsXKo-khNA2PUslytpsONWu-9BVYY1Jq9PC6o_SI7ip7WCnUixKgreukIrh_sooJfzEmpEKcijXRNyJ4VY-OTVA2Mac3y7zABW88B2s_2o3fnux49ms-bmbzFHJlEbCoWU_rPnHDGHYm1V78RfQEpQSOrkXmjO2VlTeLWxjB20wsdULR5J1dx7HrXOu8wYK2NPB3wU61rOkkdlBzv3shqk7ngQnMszU6bLeyToHJwkMd7-onKX36M8YzReXFzMxxhf4unb6W07XQ)

**Realizar Compra**

1. **Clicar no Produto:**
    
    - **Usuário** navega na listagem de produtos e clica sobre o produto de interesse.
        
    - **Sistema** recebe o clique e identifica o produto selecionado.
        
2. **Exibição da Página do Produto:**
    
    - **Sistema** consulta o **Banco de Dados** para obter os detalhes do produto (descrição, imagens, preço, avaliações, etc.).
        
    - **Banco de Dados** retorna os dados do produto para o **Sistema**.
        
    - **Sistema** exibe a página de detalhes do produto ao **Usuário**.
        
3. **Escolha da Ação – Adicionar ao Carrinho ou Comprar Agora:**
    
    - Na página do produto, o **Usuário** escolhe uma das opções:
        
        - **Adicionar ao Carrinho:**
            
            - **Usuário** seleciona "Adicionar ao Carrinho".
                
            - **Sistema** atualiza o carrinho com o produto selecionado e exibe a confirmação.
                
        - **Comprar Agora:**
            
            - **Usuário** seleciona "Comprar Agora".
                
            - **Sistema** inicia o processo de compra imediata.
                
4. **Redirecionamento para a Página de Pagamento:**
    
    - Se a opção escolhida for **Comprar Agora** (ou após finalizar a compra pelo carrinho), o **Sistema** redireciona o **Usuário** para a página de pagamento.
        
5. **Processo de Pagamento:**
    
    - **Usuário** preenche os dados necessários na página de pagamento (informações de endereço, forma de pagamento, dados do cartão etc.).
        
    - **Sistema** recebe as informações e inicia o processamento da transação.
        
    - O **Sistema** pode interagir com um **Gateway de Pagamento** para validar e processar o pagamento.
        
    - Após a validação, o **Gateway de Pagamento** (ou o **Sistema** diretamente) confirma o sucesso da transação.
        
    - **Sistema** exibe uma mensagem de confirmação da compra ao **Usuário**.

	[![](https://mermaid.ink/img/pako:eNqNVMtu20AM_BViTw3g_IAOAWIrMHooIETwpdCF3aXlRaWlurtCmgb5mKCHfoh_rFzrUdtKi_oiQzMczpCgXpRmQypTgb715DTlFmuPbeVAfh36aLXt0EXYAQbYhf745i0v4TLBpQ2RWlyi-TrBa3SawRDkaDgsWdsisbYY6QmfE6_AGltyUfoN7N3t3V2ZwaaxGsExdJ5NH0c7pYD5OoOSBbYRRSFic6AA5oqZr28HoUeK7J0wk6EFLQnuMnj4br8QdMe32iYq_V13tPcQNAsOePx1_Mnw4d6IH3boARk26L11BwbuYcNt5-X1fc0ebwYNbCK8WzDA50En2mQisfWCPYfdsNtb3yKgsSdnl4pzUpl4wJraFHVWHluZsYiaQJf2F2KPZKyn0SB6aXs-w-7Paqe6cXofXSBP00rOmECwl-rG_kDQp9aXPbdFBoVnTSGkZtGj5LgKui2uh_GOkXm-sR-6hYixH9Ytocy_hzsW_e-EhyTyGOrNGIqcqZxaqZbkpTVyoS8JqFQ8UEuVyuSvQf-1UpV7FR7Klspnp1UWfU8r5bmvDyrboyxqpfrOyFWNtz1R5OY-M7czSaLJNXwavgenz8Lrb4cxXNI?type=png)](https://mermaid.live/edit#pako:eNqNVMtu20AM_BViTw3g_IAOAWIrMHooIETwpdCF3aXlRaWlurtCmgb5mKCHfoh_rFzrUdtKi_oiQzMczpCgXpRmQypTgb715DTlFmuPbeVAfh36aLXt0EXYAQbYhf745i0v4TLBpQ2RWlyi-TrBa3SawRDkaDgsWdsisbYY6QmfE6_AGltyUfoN7N3t3V2ZwaaxGsExdJ5NH0c7pYD5OoOSBbYRRSFic6AA5oqZr28HoUeK7J0wk6EFLQnuMnj4br8QdMe32iYq_V13tPcQNAsOePx1_Mnw4d6IH3boARk26L11BwbuYcNt5-X1fc0ebwYNbCK8WzDA50En2mQisfWCPYfdsNtb3yKgsSdnl4pzUpl4wJraFHVWHluZsYiaQJf2F2KPZKyn0SB6aXs-w-7Paqe6cXofXSBP00rOmECwl-rG_kDQp9aXPbdFBoVnTSGkZtGj5LgKui2uh_GOkXm-sR-6hYixH9Ytocy_hzsW_e-EhyTyGOrNGIqcqZxaqZbkpTVyoS8JqFQ8UEuVyuSvQf-1UpV7FR7Klspnp1UWfU8r5bmvDyrboyxqpfrOyFWNtz1R5OY-M7czSaLJNXwavgenz8Lrb4cxXNI)