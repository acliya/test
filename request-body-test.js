/* 
访问 http://httpbin.org/forms/post 提交表单进行测试。

[rewrite_local]
http:\/\/httpbin\.org\/post url script-response-body https://raw.githubusercontent.com/acliya/test/main/request-body-test.js
*/

const responseBody = $response.body;
const requestBody = $request.body;

console.log('请求体：', requestBody);
console.log('响应体：', responseBody);

$notify('重定测试', '测试获取请求体', `# 请求体\n${requestBody}\n\n# 请求体：\n${responseBody}`);

$done($response.body);
