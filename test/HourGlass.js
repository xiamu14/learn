/**
 * 沙漏，倒数，秒
 */

class HourGlass {
  constructor(times) {
    this.times = times;
    this.current = times;
  }
  // 启动沙漏
  start(run, end) {
    this.timeTag = setInterval(() => {
      if (this.current > 0) {
        run(this.current);
        this.current -= 1;
      } else {
        end();
        clearInterval(this.timeTag);
      }
    }, 1000);
  }
  // 暂停沙漏
  stop() {
    clearInterval(this.timeTag);
  }
  // 清除沙漏时间
  clear() {
    clearInterval(this.timeTag);
    this.current = this.times;
  }
}

const hourGlass = new HourGlass(10);
hourGlass.start((current)=>{
  if(current === 4){
    hourGlass.stop();
  }
  console.log(current);
}, ()=>{
  console.log('计时结束');
})
