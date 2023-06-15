//import React from 'react'

import maskOb from '../../assets/required-mask.png';
import maskRe from '../../assets/recommended-mask.png';

import towelOb from '../../assets/required-towel.png';
import towelRe from '../../assets/recommended-towel.png';

import bebedouroPa from '../../assets/partial-fountain.png';
import bebedouroLo from '../../assets/forbidden-fountain.png';

import lockerLi from '../../assets/required-lockerroom.png';
import lockerPa from '../../assets/partial-lockerroom.png';
import lockerCl from '../../assets/forbidden-lockerroom.png';

import {
    Container,
} from './styles';

export const Legend = () => {
  return (
    <Container>
      <div className='legendas'>
        <div className='legendas__item'>
            <h3 className='title'>Máscara</h3>
            <div className='icon'>
                <img src={maskOb} alt="Icon uso de máscara obrigatório" />
                <span>Obrigatório</span>
            </div>
            <div className='icon'>
                <img src={maskRe} alt="Icon uso de máscara recomendado" />
                <span>Recomendado</span>
            </div>            
        </div>
        <div className='legendas__item'>
            <h3 className='title'>Toalha</h3>
            <div className='icon'>
                <img src={towelOb} alt="Icon uso de toalha obrigatório" />
                <span>Obrigatório</span>
            </div>
            <div className='icon'>
                <img src={towelRe} alt="Icon uso de toalha recomendado" />
                <span>Recomendado</span>
            </div>            
        </div>
        <div className='legendas__item'>
            <h3 className='title'>Bebedouro</h3>
            <div className='icon'>
                <img src={bebedouroPa} alt="Icon bebedouro parcial" />
                <span>Parcial</span>
            </div>
            <div className='icon'>
                <img src={bebedouroLo} alt="Icon bebedouro proibido" />
                <span>Proibido</span>
            </div>            
        </div>
        <div className='legendas__item'>
            <h3 className='title'>Vestiários</h3>
            <div className='icon'>
                <img src={lockerLi} alt="Icon armário liberado" />
                <span>Liberado</span>
            </div>
            <div className='icon'>
                <img src={lockerPa} alt="Icon armário parcial" />
                <span>Parcial</span>
            </div>
            <div className='icon'>
                <img src={lockerCl} alt="Icon armário fechado" />
                <span>Fechado</span>
            </div>             
        </div>
               
      </div>
    </Container>
  )
}
