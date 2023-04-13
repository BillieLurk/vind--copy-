import React from 'react';

import Hero from './header/hero/Hero';
import TextAndImage from './textAndImage/TextAndImage';
import SimpleHeader from './header/SimpleHeader';
import Ingress from './textComponents/Ingress';
import TextBlock from './textComponents/TextBlock';
import Stories from './stories/StoryGallery';
import Greeting from './textComponents/Greeting';
import LinkBlock from './linkBlock/LinkBlock';
import Footer from './footer/Footer';
import PreambleText from './textComponents/PreambleText';
import BodyText from './textComponents/BodyText';
import CallToAction from './callToActions/CallToAction';
import Header from './header/Header';
import Owners from './owners/Owners';
import Timeline from './timeline/Timeline';
import TextBlockExtraInfo from './textComponents/TextBlockExtraInfo';
import ImageGallery from './imageGallery/ImageGallery';
import Download from './download/Download';
import Explosion from './explosion/Explosion';

const Components = {
    hero: Hero,
    textAndImage: TextAndImage,
    simpleHeader: SimpleHeader,
    ingress: Ingress,
    textBlock: TextBlock,
    stories: Stories,
    greeting: Greeting,
    linkBlock: LinkBlock,
    footer: Footer,
    preambleText: PreambleText,
    bodyText: BodyText,
    callToAction: CallToAction,
    simpleHeader: SimpleHeader,
    header: Header,
    owners: Owners,
    timeline: Timeline,
    textBlockExtraInfo: TextBlockExtraInfo,
    gallery: ImageGallery,
    download: Download,
    explosion: Explosion,
}

const block = (block) => {
    // component does exist
   
    if (typeof Components[block.component] !== "undefined") {
      return React.createElement(Components[block.component], {
        key: block._key,
        block: block
      });
    }
    // component doesn't exist yet
    console.log(`The component ${block.component} has not been created yet.`);
    return React.createElement(
      () => <div>The component {block.component} has not been created yet.</div>,
      { key: block._key }
    );
  }

  block.displayName = 'component';

  export default block;