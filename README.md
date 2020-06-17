# desafio-fundamentos-nodejs-gostack
Esse repositório é destinado ao desafio dos fundamentos de nodejs, onde é necessário criar uma aplicação Node para transações bancárias. 
A divisão de pastas segue em : **Models** é como nosso dado vai ser modelado, o arquivo onde vamos definir o tipo de cada campo da aplicação.
Em seguida temos os **Repositories** que é onde vamos modificar, trabalhar com o dado, onde ficam presentes as funções que modificam os dados, como funções de listar, criar por exemplo.
E nos **Services** ficam as regras de negócio da aplicação, que são funções específicas demais para a rota principal trabalhar, onde suas principais tarefas são:
receber uma requisição, chamar um outro e retornar uma resposta. Essa aplicação também segue os princípios de **SoC** (Separation of Concerns),
que consiste em dividir as responsabilidades em arquivos separados para melhor organização, por exemplo. E também é usado o **SRP**(Separaion Responsability Principle),
que consiste em que cada arquivo tem uma única função, por exemplo, um Model não pode ser responsável por modelar e também pelas regras de negócio, já que é responsabilidade dos Services
