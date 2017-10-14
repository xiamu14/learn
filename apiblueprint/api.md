FORMAT: 1A

# OHCAT API

hello world

## 消息 [/messages]

### 获取消息 [GET]

+ Response 200 (application/json)
        {
          "hello": "world"
        }

+ Response 400 (application/json)
        {
            "state": 400,
            "msg": "Error: 400"
        }
