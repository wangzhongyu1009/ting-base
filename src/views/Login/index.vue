<!--
  Generated template for the Login page.
  Created by Wang Zhongyu on 2019/04/22.
  If necessary, Please contact zy.wang@muheda.com
-->

<template>
  <div class="login">
    <div class="outer_box">
      <div class="inner_box">
        <div class="login_form_container">
          <div class="login_title">
            项目管理系统
          </div>
          <Form
            :model="loginForm"
            class="login_form"
          >
            <FormItem>
              <Input
                v-model="loginForm.userName"
                placeholder="请输入用户名"
                class="login_input"
              />
            </FormItem>
            <FormItem>
              <Input
                v-model="loginForm.password"
                placeholder="请输入密码"
                type="password"
                class="login_input"
              />
            </FormItem>
            <FormItem>
              <Input
                v-model="loginForm.code"
                placeholder="图片验证码"
                class="login_input input_code"
              />
              <span class="code">{{ verificationCode }}</span>
              <span
                class="change_code_btn"
                @click="changeCode"
              >换一张</span>
            </FormItem>
            <FormItem>
              <Button
                class="submit_btn"
                type="primary"
                @click="login"
              >
                登录
              </Button>
            </FormItem>
            <FormItem>
              <div
                class="reset_psw_btn"
                @click="resetPassword"
              >
                忘记密码
              </div>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>

    <Modal
      v-model="modal"
      :mask-closable="false"
      class
    >
      <p slot="header">
        找回密码
      </p>
      <div style="margin-right:80px">
        <Form
          ref="oForm"
          :model="resetPswForm"
          :label-width="100"
        >
          <FormItem
            label="用户名："
            prop="userName"
          >
            <Input
              v-model="resetPswForm.userName"
              placeholder="请输入用户名"
            />
          </FormItem>
          <FormItem
            label="邮箱地址："
            prop="email"
          >
            <Input
              v-model="resetPswForm.email"
              placeholder="请输入电子邮箱地址"
            />
          </FormItem>
          <FormItem
            label="验证码："
            prop="code"
          >
            <Input
              v-model="resetPswForm.code"
              placeholder="请输入"
              class="modal_code_input"
              style="width:50%;vertical-align:top"
            />
            <span class="modal_code">{{ verificationCode }}</span>
            <span
              class="modal_change_code_btn"
              @click="changeCode"
            >换一张</span>
          </FormItem>
        </Form>
      </div>
      <div slot="footer">
        <t-button
          text="确定"
          @click="submit"
        />
      </div>
    </Modal>
  </div>
</template>

<script src="./src/index.js"></script>

<style lang="scss" src="./src/style.scss"></style>
