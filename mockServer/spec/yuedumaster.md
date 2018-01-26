FORMAT: 1A

# 百姓头条活动 api spec

百姓头条 2018 春节活动 api

## 用户参与活动数据 [/yuedu/master/task?task_id=20007&mid=null]

### 获取消息 [GET]

+ Response 200 (application/json)

        {
          "err": 0,
          "data": {
            "dcount": 2,
            "eff_dcount": 1,
            "rank": 1,
            "money": 2,
            "disciple_info": [
              {
                "Did": 3,
                "Nickname": "小猪",
                "Created_time": "2018-01-09 12:48:11",
                "info": "无效徒弟"
              },
              {
                "Did": 195,
                "Nickname": "Hacketz",
                "Created_time": "2018-01-09 17:41:00",
                "info": "有效徒弟"
              }
            ],
            "rank_data": [
              {
                "dcount": 1,
                "money": 2,
                "status": "finished"
              },
              {
                "dcount": 3,
                "money": 5,
                "status": "doing"
              },
              {
                "dcount": 5,
                "money": 10,
                "status": "locked"
              },
              {
                "dcount": 10,
                "money": 20,
                "status": "locked"
              },
              {
                "dcount": 20,
                "money": 50,
                "status": "locked"
              },
              {
                "dcount": 30,
                "money": 60,
                "status": "locked"
              },
              {
                "dcount": 50,
                "money": 100,
                "status": "locked"
              },
              {
                "dcount": 100,
                "money": 300,
                "status": "locked"
              },
              {
                "dcount": 200,
                "money": 450,
                "status": "locked"
              },
              {
                "dcount": 400,
                "money": 1000,
                "status": "locked"
              },
              {
                "dcount": 700,
                "money": 1500,
                "status": "locked"
              },
              {
                "dcount": 1000,
                "money": 3000,
                "status": "locked"
              },
              {
                "dcount": 2000,
                "money": 7500,
                "status": "locked"
              },
              {
                "dcount": 5000,
                "money": 16000,
                "status": "locked"
              },
              {
                "dcount": 20000,
                "money": 55555,
                "status": "locked"
              },
              {
                "dcount": 30000,
                "money": 99999,
                "status": "locked"
              }
            ]
          }
        }

