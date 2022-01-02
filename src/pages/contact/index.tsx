import styles from './styles.module.scss';

export default function Contact() {
  return (
    <>
      <header>
        <title>Contact</title>
      </header>
      <div className={styles.contactContainer}>
        <h1>
          Entre em <span>Contato</span>
        </h1>
        <h2>não seja tímido</h2>

        <p>
          Sinta-se à vontade para entrar em contato comigo. Estou sempre aberto
          para discutir novos projetos, ideias criativas ou oportunidades para
          partilhar conhecimento.
        </p>

        <div>
          <img src='' alt='logo de mapa' />
          <div>
            <h2>Endereço</h2>
            <h2>Brasília, DF</h2>
          </div>
        </div>
        <div>
          <img src='' alt='logo de email' />
          <div>
            <h2>Email</h2>
            <h2>leandrooliveira35@gmail.com</h2>
          </div>
        </div>
        <div>
          <img src='' alt='logo de telefone' />
          <div>
            <h2>Telefone</h2>
            <h2>+55 61 99816-4647</h2>
          </div>
        </div>
        <div>
          <a href=''>
            <img src='' alt='icone do linkedin' />
          </a>
          <a href=''>
            <img src='' alt='icone do github' />
          </a>
          <a href=''>
            <img src='' alt='icone do instagram' />
          </a>
        </div>
        <form>
          <input type='text' placeholder='NOME' />
          <input type='email' placeholder='EMAIL' />
          <input type='text' placeholder='ASSUNTO' />
          <textarea placeholder='MENSAGEM' cols={30} rows={10} />
          <button type='button'>
            ENVIAR MENSAGEM
            <img src='' alt='icone enviar mensagem' />
          </button>
        </form>
      </div>
    </>
  );
}
