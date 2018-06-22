import Gantt from "frappe-gantt";

const tasks = [
  {
    id: '1',
    name: '部署 year-progress',
    start: '2018-6-28',
    end: '2018-6-31',
    progress: 20,
  },
  {
    id: '2',
    name: '完成持续集成自动部署',
    start: '2018-6-31',
    end: '2018-7-1',
    progress: 20,
    dependencies: ['1'],
  },
];
const gantt = new Gantt("#gantt", tasks, {
  header_height: 50,
  column_width: 30,
  step: 24,
  view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
  bar_height: 20,
  bar_corner_radius: 3,
  arrow_curve: 5,
  padding: 18,
  view_mode: 'Day',
  date_format: 'YYYY-MM-DD',
  custom_popup_html: null
});

gantt.change_view_mode('Day');
