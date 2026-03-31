## O que é DevOps
DevOps é uma cultura, conjunto de práticas e ferramentas que une as equipes de desenvolvimento e operações de TI. Seu objetivo é automatizar e integrar processos para aumentar a velocidade, confiabilidade e qualidade na entrega de software, permitindo respostas mais rápidas às necessidades dos clientes.

## O que é SRE
Diferente do DevOps por ser uma implementação mais específica e técnica, focada profundamente na confiabilidade e automação do site, muitas vezes sendo descrita como "uma forma de implementar DevOps"

## Calculadora Simples (Front-end)
Adicionei um front-end simples de uma calculadora usando React via CDN em `public/index.html`.

- **Como abrir:**
	- Abra o arquivo `public/index.html` diretamente no navegador (duplo-clique) ou rode um servidor HTTP local na raiz do projeto e abra `http://localhost:8000/public/index.html`.
	- Exemplos de servidor local (PowerShell):

```powershell
# com Python (se instalado)
python -m http.server 8000

# se tiver o pacote http-server instalado globalmente
npx http-server . -p 8000
```

- **Observação:** é somente o front-end (sem backend); a calculadora usa `eval` para avaliação das expressões inseridas pelos botões.

Se quiser, posso também criar um `package.json` e adicionar scripts para servir o conteúdo com uma ferramenta específica.
