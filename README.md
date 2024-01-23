  ![image](https://github.com/GabrielSouzaCandido/Wordle/assets/57289760/ba1d371c-bb61-40a5-a221-09bff7291981)


# Teyvat Wordle

Recriação do jogo Wordle de Josh Wardle, com adição de modos e funcionalidades, situado em um novo universo contextual ao qual as palavras e dicas se referem.

O jogo foi desenvolvido utilizando as tecnologias React para o frontend e ASP.NET Core para o backend.

## Funcionalidades

- **Tentativas Válidas:** Consiste em considerar uma tentativa válida o nome de personagens existentes com a mesma quantidade de caracteres da palavra correta.

- **Dicas Detalhadas:** A cada erro inserido pelo usuário, uma nova dica é revelada. Cada palavra vem acompanhada de dicas detalhadas sobre a origem do personagem, sua raridade e as armas associadas a ele.

- **Tentativas Limitadas:** Após três tentativas sem sucesso, a palavra resposta é exibida, juntamente com as dicas relacionadas a ela.

- **Consistência:** A palavra a ser descoberta não desaparece em atualizações de páginas e só é resetada por meio da reinicialização do projeto.
 
- **Cena de Vitória:** Caso a palavra inserida seja igual a palavra a ser descoberta confettis e sons de vitória são disparados para o usuário.

## Vocabulário

Caso você deseje ter acesso as palavras, dicas e vocabulário do jogo acesse `src/assets/Words.txt`
