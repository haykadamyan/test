import { FunctionComponent } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, PlayIcon } from '@heroicons/react/solid'

import styles from './styles.module.scss';

const carouselData = [
  {
    id: 1,
    title: 'Real Victims of Fraud',
    text: 'Title & property fraud is a growing risk to homeowners and landlords. This short video was designed to create awareness of how serious and real the issue is. We also highlight how simple these frauds were conducted. The devastation to homeowners affected by title fraud cannot be underestimated as this short video will demonstrate.',
    type: 'video',
    img: '/carousel-image-1.png'
  },
  {
    id: 2,
    title: 'Real Victims of Fraud',
    text: 'Title & property fraud is a growing risk to homeowners and landlords. This short video was designed to create awareness of how serious and real the issue is. We also highlight how simple these frauds were conducted. The devastation to homeowners affected by title fraud cannot be underestimated as this short video will demonstrate.',
    type: 'image',
    img: '/carousel-image-1.png'
  },
  {
    id: 3,
    title: 'Real Victims of Fraud',
    text: 'Title & property fraud is a growing risk to homeowners and landlords. This short video was designed to create awareness of how serious and real the issue is. We also highlight how simple these frauds were conducted. The devastation to homeowners affected by title fraud cannot be underestimated as this short video will demonstrate.',
    type: 'image',
    img: '/carousel-image-1.png'
  },
  {
    id: 4,
    title: 'Real Victims of Fraud',
    text: 'Title & property fraud is a growing risk to homeowners and landlords. This short video was designed to create awareness of how serious and real the issue is. We also highlight how simple these frauds were conducted. The devastation to homeowners affected by title fraud cannot be underestimated as this short video will demonstrate.',
    type: 'image',
    img: '/carousel-image-1.png'
  },
  {
    id: 5,
    title: 'Real Victims of Fraud',
    text: 'Title & property fraud is a growing risk to homeowners and landlords. This short video was designed to create awareness of how serious and real the issue is. We also highlight how simple these frauds were conducted. The devastation to homeowners affected by title fraud cannot be underestimated as this short video will demonstrate.',
    type: 'image',
    img: '/carousel-image-1.png'
  },
];

const PropertyFraud: FunctionComponent = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles['inner-wrapper']}>
        <h2><span>Victims</span> of Property Fraud​</h2>
        <div>
          <p>
            Property & title fraud is an invisible digital threat that 
            affects everyone. Here are just a few examples.
          </p>
          <div className={styles['carousel-nav']}>
            <button>
              <ArrowLeftIcon className={styles.arrow} />
            </button>
            <button>
              <ArrowRightIcon className={styles.arrow} />
            </button>
          </div>
        </div>
        <div className={styles.carousel}>
          {carouselData.map(item => (
            <div key={item.id}>
              <div className={styles.cover}>
                {item.type === 'video' && (
                  <div>
                    <PlayIcon className={styles.play} />
                  </div>
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
    </section>
  )
}

export default PropertyFraud;
