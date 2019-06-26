const apiTypes = {
  array: [{name: '', age: 0, avatar:'', desc: '', sex: ''}],
  number: 0,
  string: '',
  boolean: true,
}

const params = {
  /** @type {number} 用户id */
  id: apiTypes.number
}

const result = {
  code: apiTypes.number,
  msg: apiTypes.string,
  data: apiTypes.array
}

type paramsType = typeof params;
type resultType = typeof result;

function getUser(params:paramsType):resultType {
  console.log('测试一下啊', params.id);
  return {
    code: 200,
    msg: 'success',
    data: [{}]
  }
}

const i = getUser({id: 1});

