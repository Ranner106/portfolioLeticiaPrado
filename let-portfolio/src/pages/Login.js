import PropTypes from 'prop-types';
import React from 'react';
import capaLeticia from '../images/leticiaCapa.jpeg';
import '../index.css';

class Login extends React.Component {
 

  onSaveButtonClick = async () => {
  
    const { history } = this.props;
    history.push('/home');
  }

  

  render() {
    
    return (

      <main className="body" data-testid="page-login">

          <section className='nomeFoto'>
              <div>
                  <h1 className= 'hNome'>
                      Letícia 
                  </h1>

                  <h1 className='hNomePrado'>
                  Prado
                  </h1>

                 </div>
                 <div className='divisoria'>
                   
                 </div>
                 <div className='divImage'>
                 <img className="capaLogin" src={ capaLeticia } alt=" Leticia dançando" />
                 </div>
          </section>

          <section>
              <h1 className='hFrase'>
              A arte é a expressão sublime da alma!
              </h1>
          </section>
        
          

          <section >
           

            <button
              type="submit"
              data-testid="login-submit-button"
              onClick={ this.onSaveButtonClick }
              className="buttonCapa"
            >
              <p className='entrar'>Entrar</p>
            </button>

          </section>
        
      </main>
    );
  }
}

Login.propTypes = {
  history: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
};

export default Login;