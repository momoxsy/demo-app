import Mock from "mockjs";

export default Mock.mock(/hello/, "get", {
  code: 200,
  message: "",
  content: 'hello world'
});