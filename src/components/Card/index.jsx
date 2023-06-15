//import React from 'react'

import maskOb from '../../assets/required-mask.png';
//import maskRe from '../../assets/recommended-mask.png';

import towelOb from '../../assets/required-towel.png';
//import towelRe from '../../assets/recommended-towel.png';

import bebedouroPa from '../../assets/partial-fountain.png';
//import bebedouroLo from '../../assets/forbidden-fountain.png';

//import lockerLi from '../../assets/required-lockerroom.png';
//import lockerPa from '../../assets/partial-lockerroom.png';
import lockerCl from '../../assets/forbidden-lockerroom.png';

import {
    Container,
} from './styles';

export const Card = () => {
  return (
    <Container>
      <div className='cards'>
        <div className='card__item'>
            <span className='status status--open'>Aberto</span>
            <h2 className='unidade'>Vicente Linhares</h2>
            <p className='endereco'>
                Rua Tibúrcio Cavalvante, 1885 - Meireles Fortaleza, CE
            </p>
            <div className='icons'>
                <img src={maskOb} alt="" />
                <img src={towelOb} alt="" />
                <img src={bebedouroPa} alt="" />
                <img src={lockerCl} alt="" />
            </div>
            <div className='horarios'>
                <span className='dia'><strong>Seg. à Sex. Sáb.</strong></span>
                <div className='horas'>
                    <p>06h às 22h</p>
                    <p>09h às 18h</p>
                </div>
            </div>
            <div className='horarios'>
                <span className='dia'><strong>Dom.</strong></span>
                <div className='horas'>
                    <p>Fechada</p>
                </div>
            </div>
        </div>
        
        <div className='card__item'>
            <span className='status status--fechado'>Fechado</span>
            <h2 className='unidade'>Vila Carrão</h2>
            <p className='endereco'>
                Av. Guilherme Giorgi, 1460, Vila Carrão, São Paulo - SP
            </p>
            {/* <div className='icons'>
                <img src={maskOb} alt="" />
                <img src={towelOb} alt="" />
                <img src={bebedouroPa} alt="" />
                <img src={lockerCl} alt="" />
            </div>
            <div className='horarios'>
                <span className='dia'><strong>Seg. à Sex. Sáb.</strong></span>
                <div className='horas'>
                    <p>06h às 22h</p>
                    <p>09h às 18h</p>
                </div>
            </div>
            <div className='horarios'>
                <span className='dia'><strong>Dom.</strong></span>
                <div className='horas'>
                    <p>Fechada</p>
                </div>
            </div> */}
        </div>
        
        <div className='card__item'>
            <span className='status status--open'>Aberto</span>
            <h2 className='unidade'>Vicente Linhares</h2>
            <p className='endereco'>
                Rua Tibúrcio Cavalvante, 1885 - Meireles Fortaleza, CE
            </p>
            <div className='icons'>
                <img src={maskOb} alt="" />
                <img src={towelOb} alt="" />
                <img src={bebedouroPa} alt="" />
                <img src={lockerCl} alt="" />
            </div>
            <div className='horarios'>
                <span className='dia'><strong>Seg. à Sex. Sáb.</strong></span>
                <div className='horas'>
                    <p>06h às 22h</p>
                    <p>09h às 18h</p>
                </div>
            </div>
            <div className='horarios'>
                <span className='dia'><strong>Dom.</strong></span>
                <div className='horas'>
                    <p>Fechada</p>
                </div>
            </div>
        </div>
      </div>
    </Container>
  )
}
