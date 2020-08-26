export interface Task {
  actions: SubTask[];
  title: string;
  id: string;
}

export interface SubTask {
  id: string;
  title: string;
  type: "active" | "finished";
  startTime: string;
  endTime: string;
}

export const taskArray: Task[] = [
  {
    id: "0",
    title: '一朝清单开发项目',
    actions: [
      {
        id: "1",
        title: "优化注册",
        type: "active",
        startTime: "2013-2-1 11:00", // year/month/day hover:minute
        endTime: "2013-2-1 11:10",
      },
      {
        id: "1",
        title: "优化样式",
        type: "active",
        startTime: "2013-2-1 12:00", // year/month/day hover:minute
        endTime: "2013-2-1 12:30",
      },
      {
        id: "1",
        title: "优化",
        type: "active",
        startTime: "2013-2-1 10:00", // year/month/day hover:minute
        endTime: "2013-2-1 11:00",
      },
      {
        id: "2",
        title: "完成时间轴组件",
        type: "active",
        startTime: "2013-2-1 14:00", // year/month/day hover:minute
        endTime: "2013-2-1 14:20",
      },
      {
        id: "2",
        title: "添加时间功能",
        type: "active",
        startTime: "2013-2-2 14:40", // year/month/day hover:minute
        endTime: "2013-2-2 16:20",
      },
    ],
  },
];
