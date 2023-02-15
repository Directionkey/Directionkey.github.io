<template>
  <div id="app" style="display: flex; flex-flow: column; margin: 20px;height:60vh">
    <div style="width: 100%; border: 1px solid #000">
      <!-- 用来获取消息体高度 -->
      <div id="okk" style=" height: 50vh; overflow: auto">
        <!-- 消息 -->
        <div style="width: 80%;height: 40px;" v-for="(x, i) in msgList" :key="i">
          <!-- 用户消息 头像可选加入-->
          <div
            v-if="x.my"
            style="
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              height: 30px;
            "
          >
            <div style="width: 400px; height: 50px">
              <div style="border-radius: 35px; height: 30px; background-color: #3296fa33">
                <span style="word-break: break-all; height: 30px">{{
                  x.msg
                }}</span>
              </div>
            </div>
          </div>
          <!-- 机器人消息 -->
          <div
            v-if="!x.my"
            style="display: flex; flex-direction: row; align-items: flex-start"
          >
            <div style="width: 500px;height:50px;">
              <div style="width: 500px;height:30px;border-radius: 35px; background-color: #f9f9f9">
                <span style="word-break: break-all;height:30px">{{ x.msg }}</span>
              </div>
            </div>
          </div>
        </div>

        <div style="height: 130px"></div>
      </div>
    </div>

    <!-- 底部导航栏 -->
    <div
      style="
        position: fixed;
        bottom: 0px;
        width: 100%;
        margin: px auto;
      "
    >
      <!-- <div
        style="
          font-size: 55px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          width: 20%;
          margin: 0;
        "
      >
        <input
          @blur="entapi"
          required
          v-model="api"
          type="text"
          style="
            width: 75%;
            height: 45px;
            border-radius: 50px;
            background-color: #f0f0f0;
          "
          @confirm="sendMsg"
          confirm-type="search"
          placeholder-class="my-neirong-sm"
          placeholder=""
        />
      </div> -->
      <div
        style="
          font-size: 55px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          width: 40%;
        "
      >
        <input
          v-on:keyup.enter="sendMsg"
          v-model="msg"
          type="text"
          style="
            width: 80%;
            height: 45px;
            border-radius: 50px;
            padding-left: 20px;
            margin-left: 10px;
            background-color: #f0f0f0;
          "
          @confirm="sendMsg"
          confirm-type="search"
          placeholder-class="my-neirong-sm"
          placeholder="用一句简短的话描述您的问题,回车或者点击后面发送按钮"
        />
        <button
          @click="sendMsg"
          :disabled="msgLoad"
          style="
            height: 45px;
            width: 20%;
            color: #030303;
            border-radius: 2500px;
          "
        >
          {{ sentext }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      api: "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",
      msgLoad: false,
      anData: {},
      sentext: "先输入api再发送问题",

      animationData: {},
      showTow: false,
      msgList: [
        {
          my: false,
          msg: "你好我是openAI机器人,请问有什么问题可以帮助您?",
        },
      ],
      msgContent: "",
      msg: "",
    };
  },
  methods: {
    entapi() {
      this.sentext = "api检测中";
      axios
        .post(
          "https://api.openai.com/v1/completions",
          {
            prompt: "你好呀",
            max_tokens: 2048,
            model: "text-davinci-003",
          },
          {
            headers: {
              "content-type": "application/json",
              Authorization: "Bearer " + this.api,
            },
          }
        )
        .then((res) => {
          console.log("suss", res);
          this.msgLoad = false;
          this.sentext = "发送";
        })
        .catch((error) => {
          console.log("error", error);
          console.log(error.code);
          if (error.code == "ERR_BAD_REQUEST") {
            this.sentext = "apikey错误，检查确认后重新输入";
            this.msgLoad = true;

            return 0;
          }
        });
    },
    sendMsg() {
      // 消息为空不做任何操作
      if (this.msg == "") {
        return 0;
      }
      if (this.api == "") {
        this.sentext = "请输入apikey再进行请求";
        return 0;
      }
      this.sentext = "请求中";
      this.msgList.push({
        msg: this.msg,
        my: true,
      });
      console.log(this.msg);
      this.msgContent += "YOU:" + this.msg + "\n";
      this.msgLoad = true;
      // 清除消息
      this.msg = "";
      axios
        .post(
          "https://api.openai.com/v1/completions",
          {
            prompt: this.msgContent,
            max_tokens: 2048,
            model: "text-davinci-003",
          },
          {
            headers: {
              "content-type": "application/json",
              Authorization: "Bearer " + this.api,
            },
          }
        )
        .then((res) => {
          console.log(res);
          let text = res.data.choices[0].text
            .replace("openai:", "")
            .replace("openai：", "")
            .replace(/^\n|\n$/g, "");
          console.log(text);
          this.msgList.push({
            msg: text,
            my: false,
          });
          this.msgContent += text + "\n";
          this.msgLoad = false;
          this.sentext = "发送";
        })
        .catch((error) => {
          console.log("error", error);
          console.log(error.code);
          this.sentext = "请求失败,重新输入问题发送";
          this.msgLoad = false;
        });
    },
  },
};
</script>
