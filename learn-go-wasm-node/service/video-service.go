package service

import "github.com/m/entity"

// VideoService include resolve the video func
type VideoService interface {
	Save(entity.Video) entity.Video
	FindAll() []entity.Video
}

type videoService struct {
	videos []entity.Video
}

func (service *videoService) Save(video entity.Video) {
	service.videos = append(service.videos, video)
}

func (service *videoService) FindAll() []entity.Video {
	return service.videos
}
