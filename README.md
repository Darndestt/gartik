## Sobre

O script irá chutar todas as respostas e acertará caso de perto ou haja alguma dica.

![Gartik](Gartik.png)

## Como usar no celular (Kiwi Browser)

1. Baixe a extensão.
2. Instale o [Kiwi Browser](https://kiwibrowser.com/).
3. Abra o Kiwi Browser e toque nos três pontinhos no canto superior direito.
4. Selecione **Extensões**.
5. Ative o **Modo Desenvolvedor**.
6. Clique em **+ (from .zip/.crx/.user.js)**.
7. Selecione a extensão.
8. Abra o [Gartic Web](https://gartic.net/) e a interface com os botões aparecerá.

## Como usar no PC (sem extensão)

1. Acesse o [Gartic Web](https://gartic.net/).
2. Clique com o botão direito na página e selecione **Inspecionar** ou pressione `Ctrl + Shift + I`.
3. No DevTools, clique no ícone de dispositivos no canto superior esquerdo ou pressione `Ctrl + Shift + M` para ativar o **Toggle Device Toolbar**.
4. Vá para a aba **Console** e Cole o seguinte script, substituindo `[tema]` pelo nome do tema desejado:

    ```javascript
    fetch('https://raw.githubusercontent.com/D4rndest/gartik/main/[tema].js')
      .then(response => response.text())
      .then(scriptText => eval(scriptText))
      .catch(error => console.error(error));
    ```

5. A interface com os botões será exibida.

## Observação

O tempo em milissegundos entre os chutes é baseado no meu ping (que é superior a 100 ms). Se o seu ping for menor e você quiser acelerar os chutes, basta ajustar o valor em milissegundos no script.

## Dúvidas

Discord: **d4rndest**.

## Download das Extensões

[gartik-alimentos](https://github.com/D4rndest/gartik/raw/main/gartik-alimentos.zip)

[gartik-animais](https://github.com/D4rndest/gartik/raw/main/gartik-animais.zip)

[gartik-desenhos](https://github.com/D4rndest/gartik/raw/main/gartik-desenhos.zip)