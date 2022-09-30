/* 
[rewrite_remote]
http:\/\/httpbin\.org\/post url script-response-body 
*/

const responseBody = $response.body;
const requestBody = $request.body;

console.log('请求体：', requestBody);
console.log('响应体：', responseBody);

$notify('重定测试', '测试获取请求体', `# 请求体\n${requestBody}\n\n# 请求体：\n${responseBody}`);

$done($response.body);
