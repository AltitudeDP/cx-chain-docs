import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'A Purpose-Built L1 on Avalanche',
    Svg: require('@site/static/img/second-step.svg').default,
    description: (
      <>
        Unlike generic blockchains, CX Chain directly integrates game economies 
        with automated liquidity management, verifiable and audited randomness
      </>
    ),
  },
  {
    title: 'The Community-Owned House',
    Svg: require('@site/static/img/second-step.svg').default,
    description: (
      <>
        CX flips the casino model. Users collectively fund the bankroll and share 
        in the profits. Instead of betting against the house, the community is the house.
      </>
    ),
  },
  {
    title: 'The All-in-One Gaming Hub',
    Svg: require('@site/static/img/second-step.svg').default,
    description: (
      <>
        CX Chain unites all forms of risk-taking on a single platform. One wallet for every dApp,
        from sports betting to casino games, maximizing user convenience and cross-game activity.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
