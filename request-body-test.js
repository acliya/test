/* 
访问 http://httpbin.org/forms/post 提交表单进行测试。

[rewrite_local]
http:\/\/httpbin\.org\/post url script-request-body https://raw.githubusercontent.com/acliya/test/main/request-body-test.js
*/

const responseBody = $response.body;
const requestBody = $request.body;

console.log('请求数据：', requestBody);
console.log('响应数据：', responseBody);

$notify('重写测试', '测试获取请求体', `# 请求数据\n${requestBody}\n\n# 响应数据：\n${responseBody}`);

$done($response.body);
