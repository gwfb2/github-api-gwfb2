import React, {useState} from 'react'
import * as S from './styled'
import useGithub from '../../hooks/githubHooks'

const Header = () => {
    const { getUser } = useGithub();
    const [ usernameForSearch, setUsernameForSearch ] = useState()
    const submitGetUser = () => {
        if (!usernameForSearch) return alert('Entrada inválida!');
        return getUser(usernameForSearch);
    }


  return (
    <header>
        <S.Wrapper>
            <input type='text' placeholder='Insira o username'
              onChange = {(event) => setUsernameForSearch(event.target.value)}
              onKeyUp = {(event) =>
                {if (event.key == 'Enter') {
                  submitGetUser();
                } return;
              }}
              />
            <button type='submit' onClick={submitGetUser}>
              <span>Buscar</span>
            </button>
        </S.Wrapper>
    </header>
  )
}

export default Header;