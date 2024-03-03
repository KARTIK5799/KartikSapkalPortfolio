import style from './PlanetSetup.module.css'
import pl1 from '../../../assets/1.png'
import pl2 from '../../../assets/2.png'
import pl3 from '../../../assets/3.png'
import pl4 from '../../../assets/4.png'
import pl5 from '../../../assets/5.png'
import pl6 from '../../../assets/6.png'
import pl7 from '../../../assets/7.png'
import pl8 from '../../../assets/8.png'
import pl9 from '../../../assets/9.png'

const PlanetSetup = () => {
  return (
    <div>
      <div className={style.planets}>
        <img src={pl8} alt="pl8" className={style.Planet8}/>
        <img src={pl9} alt="pl8" className={style.Planet9}/>
        <img src={pl7} alt="pl7" className={style.Planet7}/>
        <img src={pl6} alt="pl6" className={style.Planet6}/>
        <img src={pl4} alt="pl4" className={style.Planet4}/>
        <img src={pl3} alt="pl3" className={style.Planet3}/>
        <img src={pl2} alt="pl2" className={style.Planet2}/>
        <img src={pl5} alt="pl5" className={style.Planet5}/>
        <img src={pl1} alt="pl1" className={style.Planet1}/>

      </div>
    </div>
  )
}

export default PlanetSetup
