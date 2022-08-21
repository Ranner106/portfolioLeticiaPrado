import PropTypes from 'prop-types';
import React from 'react';
import TypeWriter from 'react-typewriter';
import capaLeticia from '../images/leticiaCapa.jpeg';
import '../index.css';
import '../App.css';

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
              <TypeWriter 
              className='hFrase'
              typing={1}
              >
              "A arte é a expressão sublime da alma!"
              </TypeWriter>
          </section>
        
          

          <section >
           

            <button
              type="submit"
              data-testid="login-submit-button"
              onClick={ this.onSaveButtonClick }
              className='buttonCapa bg-blue-900 p-3 w-1/3  mt-4 rounded-lg hover:bg-blue-500'
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