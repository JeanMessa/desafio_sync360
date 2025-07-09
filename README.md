<h3>Como Testar</h3>
<ol>
  <li>
    Instale o <a href="https://www.wampserver.com/en/">WAMP</a> ou outro servidor apache, PHP e MySQL de sua preferência.
  </li>
  <li>
    Vá até a pasta do seu servidor apache no caso do WAMP: 
    
    cd /c/wamp64/www
  </li>
  </li>
  <li>Clone usando: 
    
    git clone https://github.com/JeanMessa/desafio_sync360.git
  </li>
  <li>
    Instale o <a href="https://nodejs.org/en/download">Node.js</a>.
  </li>
  <li>
    Instale o Angular CLI:

    npm install -g @angular/cli
  </li>
  <li>
    Execute o WAMP ou outro servidor apache, PHP e MySQL.
  </li>
  <li>
    Importe o banco de dados:
    <ul>
      <li>
        Abra o <a href="http://localhost/phpmyadmin/index.php">PHPMyAdmin</a>. 
      </li>
      <li>
        Clique em novo, em nome do banco de dados escreva sync360 e clique em criar.
      </li>
      <li>
        Clique em importar, depois em escolher arquivo, selecione o arquivo sync360.sql na raiz desse projeto e clique no botão importar.
      </li>
    </ul>
  </li>
  <li>
    Inicie o servidor do frontend:

    cd desafio_sync360/frontend
    npm install
    npm start
  </li>
  <li>
    Agora o projeto estará rodando em: <a href="http://localhost:4200/">http://localhost:4200/</a>  
  </li>
</ol>
