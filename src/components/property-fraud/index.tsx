import { FunctionComponent, useRef } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, PlayIcon } from '@heroicons/react/solid'

import styles from './styles.module.scss';

const carouselData = [
  {
    id: 1,
    title: 'Real Victims of Fraud',
    text: 'Title & property fraud is a growing risk to homeowners and landlords. This short video was designed to create awareness of how serious and real the issue is. We also highlight how simple these frauds were conducted. The devastation to homeowners affected by title fraud cannot be underestimated as this short video will demonstrate.',
    type: 'video',
    img: '/carousel-1.png'
  },
  {
    id: 2,
    title: '​Luton clergyman loses his home',
    text: 'Reverend Mike Hall told the BBC how his house had been sold without his knowledge via identity theft. He was away at the time and alerted by neighbours that someone was inside the property. Reverend Mike Hall subsequently attended the property to find the new owners renovating his property. ',
    type: 'image',
    img: '/carousel-2.png'
  },
  {
    id: 3,
    title: 'Candy brothers fall for pensioners’ £6m sting',
    text: 'The Candy brothers, two of London’s best known luxury property developers, were swindled by four pensioners who sold them a 47-acre Berkshire estate that they did not own. The brothers have emerged as the victims of an audacious quartet of fraudsters in their sixties and early seventies who were jailed for their part in the scam.',
    type: 'image',
    img: '/carousel-3.png'
  },
  {
    id: 4,
    title: 'A Model £1.2m Fraud',
    text: 'A model and her mother who rented a high value property in Kensington have been jailed after the mother brazenly impersonated the identity of the property owner, a deceased Kensington landlady to defraud more than £1.2m from a lender who advanced funds to remortgage the property.',
    type: 'image',
    img: '/family.jpg'
  },
  {
    id: 5,
    title: 'Real Victims of Fraud',
    text: 'Title & property fraud is a growing risk to homeowners and landlords. This short video was designed to create awareness of how serious and real the issue is. We also highlight how simple these frauds were conducted. The devastation to homeowners affected by title fraud cannot be underestimated as this short video will demonstrate.',
    type: 'image',
    img: '/carousel-1.png'
  },
];

const PropertyFraud: FunctionComponent = () => {
  const carouselRef = useRef(null);

  const handleSlideButton = (dir: string) => {
    dir === 'right' ? carouselRef.current.scrollLeft += 374 : carouselRef.current.scrollLeft -= 374;
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles['inner-wrapper']}>
        <h2><span>Victims</span> of Property Fraud​</h2>
        <div className={styles.line} />
        <div>
          <p>
            Property & title fraud is an invisible digital threat that 
            affects everyone. Here are just a few examples.
          </p>
        </div>
      </div>
      <div className={styles['carousel-wrapper']}>
        <div className={styles.carousel} ref={carouselRef}>
          <div className={styles['carousel-inner']}>
            {carouselData.map(item => (
              <div key={item.id}>
                <div className={styles.cover}>
                  {item.type === 'video' && (
                    <button>
                      <img className={styles.play} src="/play-icon.svg" alt="play-icon" />
                    </button>
                  )}
                  <img src={item.img} alt={item.title} />
                </div>
                <div className={styles.text}>
                  <h3>{item.title}</h3>
                  {item.type === 'video' && (
                    <span>Watch our video</span>
                  )}
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles['carousel-nav']}>
            <button onClick={() => handleSlideButton('left')}>
              <ArrowLeftIcon className={styles.arrow} />
            </button>
            <button onClick={() => handleSlideButton('right')}>
              <ArrowRightIcon className={styles.arrow} />
            </button>
          </div>
      </div>

    </section>
  )
}

export default PropertyFraud;
