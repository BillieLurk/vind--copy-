// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

import siteLandingPage from './siteLandingPage';
import siteRoutes from './siteRoutes';
import story from './documents/story';
import page from './documents/page'
import siteContacts from './siteContacts';
import siteSettings from './siteSettings';

import hero from './pageComponents/hero';
import textAndImage from './pageComponents/textAndImage';
import textBlock from './pageComponents/textBlock';
import ingress from './pageComponents/ingress';
import callToAction from './callToAction';
import storyGallery from './pageComponents/storyGallery'
import greeting from './pageComponents/greeting';
import linkBlock from './pageComponents/linkBlock';
import footer from './pageComponents/footer';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import bodyText from './pageComponents/bodyText';
import preambleText from './pageComponents/preambleText';
import pageBuilder from './objects/pageBuilder';
import simpleHeader from './pageComponents/simpleHeader';
import header from './pageComponents/header';
import owners from './pageComponents/owners';
import timeline from './pageComponents/timeline';
import event from './pageComponents/event';
import textBlockExtraInfo from './pageComponents/textBlockExtraInfo';
import storyBuilder from './objects/storyBuilder';
import gallery from './pageComponents/gallery';
import download from './pageComponents/downloadButton';
import explosion from './pageComponents/explosion';
import simpleText from './portableTexts/simpleText';


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    simpleText,
    siteLandingPage,
    siteRoutes,
    page,
    siteContacts,
    siteSettings,
    pageBuilder,
    storyBuilder,

    hero,
    textAndImage,
    textBlock,
    callToAction,
    storyGallery,
    greeting,
    linkBlock,
    footer,
    simpleHeader,
    header,
    owners,
    timeline,
    event,
    gallery,
    download,
    explosion,

    ingress,
    bodyText,
    preambleText,
    textBlockExtraInfo
    
  ]),
})
