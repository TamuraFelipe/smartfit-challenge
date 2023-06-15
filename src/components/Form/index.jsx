//import React from 'react'

import clock from '../../assets/icon-hour.png';
import { Button } from '../Button';

import {
    Container,
} from './styles';

export const Form = () => {
  return (
    <Container>
      <form className='form'>
        <div className='form__title'>
            <img src={clock} alt="Clock icon" />
            <span>Horário</span>
        </div>
        <div className='form__question'>
            <span>Qual período quer treinar?</span>
        </div>
        <div className="radio-container">
            <label htmlFor="manha">
                <input type="radio" id="manha" name="periodo" />
                <div className="custom-radio">
                <span></span>
                </div>
                <span>Manhã</span>
            </label>
            <span>06:00 às 12:00</span>
        </div>
        <div className="radio-container">
            <label htmlFor="tarde">
                <input type="radio" id="tarde" name="periodo" />
                <div className="custom-radio">
                <span></span>
                </div>
                <span>Tarde</span>
            </label>
            <span>12:01 às 18:00</span>
        </div>
        <div className="radio-container">
            <label htmlFor="noite">
                <input type="radio" id="noite" name="periodo" />
                <div className="custom-radio">
                <span></span>
                </div>
                <span>Noite</span>
            </label>
            <span>18:01 às 23:00</span>
        </div>

        <div className="checkbox-container">
            <label htmlFor="fechadas">
                <input type="checkbox" id="fechadas" name="fechadas" />
                <div className="custom-checkbox">
                <span></span>
                </div>
                <span>Exibir unidades fechadas</span>
            </label>
            <span>Resultados encontrados: <strong>0</strong></span>
        </div>
        
        <div className='btn-container'>
            <Button title="Encontar unidade" btnStyle="yellow"/>
            <Button title="Limpar" btnStyle="white"/>
        </div>
      </form>
    </Container>
  )
  
}
