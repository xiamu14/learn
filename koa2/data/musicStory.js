/**
 * 音乐故事图鉴接口模拟数据
 */
const { musicians } = require('./musicStory/musicians');
const { countries } = require('./musicStory/countires');
const { song } = require('./musicStory/song');
//  音乐家数据
exports.musicStoryData = {
  musicians,
  countries,
  song
}
