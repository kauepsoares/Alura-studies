import Button from "../Button";
import Relogio from "./Relogio";
import style from './Cronometer.module.scss';

export default function Cronometro() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um item e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Button>
        Começar!
      </Button>
    </div>
  )
}