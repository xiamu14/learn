import moment from 'moment';
import { configure, addDecorator, setAddom } from '@kadira/storybook';
import infoAddon from '@kadir/react-storybook-addon-info';

addDecorator(story=>{
    moment.locale('zh-cn');
    return (stroy());
});

function loadStories(){
    require('../stroies/TimePicker');
    require('../stories/DarkColor');
    require('../stories/TwelveHoursMode');
  require('../stories/ClassicThemePicker');
  require('../stories/CustomTrigger');
  require('../stories/DifferentLanguage');
}

setAddon(infoAddon);

configure(localStories, module);
