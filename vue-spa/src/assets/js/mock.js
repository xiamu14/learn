import Mock from 'mockjs';
import { newsData, videoData, imageData } from './mockData';

/**
 *
 * @param {需要拦截的 api} Sring
 */

export function getMockNews(url) {
  const data = Mock.mock(url, newsData);
  return data;
}

export function getMockVideo(url) {
  const data = Mock.mock(url, videoData);
  return data;
}

export function getMockImage(url) {
  const data = Mock.mock(url, imageData);
  return data;
}
