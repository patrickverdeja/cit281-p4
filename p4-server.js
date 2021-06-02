const {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
} = require("./p4-module.js");

const fastify = require("fastify")();

fastify.get("/cit/question", (request, reply) => {
  let code = 200;
  let sendQuestion = {
    error: "",
    statusCode: code,
    questions: getQuestions(),
  };
  reply
    .code(code)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(sendQuestion);
});

fastify.get("/cit/answer", (request, reply) => {
  let code = 200;
  let sendAnswer = {
    error: "",
    statusCode: code,
    answers: getAnswers(),
  };

  reply
    .code(code)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(sendAnswer);
});

fastify.get("/cit/questionanswer", (request, reply) => {
  let code = 200;
  let sendQuestionAnswer = {
    error: "",
    statusCode: code,
    answers: getQuestionsAnswers(),
  };

  reply
    .code(code)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(sendQuestionAnswer);
});

fastify.get("/cit/question/:number", (request, reply) => {
  let numberInput = request.params.number;

  let code = 200;
  let getQuestionNumber = getQuestion(numberInput);
  const { question, number, error } = getQuestionNumber;
  let sendQuestion = {
    error: error,
    statusCode: code,
    question: question,
    number: number,
  };

  reply
    .code(code)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(sendQuestion);
});

fastify.get("/cit/answer/:number", (request, reply) => {
  let numberInput = request.params.number;

  let code = 200;
  let getQuestionAnswer = getAnswer(numberInput);
  const { answer, number, error } = getQuestionAnswer;
  let sendAnswer = {
    error: error,
    statusCode: code,
    answer: answer,
    number: number,
  };

  reply
    .code(code)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(sendAnswer);
});

fastify.get("/cit/questionanswer/:number", (request, reply) => {
  let numberInput = request.params.number;

  let code = 200;
  const { question, answer, number, error } = getQuestionAnswer(numberInput);
  let sendQuestionAnswer = {
    error,
    statusCode: code,
    question,
    answer,
    number,
  };
  reply
    .code(code)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(sendQuestionAnswer);
});

fastify.get("*", (request, reply) => {
  let code = 404;
  let notFound = {
    error: "Route not found",
    statusCode: code,
  };
  reply
    .code(code)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(notFound);
});

const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});


fastify.get("/cit/student/questiontime", (request, reply) => {
  let code = 200
  let questionRoute = {
    error: "",
    statusCode: code,
  };

  reply 
  .coode(code)
  .header("Content-Type", "application/json; charset=utf-8")
  .send(questionRoute);
  }
}